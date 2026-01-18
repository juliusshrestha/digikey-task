import {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';

import HighCognitiveLoadWarning from '#components/HighCognitiveLoadWarning';
import type { CognitiveLoadData } from '#hooks/useCognitiveLoad';
import productData from '#utils/productData';

interface TaskDefinition {
    id: string;
    title: string;
    instructions: string[];
    timeLimitSeconds: number;
}

type RoundId = 1 | 2;

interface RoundResult {
    round: RoundId;
    startedAtMs: number;
    endedAtMs: number;
    endedReason: 'completed' | 'time_limit' | 'threshold_reached' | 'cancelled';
    durationSeconds: number;
    thresholdReached: boolean;
    answerText: string;
    isAnswerValid: boolean;
    sampleCount: number;
    avgScore: number;
    maxScore: number;
    highScoreCount: number;
    overloadCount: number;
    avgGaze: number;
    avgEmotion: number;
    avgMouse: number;
}

interface Props {
    cognitiveLoad: CognitiveLoadData | null;
    isConnected: boolean;
    isSimplifiedMode: boolean;
    setIsSimplifiedMode: (value: boolean) => void;
    onClearAllFilters: () => void;
}

const DEFAULT_TASKS: TaskDefinition[] = [
    {
        id: 'battery-task-1',
        title: 'Task: Find a matching battery part',
        instructions: [
            'Use filters to narrow down the list.',
            'Try selecting Battery Chemistry and Voltage - Rated.',
            'Pick any product from the table and note the Mfr Part #.',
            'Click “Complete task” when you are done.',
        ],
        timeLimitSeconds: 60,
    },
];

const SCORE_THRESHOLD = 0.7; // 70%

function TaskExperiment(props: Props) {
    const {
        cognitiveLoad,
        isConnected,
        isSimplifiedMode,
        setIsSimplifiedMode,
        onClearAllFilters,
    } = props;

    const [selectedTaskId, setSelectedTaskId] = useState(DEFAULT_TASKS[0]?.id ?? '');
    const selectedTask = useMemo(
        () => DEFAULT_TASKS.find((t) => t.id === selectedTaskId) ?? DEFAULT_TASKS[0],
        [selectedTaskId],
    );

    const [currentRound, setCurrentRound] = useState<RoundId>(1);
    const [isRunning, setIsRunning] = useState(false);
    const [timeLeftSeconds, setTimeLeftSeconds] = useState(selectedTask.timeLimitSeconds);
    const [showWarning, setShowWarning] = useState(false);
    const [hasStartedExperiment, setHasStartedExperiment] = useState(false);
    const [answerText, setAnswerText] = useState('');
    const [answerTouched, setAnswerTouched] = useState(false);

    const [roundResults, setRoundResults] = useState<RoundResult[]>([]);

    // Accumulators for the active round (useRef to avoid re-rendering on every sample)
    const startedAtMsRef = useRef<number | null>(null);
    const sampleCountRef = useRef(0);
    const sumScoreRef = useRef(0);
    const maxScoreRef = useRef(0);
    const highScoreCountRef = useRef(0);
    const overloadCountRef = useRef(0);
    const consecutiveHighRef = useRef(0);
    const thresholdReachedRef = useRef(false);
    const sumGazeRef = useRef(0);
    const sumEmotionRef = useRef(0);
    const sumMouseRef = useRef(0);

    const resetAccumulators = useCallback(() => {
        startedAtMsRef.current = null;
        sampleCountRef.current = 0;
        sumScoreRef.current = 0;
        maxScoreRef.current = 0;
        highScoreCountRef.current = 0;
        overloadCountRef.current = 0;
        consecutiveHighRef.current = 0;
        thresholdReachedRef.current = false;
        sumGazeRef.current = 0;
        sumEmotionRef.current = 0;
        sumMouseRef.current = 0;
    }, []);

    const validMfrPartNumbers = useMemo(() => {
        const full = new Set<string>();
        const base = new Set<string>();

        const normalize = (s: string) => s.trim().toLowerCase();
        const stripSuffix = (s: string) => s.replace(/-\d{4}$/, '');

        productData.forEach((items) => {
            const detail = items.find((i) => i.type === 'productDetail');
            if (detail?.type !== 'productDetail') return;

            const pn = detail.value.productNumber;
            if (!pn) return;

            const normalized = normalize(pn);
            full.add(normalized);
            base.add(normalize(stripSuffix(pn)));
        });

        return { full, base };
    }, []);

    const isAnswerValid = useMemo(() => {
        const normalized = answerText.trim().toLowerCase();
        if (!normalized) return false;

        if (validMfrPartNumbers.full.has(normalized)) return true;
        if (validMfrPartNumbers.base.has(normalized)) return true;
        return false;
    }, [answerText, validMfrPartNumbers.base, validMfrPartNumbers.full]);

    const finalizeRound = useCallback((endedReason: RoundResult['endedReason']) => {
        const startedAtMs = startedAtMsRef.current ?? Date.now();
        const endedAtMs = Date.now();
        const durationSeconds = Math.max(0, Math.round((endedAtMs - startedAtMs) / 1000));

        const sampleCount = sampleCountRef.current;
        const avgScore = sampleCount > 0 ? sumScoreRef.current / sampleCount : 0;
        const maxScore = maxScoreRef.current;
        const highScoreCount = highScoreCountRef.current;
        const overloadCount = overloadCountRef.current;
        const avgGaze = sampleCount > 0 ? sumGazeRef.current / sampleCount : 0;
        const avgEmotion = sampleCount > 0 ? sumEmotionRef.current / sampleCount : 0;
        const avgMouse = sampleCount > 0 ? sumMouseRef.current / sampleCount : 0;

        setRoundResults((prev) => ([
            ...prev,
            {
                round: currentRound,
                startedAtMs,
                endedAtMs,
                endedReason,
                durationSeconds,
                thresholdReached: thresholdReachedRef.current,
                answerText,
                isAnswerValid,
                sampleCount,
                avgScore,
                maxScore,
                highScoreCount,
                overloadCount,
                avgGaze,
                avgEmotion,
                avgMouse,
            },
        ]));

        setIsRunning(false);
        resetAccumulators();
    }, [answerText, currentRound, isAnswerValid, resetAccumulators]);

    const startRound = useCallback(() => {
        if (!selectedTask) return;
        if (!isConnected) return;

        // Each round starts from a clean filter state
        onClearAllFilters();

        // Round 1 starts in normal UI, round 2 starts in simplified UI
        if (currentRound === 1) setIsSimplifiedMode(false);
        if (currentRound === 2) setIsSimplifiedMode(true);

        setShowWarning(false);
        if (currentRound === 1) {
            setHasStartedExperiment(true);
        }
        setAnswerText('');
        setAnswerTouched(false);
        setIsRunning(true);
        setTimeLeftSeconds(selectedTask.timeLimitSeconds);
        resetAccumulators();
        startedAtMsRef.current = Date.now();
    }, [
        currentRound,
        isConnected,
        onClearAllFilters,
        resetAccumulators,
        selectedTask,
        setIsSimplifiedMode,
    ]);

    const cancelRound = useCallback(() => {
        if (!isRunning) return;
        onClearAllFilters();
        finalizeRound('cancelled');
    }, [finalizeRound, isRunning, onClearAllFilters]);

    const completeRound = useCallback(() => {
        if (!isRunning) return;
        if (!isAnswerValid) {
            setAnswerTouched(true);
            return;
        }
        const didReachThresholdThisRound = thresholdReachedRef.current;
        finalizeRound('completed');

        if (currentRound === 1) {
            // Do NOT show warning immediately when threshold is reached.
            // Show it after task completion (end of round 1), then switch UI and move to round 2.
            if (didReachThresholdThisRound) {
                setShowWarning(true);
            } else {
                setIsSimplifiedMode(true);
                setCurrentRound(2);
                onClearAllFilters();
            }
        }
    }, [
        currentRound,
        finalizeRound,
        isAnswerValid,
        isRunning,
        onClearAllFilters,
        setIsSimplifiedMode,
    ]);

    const startOver = useCallback(() => {
        setShowWarning(false);
        setIsRunning(false);
        setCurrentRound(1);
        setIsSimplifiedMode(false);
        setRoundResults([]);
        setHasStartedExperiment(false);
        setAnswerText('');
        setAnswerTouched(false);
        setTimeLeftSeconds(selectedTask.timeLimitSeconds);
        resetAccumulators();
        onClearAllFilters();
    }, [onClearAllFilters, resetAccumulators, selectedTask.timeLimitSeconds, setIsSimplifiedMode]);

    // Timer
    useEffect(() => {
        if (!isRunning) return undefined;

        const timer = setInterval(() => {
            setTimeLeftSeconds((prev) => {
                if (prev <= 1) {
                    finalizeRound('time_limit');
                    if (currentRound === 1) {
                        setIsSimplifiedMode(true);
                        setCurrentRound(2);
                        onClearAllFilters();
                    }
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [currentRound, finalizeRound, isRunning, onClearAllFilters, setIsSimplifiedMode]);

    // Sample cognitive load while running
    useEffect(() => {
        if (!isRunning) return;
        if (!cognitiveLoad) return;

        // Some backends send score as 0..1, others as 0..100.
        const rawScore = cognitiveLoad.score ?? 0;
        const normalizedScore = rawScore > 1 ? rawScore / 100 : rawScore;
        const isHigh = normalizedScore >= SCORE_THRESHOLD;

        sampleCountRef.current += 1;
        sumScoreRef.current += normalizedScore;
        maxScoreRef.current = Math.max(maxScoreRef.current, normalizedScore);
        sumGazeRef.current += cognitiveLoad.gaze_score ?? 0;
        sumEmotionRef.current += cognitiveLoad.emotion_score ?? 0;
        sumMouseRef.current += cognitiveLoad.mouse_score ?? 0;

        if (cognitiveLoad.overload_detected) {
            overloadCountRef.current += 1;
        }

        if (isHigh) {
            highScoreCountRef.current += 1;
            consecutiveHighRef.current += 1;
        } else {
            consecutiveHighRef.current = 0;
        }

        // Mark threshold reached during round 1, but DO NOT open warning modal here.
        if (currentRound === 1 && isHigh) {
            thresholdReachedRef.current = true;
        }
    }, [cognitiveLoad, currentRound, isRunning]);

    const canStart = isConnected && !isRunning;

    const round1 = roundResults.find((r) => r.round === 1);
    const round2 = roundResults.find((r) => r.round === 2);

    const comparison = useMemo(() => {
        if (!round1 || !round2) return null;
        return {
            avgScoreDelta: round2.avgScore - round1.avgScore,
            maxScoreDelta: round2.maxScore - round1.maxScore,
            timeDelta: round2.durationSeconds - round1.durationSeconds,
        };
    }, [round1, round2]);

    return (
        <div className="mx-4 mt-6 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                <div className="px-8 py-6 border-b border-gray-200 bg-gray-50">
                    <div className="flex items-start justify-between gap-6 flex-wrap">
                        <div>
                            <h2 className="text-lg font-bold text-gray-900">Cognitive Load Task</h2>
                            <p className="text-sm text-gray-600 mt-1">
                                Round 1 runs in the normal UI.
                                {' '}
                                If cognitive load reaches 70%, we switch
                                {' '}
                                to a simplified UI for round 2.
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <label htmlFor="task-select" className="flex items-center gap-3">
                                <span className="text-sm text-gray-600">Task</span>
                                <select
                                    id="task-select"
                                    value={selectedTaskId}
                                    onChange={(e) => setSelectedTaskId(e.target.value)}
                                    disabled={isRunning}
                                    className="text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-orange-500 disabled:opacity-50"
                                >
                                    {DEFAULT_TASKS.map((t) => (
                                        <option key={t.id} value={t.id}>
                                            {t.title}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="px-8 py-6">
                    {!isConnected && (
                        <div className="mb-4 text-sm text-red-600">
                            WebSocket is not connected.
                            {' '}
                            Start the cognitive load server to run the task.
                        </div>
                    )}

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                        {/* Left: round + timer + controls (compact) */}
                        <div className="lg:col-span-1">
                            <div className="bg-white border border-gray-200 rounded-lg p-5">
                                <div className="text-sm font-semibold text-gray-900">
                                    Current round:
                                    {' '}
                                    {currentRound}
                                </div>
                                <div className="text-sm text-gray-700 mt-1">
                                    Time left:
                                    {' '}
                                    <span className="font-semibold">
                                        {timeLeftSeconds}
                                        s
                                    </span>
                                </div>

                                <div className="mt-3 max-w-sm">
                                    <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-orange-500 transition-all duration-500"
                                            style={{
                                                width: `${selectedTask ? ((selectedTask.timeLimitSeconds - timeLeftSeconds) / selectedTask.timeLimitSeconds) * 100 : 0}%`,
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="mt-4 flex items-center gap-2 flex-wrap">
                                    <button
                                        type="button"
                                        onClick={startRound}
                                        disabled={!canStart}
                                        className="px-3.5 py-2 rounded-lg bg-[#2d2d86] text-white text-sm font-medium hover:bg-[#3d3d96] disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {currentRound === 1 ? 'Start round 1' : 'Start round 2'}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={completeRound}
                                        disabled={!isRunning}
                                        className="px-3.5 py-2 rounded-lg bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Complete task
                                    </button>
                                    <button
                                        type="button"
                                        onClick={cancelRound}
                                        disabled={!isRunning}
                                        className="px-3.5 py-2 rounded-lg bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        onClick={startOver}
                                        className="ml-auto px-3.5 py-2 rounded-lg bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                    >
                                        Reset
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Middle: task + answer (red-box area) */}
                        <div className="lg:col-span-1">
                            <div className="bg-white border border-gray-200 rounded-lg p-5 min-h-[168px]">
                                {!hasStartedExperiment ? (
                                    <div className="border border-dashed border-gray-300 rounded-lg p-4 bg-white">
                                        <div className="text-sm font-semibold text-gray-900 mb-1">
                                            Task will appear after you start
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            Click
                                            {' '}
                                            <span className="font-medium">Start round 1</span>
                                            {' '}
                                            to reveal the task and begin the timer.
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div className="text-sm font-semibold text-gray-900 mb-2">Task</div>
                                        <ol className="list-decimal pl-5 text-sm text-gray-700 space-y-1">
                                            {selectedTask?.instructions.map((line) => (
                                                <li key={line}>{line}</li>
                                            ))}
                                        </ol>

                                        <div className="mt-4 border border-gray-200 rounded-lg p-4 bg-gray-50">
                                            <div className="text-sm font-semibold text-gray-900 mb-2">
                                                Enter your result
                                            </div>
                                            <div className="text-sm text-gray-600 mb-3">
                                                Type the
                                                {' '}
                                                <span className="font-medium">Mfr Part #</span>
                                                {' '}
                                                you found in the table.
                                            </div>

                                            <div className="flex items-center gap-3 flex-wrap">
                                                <label htmlFor="task-result" className="flex items-center gap-3 flex-wrap">
                                                    <span className="text-sm text-gray-700">Mfr Part #</span>
                                                    <input
                                                        id="task-result"
                                                        type="text"
                                                        value={answerText}
                                                        onChange={(e) => {
                                                            setAnswerText(e.target.value);
                                                            setAnswerTouched(true);
                                                        }}
                                                        onBlur={() => setAnswerTouched(true)}
                                                        disabled={!isRunning}
                                                        placeholder="e.g. ML414H IV01E"
                                                        className="w-72 max-w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 disabled:bg-gray-50 disabled:cursor-not-allowed"
                                                    />
                                                </label>

                                                <div className="text-sm">
                                                    {answerTouched && answerText.trim() && (
                                                        isAnswerValid ? (
                                                            <span className="text-green-700 font-medium">
                                                                Match found
                                                            </span>
                                                        ) : (
                                                            <span className="text-red-700 font-medium">
                                                                No match found
                                                            </span>
                                                        )
                                                    )}
                                                </div>
                                            </div>

                                            {answerTouched && !isAnswerValid && (
                                                <div className="mt-2 text-xs text-gray-500">
                                                    Tip: enter the exact Mfr Part # shown
                                                    {' '}
                                                    in the table
                                                    {' '}
                                                    (suffix like
                                                    {' '}
                                                    <span className="font-medium">-0001</span>
                                                    {' '}
                                                    is okay).
                                                </div>
                                            )}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                            <div className="text-sm font-semibold text-gray-900 mb-3">Results</div>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">UI mode</span>
                                    <span className="font-medium text-gray-900">
                                        {isSimplifiedMode ? 'Simplified' : 'Normal'}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Threshold</span>
                                    <span className="font-medium text-gray-900">70%</span>
                                </div>
                            </div>

                            {(round1 || round2) && (
                                <div className="mt-4 space-y-4">
                                    {round1 && (
                                        <div className="border-t border-gray-200 pt-4">
                                            <div className="text-xs font-semibold text-gray-700 mb-2">Round 1</div>
                                            <div className="text-xs text-gray-600 space-y-1">
                                                <div>
                                                    Ended:
                                                    {' '}
                                                    <span className="text-gray-900">{round1.endedReason}</span>
                                                </div>
                                                <div>
                                                    Duration:
                                                    {' '}
                                                    <span className="text-gray-900">
                                                        {round1.durationSeconds}
                                                        s
                                                    </span>
                                                </div>
                                                <div>
                                                    Avg score:
                                                    {' '}
                                                    <span className="text-gray-900">
                                                        {Math.round(round1.avgScore * 100)}
                                                        %
                                                    </span>
                                                </div>
                                                <div>
                                                    Max score:
                                                    {' '}
                                                    <span className="text-gray-900">
                                                        {Math.round(round1.maxScore * 100)}
                                                        %
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {round2 && (
                                        <div className="border-t border-gray-200 pt-4">
                                            <div className="text-xs font-semibold text-gray-700 mb-2">Round 2</div>
                                            <div className="text-xs text-gray-600 space-y-1">
                                                <div>
                                                    Ended:
                                                    {' '}
                                                    <span className="text-gray-900">{round2.endedReason}</span>
                                                </div>
                                                <div>
                                                    Duration:
                                                    {' '}
                                                    <span className="text-gray-900">
                                                        {round2.durationSeconds}
                                                        s
                                                    </span>
                                                </div>
                                                <div>
                                                    Avg score:
                                                    {' '}
                                                    <span className="text-gray-900">
                                                        {Math.round(round2.avgScore * 100)}
                                                        %
                                                    </span>
                                                </div>
                                                <div>
                                                    Max score:
                                                    {' '}
                                                    <span className="text-gray-900">
                                                        {Math.round(round2.maxScore * 100)}
                                                        %
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {comparison && (
                                        <div className="border-t border-gray-200 pt-4">
                                            <div className="text-xs font-semibold text-gray-700 mb-2">Comparison (Round 2 - Round 1)</div>
                                            <div className="text-xs text-gray-600 space-y-1">
                                                <div>
                                                    Avg score Δ:
                                                    {' '}
                                                    <span className="text-gray-900">
                                                        {Math.round(comparison.avgScoreDelta * 100)}
                                                        %
                                                    </span>
                                                </div>
                                                <div>
                                                    Max score Δ:
                                                    {' '}
                                                    <span className="text-gray-900">
                                                        {Math.round(comparison.maxScoreDelta * 100)}
                                                        %
                                                    </span>
                                                </div>
                                                <div>
                                                    Time Δ:
                                                    {' '}
                                                    <span className="text-gray-900">
                                                        {comparison.timeDelta}
                                                        s
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <HighCognitiveLoadWarning
                isVisible={showWarning}
                onDismiss={() => {
                    setShowWarning(false);
                }}
                onAcceptChange={() => {
                    setShowWarning(false);
                    setIsSimplifiedMode(true);
                    setCurrentRound(2);
                    onClearAllFilters();
                }}
                title="Cognitive load is high"
                message="Your cognitive load reached 70%. The UI is going to change to a simplified version. Please repeat the task again so we can measure and compare."
                showDismiss
                dismissLabel="Keep current UI"
                acceptLabel="Change UI & start round 2"
                showCountdown={false}
                autoAccept={false}
            />
        </div>
    );
}

export default TaskExperiment;
