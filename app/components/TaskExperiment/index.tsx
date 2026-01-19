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
    onTaskChange?: (taskId: string) => void;
}

const DEFAULT_TASKS: TaskDefinition[] = [
    
    {
        id: 'battery-task-1',
        title: 'Task: Find a battery with specific size and dimensions',
        instructions: [
            'Use filters to find a battery with specific size.',
            'Select Size / Dimension filter and choose any size option.',
            'Also select Battery Cell Size and Voltage - Rated filters.',
            'Pick any product from the filtered results and note the Mfr Part #.',
            'Click "Complete task" when you are done.',
        ],
        timeLimitSeconds: 60,
    },
    {
        id: 'battery-task-2',
        title: 'Task: Find a matching battery part',
        instructions: [
            'Use filters to narrow down the list.',
            'Try selecting Battery Chemistry and Voltage - Rated.',
            'Pick any product from the table and note the Mfr Part #.',
            'Click "Complete task" when you are done.',
        ],
        timeLimitSeconds: 60,
    },
    {
        id: 'battery-task-3',
        title: 'Task: Find a battery by dimensions and capacity',
        instructions: [
            'Use filters to narrow down by size and capacity.',
            'Select Size / Dimension filter and choose a dimension option.',
            'Select Capacity filter and choose a capacity value.',
            'Optionally select Manufacturer filter for further narrowing.',
            'Pick any product from the table and note the Mfr Part #.',
            'Click "Complete task" when you are done.',
        ],
        timeLimitSeconds: 60,
    },
    {
        id: 'battery-task-4',
        title: 'Task: Find a battery with specific cell size and voltage',
        instructions: [
            'Use filters to find a battery with specific characteristics.',
            'Select Battery Cell Size filter and choose a cell size.',
            'Select Voltage - Rated filter and choose a voltage value.',
            'Select Size / Dimension filter to further narrow the results.',
            'Pick any product from the filtered table and note the Mfr Part #.',
            'Click "Complete task" when you are done.',
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
        onTaskChange,
    } = props;

    const [selectedTaskId, setSelectedTaskId] = useState(DEFAULT_TASKS[0]?.id ?? '');
    const selectedTask = useMemo(
        () => DEFAULT_TASKS.find((t) => t.id === selectedTaskId) ?? DEFAULT_TASKS[0],
        [selectedTaskId],
    );

    // Notify parent of task change
    useEffect(() => {
        if (onTaskChange) {
            onTaskChange(selectedTaskId);
        }
    }, [selectedTaskId, onTaskChange]);

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
    
    // Grace period tracking (30 seconds)
    const GRACE_PERIOD_SECONDS = 30;
    const thresholdReachedDuringGracePeriodRef = useRef(false);
    const thresholdReachedAfterGracePeriodRef = useRef(false);
    const gracePeriodEndedRef = useRef(false);
    const taskContinuedInSimplifiedModeRef = useRef(false);

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
        thresholdReachedDuringGracePeriodRef.current = false;
        thresholdReachedAfterGracePeriodRef.current = false;
        gracePeriodEndedRef.current = false;
        taskContinuedInSimplifiedModeRef.current = false;
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
        finalizeRound('completed');

        if (currentRound === 1) {
            // If task was continued in simplified mode, Round 2 starts after completion
            if (taskContinuedInSimplifiedModeRef.current) {
                // Task was completed after switching to simplified mode
                // Now start Round 2 (fresh start of same task in simplified mode)
                setIsSimplifiedMode(true);
                setCurrentRound(2);
                onClearAllFilters();
            }
            // SCENARIO A: Early threshold but successful completion (No Warning)
            // If threshold was reached ONLY during grace period and NOT after, skip warning
            else if (
                thresholdReachedDuringGracePeriodRef.current
                && !thresholdReachedAfterGracePeriodRef.current
            ) {
                // User successfully managed the load without intervention
                setIsSimplifiedMode(true);
                setCurrentRound(2);
                onClearAllFilters();
            }
            // SCENARIO C: Threshold reached after grace period - warning already shown
            // If threshold was reached after grace period, warning was shown immediately
            // Just move to round 2 (warning modal onAcceptChange handles this)
            else if (thresholdReachedAfterGracePeriodRef.current) {
                // Warning was already shown, user may have dismissed it
                // If they completed, move to round 2
                setIsSimplifiedMode(true);
                setCurrentRound(2);
                onClearAllFilters();
            }
            // No threshold reached at all - move directly to round 2
            else {
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
                    // Time limit reached (1 minute)
                    if (currentRound === 1 && !taskContinuedInSimplifiedModeRef.current) {
                        // Check if threshold was exceeded after grace period
                        if (thresholdReachedAfterGracePeriodRef.current) {
                            // Threshold exceeded: Continue same task in simplified mode
                            taskContinuedInSimplifiedModeRef.current = true;
                            setIsSimplifiedMode(true);
                            // Don't finalize the round, continue the task
                            // Reset timer to give more time or extend it
                            return selectedTask.timeLimitSeconds; // Give another full minute
                        } else {
                            // No threshold exceeded: Finalize round and show warning
                            finalizeRound('time_limit');
                            // SCENARIO B: Failure to complete without threshold after grace period
                            // Show warning if threshold was NOT reached after grace period
                            setShowWarning(true);
                            return 0;
                        }
                    } else {
                        // Time limit reached in other scenarios, finalize the round
                        finalizeRound('time_limit');
                        if (currentRound === 1) {
                            setIsSimplifiedMode(true);
                            setCurrentRound(2);
                            onClearAllFilters();
                        }
                        return 0;
                    }
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [currentRound, finalizeRound, isRunning, onClearAllFilters, setIsSimplifiedMode, selectedTask.timeLimitSeconds]);

    // Sample cognitive load while running
    useEffect(() => {
        if (!isRunning) return;
        if (!cognitiveLoad) return;
        if (!startedAtMsRef.current) return;

        // Calculate elapsed time since round started
        const elapsedSeconds = Math.floor((Date.now() - startedAtMsRef.current) / 1000);
        const isInGracePeriod = elapsedSeconds < GRACE_PERIOD_SECONDS;

        // Mark grace period as ended
        if (!isInGracePeriod && !gracePeriodEndedRef.current) {
            gracePeriodEndedRef.current = true;
        }

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

        // Track threshold detection based on grace period
        if (currentRound === 1 && isHigh) {
            thresholdReachedRef.current = true;

            if (isInGracePeriod) {
                // Threshold reached during grace period (first 30 seconds)
                thresholdReachedDuringGracePeriodRef.current = true;
                // DO NOT show warning modal during grace period
            } else {
                // SCENARIO C: Threshold reached AFTER grace period
                thresholdReachedAfterGracePeriodRef.current = true;
                // Show warning modal IMMEDIATELY
                if (!showWarning) {
                    setShowWarning(true);
                }
            }
        }
    }, [cognitiveLoad, currentRound, isRunning, showWarning]);

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
                <div className="px-8 py-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                        {/* Left: round + timer + controls */}
                        <div className="flex flex-col">
                            <div className="bg-white border border-gray-200 rounded-lg p-5 h-full flex flex-col">
                                {!hasStartedExperiment && (
                                    <div className="mb-4">
                                        <label htmlFor="task-selector" className="block text-sm font-semibold text-gray-900 mb-2">
                                            Select Task
                                        </label>
                                        <select
                                            id="task-selector"
                                            value={selectedTaskId}
                                            onChange={(e) => {
                                                setSelectedTaskId(e.target.value);
                                            }}
                                            disabled={isRunning}
                                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 disabled:bg-gray-50 disabled:cursor-not-allowed"
                                        >
                                            {DEFAULT_TASKS.map((task) => (
                                                <option key={task.id} value={task.id}>
                                                    {task.title}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                )}
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

                        {/* Middle: task + answer */}
                        <div className="flex flex-col">
                            <div className="bg-white border border-gray-200 rounded-lg p-5 h-full flex flex-col">
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

                        {/* Right: results */}
                        <div className="flex flex-col">
                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 h-full flex flex-col">
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
            </div>

            <HighCognitiveLoadWarning
                isVisible={showWarning}
                onDismiss={() => {
                    setShowWarning(false);
                }}
                onAcceptChange={() => {
                    setShowWarning(false);
                    // If round is still running and task hasn't been continued yet
                    if (isRunning && currentRound === 1 && !taskContinuedInSimplifiedModeRef.current) {
                        // Continue the same task in simplified mode
                        taskContinuedInSimplifiedModeRef.current = true;
                        setIsSimplifiedMode(true);
                        // Don't finalize, just switch UI and continue
                    } else if (!isRunning && currentRound === 1) {
                        // Task was already finalized (time limit), start Round 2
                        setIsSimplifiedMode(true);
                        setCurrentRound(2);
                        onClearAllFilters();
                    }
                }}
                title="Cognitive load is high"
                message="Your cognitive load reached 70%. The UI will change to a simplified version to help you complete the task."
                showDismiss
                dismissLabel="Keep current UI"
                acceptLabel="Switch to simplified UI"
                showCountdown={false}
                autoAccept={false}
            />
        </div>
    );
}

export default TaskExperiment;
