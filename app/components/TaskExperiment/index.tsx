import {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';

import HighCognitiveLoadWarning from '#components/HighCognitiveLoadWarning';
import ResultsModal from '#components/ResultsModal';
import TaskModal from '#components/TaskModal';
import type { CognitiveLoadData } from '#hooks/useCognitiveLoad';

interface TaskDefinition {
    id: string;
    title: string;
    instructions: string[];
    timeLimitSeconds: number;
}

type RoundId = 1 | 2;

interface PhaseMetrics {
    sampleCount: number;
    avgScore: number;
    maxScore: number;
    highScoreCount: number;
    overloadCount: number;
    avgGaze: number;
    avgEmotion: number;
    avgMouse: number;
    durationSeconds: number;
}

interface RoundResult {
    round: RoundId;
    startedAtMs: number;
    endedAtMs: number;
    endedReason: 'completed' | 'time_limit' | 'threshold_reached' | 'cancelled';
    durationSeconds: number;
    thresholdReached: boolean;
    sampleCount: number;
    avgScore: number;
    maxScore: number;
    highScoreCount: number;
    overloadCount: number;
    avgGaze: number;
    avgEmotion: number;
    avgMouse: number;
    // Phase-based metrics
    phase1?: PhaseMetrics; // Before simplified UI
    phase2?: PhaseMetrics; // In simplified UI
    simplifiedModeActivatedAtMs?: number;
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
        title: 'Task: Find a specific Panasonic Energy battery',
        instructions: [
            'Find the battery: BK-200AAB9B-0597 (BATTERY NIMH 1.2V 1.9AH AA) by Panasonic Energy.',
            'Use filters to narrow down the search:',
            '1. Select Manufacturer: Panasonic Energy',
            '2. Select Battery Chemistry: Nickel Metal Hydride',
            '3. Select Battery Cell Size: AA',
            '4. Select Voltage - Rated: 1.2 V',
            'Find the product in the filtered results.',
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
    {
        id: 'battery-task-5',
        title: 'Task: Find Panasonic Energy product with least quantity',
        instructions: [
            'Search for Panasonic Energy manufacturer products.',
            'Use filters to narrow down:',
            '1. Select Manufacturer: Panasonic Energy',
            '2. Select Product Status: Active',
            '3. Select Voltage - Rated: 1.2 V',
            'Find the product with the least quantity available in the filtered results.',
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
    const [timeLeftSeconds, setTimeLeftSeconds] = useState(0);
    const [showWarning, setShowWarning] = useState(false);
    const [showResultsModal, setShowResultsModal] = useState(false);
    const [showTaskModal, setShowTaskModal] = useState(false);
    const [hasStartedExperiment, setHasStartedExperiment] = useState(false);

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

    // Phase-based accumulators
    // Phase 1: Before simplified UI
    const phase1SampleCountRef = useRef(0);
    const phase1SumScoreRef = useRef(0);
    const phase1MaxScoreRef = useRef(0);
    const phase1HighScoreCountRef = useRef(0);
    const phase1OverloadCountRef = useRef(0);
    const phase1SumGazeRef = useRef(0);
    const phase1SumEmotionRef = useRef(0);
    const phase1SumMouseRef = useRef(0);
    const phase1StartedAtMsRef = useRef<number | null>(null);

    // Phase 2: In simplified UI
    const phase2SampleCountRef = useRef(0);
    const phase2SumScoreRef = useRef(0);
    const phase2MaxScoreRef = useRef(0);
    const phase2HighScoreCountRef = useRef(0);
    const phase2OverloadCountRef = useRef(0);
    const phase2SumGazeRef = useRef(0);
    const phase2SumEmotionRef = useRef(0);
    const phase2SumMouseRef = useRef(0);
    const phase2StartedAtMsRef = useRef<number | null>(null);

    // Track when simplified mode was activated
    const simplifiedModeActivatedAtMsRef = useRef<number | null>(null);

    // Grace period tracking (30 seconds)
    const GRACE_PERIOD_SECONDS = 30;
    const gracePeriodEndedRef = useRef(false);

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
        gracePeriodEndedRef.current = false;

        // Reset phase accumulators
        phase1SampleCountRef.current = 0;
        phase1SumScoreRef.current = 0;
        phase1MaxScoreRef.current = 0;
        phase1HighScoreCountRef.current = 0;
        phase1OverloadCountRef.current = 0;
        phase1SumGazeRef.current = 0;
        phase1SumEmotionRef.current = 0;
        phase1SumMouseRef.current = 0;
        phase1StartedAtMsRef.current = null;

        phase2SampleCountRef.current = 0;
        phase2SumScoreRef.current = 0;
        phase2MaxScoreRef.current = 0;
        phase2HighScoreCountRef.current = 0;
        phase2OverloadCountRef.current = 0;
        phase2SumGazeRef.current = 0;
        phase2SumEmotionRef.current = 0;
        phase2SumMouseRef.current = 0;
        phase2StartedAtMsRef.current = null;

        simplifiedModeActivatedAtMsRef.current = null;
    }, []);

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

        // Calculate phase 1 metrics (before simplified UI)
        const phase1SampleCount = phase1SampleCountRef.current;
        let phase1DurationSeconds = durationSeconds;
        if (phase1StartedAtMsRef.current && simplifiedModeActivatedAtMsRef.current) {
            const phase1Start = phase1StartedAtMsRef.current;
            const simplifiedStart = simplifiedModeActivatedAtMsRef.current;
            phase1DurationSeconds = Math.max(
                0,
                Math.round((simplifiedStart - phase1Start) / 1000),
            );
        } else if (simplifiedModeActivatedAtMsRef.current) {
            phase1DurationSeconds = 0;
        }

        const phase1: PhaseMetrics | undefined = phase1SampleCount > 0
            ? {
                sampleCount: phase1SampleCount,
                avgScore: phase1SumScoreRef.current / phase1SampleCount,
                maxScore: phase1MaxScoreRef.current,
                highScoreCount: phase1HighScoreCountRef.current,
                overloadCount: phase1OverloadCountRef.current,
                avgGaze: phase1SumGazeRef.current / phase1SampleCount,
                avgEmotion: phase1SumEmotionRef.current / phase1SampleCount,
                avgMouse: phase1SumMouseRef.current / phase1SampleCount,
                durationSeconds: phase1DurationSeconds,
            }
            : undefined;

        // Calculate phase 2 metrics (in simplified UI)
        const phase2SampleCount = phase2SampleCountRef.current;
        let phase2DurationSeconds = 0;
        if (phase2StartedAtMsRef.current && simplifiedModeActivatedAtMsRef.current) {
            phase2DurationSeconds = Math.max(
                0,
                Math.round((endedAtMs - simplifiedModeActivatedAtMsRef.current) / 1000),
            );
        }
        const phase2: PhaseMetrics | undefined = phase2SampleCount > 0 ? {
            sampleCount: phase2SampleCount,
            avgScore: phase2SumScoreRef.current / phase2SampleCount,
            maxScore: phase2MaxScoreRef.current,
            highScoreCount: phase2HighScoreCountRef.current,
            overloadCount: phase2OverloadCountRef.current,
            avgGaze: phase2SumGazeRef.current / phase2SampleCount,
            avgEmotion: phase2SumEmotionRef.current / phase2SampleCount,
            avgMouse: phase2SumMouseRef.current / phase2SampleCount,
            durationSeconds: phase2DurationSeconds,
        } : undefined;

        setRoundResults((prev) => ([
            ...prev,
            {
                round: currentRound,
                startedAtMs,
                endedAtMs,
                endedReason,
                durationSeconds,
                thresholdReached: thresholdReachedRef.current,
                sampleCount,
                avgScore,
                maxScore,
                highScoreCount,
                overloadCount,
                avgGaze,
                avgEmotion,
                avgMouse,
                phase1,
                phase2,
                simplifiedModeActivatedAtMs: simplifiedModeActivatedAtMsRef.current ?? undefined,
            },
        ]));

        setIsRunning(false);
        resetAccumulators();
    }, [currentRound, resetAccumulators]);

    const startRound = useCallback(() => {
        if (!selectedTask) return;
        if (!isConnected) return;

        // Each round starts from a clean filter state
        onClearAllFilters();

        // Both rounds start in normal (extensive) UI
        setIsSimplifiedMode(false);

        setShowWarning(false);
        if (currentRound === 1) {
            setHasStartedExperiment(true);
        }
        setIsRunning(true);
        setTimeLeftSeconds(0);
        resetAccumulators();
        startedAtMsRef.current = Date.now();
        // Initialize phase 1 (before simplified UI)
        phase1StartedAtMsRef.current = Date.now();
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
        finalizeRound('completed');

        // Reset state but keep results
        setShowWarning(false);
        setIsRunning(false);
        setCurrentRound(1);
        setIsSimplifiedMode(false);
        setHasStartedExperiment(false);
        setTimeLeftSeconds(0);
        resetAccumulators();
        onClearAllFilters();
    }, [
        finalizeRound,
        isRunning,
        onClearAllFilters,
        resetAccumulators,
        setIsSimplifiedMode,
    ]);

    const resetResults = useCallback(() => {
        setRoundResults([]);
    }, []);

    const switchToSimplifiedUI = useCallback(() => {
        if (!isRunning) return;
        // Track when simplified mode is activated
        simplifiedModeActivatedAtMsRef.current = Date.now();
        // Initialize phase 2 (in simplified UI)
        phase2StartedAtMsRef.current = Date.now();
        setIsSimplifiedMode(true);
        // Reset filter selections when transitioning to simplified view
        onClearAllFilters();
    }, [isRunning, setIsSimplifiedMode, onClearAllFilters]);

    // Timer - removed time limit, task runs until user completes it
    useEffect(() => {
        if (!isRunning) return undefined;

        const timer = setInterval(() => {
            setTimeLeftSeconds((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [isRunning]);

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

        const gazeScore = cognitiveLoad.gaze_score ?? 0;
        const emotionScore = cognitiveLoad.emotion_score ?? 0;
        const mouseScore = cognitiveLoad.mouse_score ?? 0;

        // Route samples to appropriate phase based on simplified mode
        if (isSimplifiedMode) {
            // Phase 2: In simplified UI
            if (!phase2StartedAtMsRef.current) {
                phase2StartedAtMsRef.current = Date.now();
            }
            phase2SampleCountRef.current += 1;
            phase2SumScoreRef.current += normalizedScore;
            phase2MaxScoreRef.current = Math.max(phase2MaxScoreRef.current, normalizedScore);
            phase2SumGazeRef.current += gazeScore;
            phase2SumEmotionRef.current += emotionScore;
            phase2SumMouseRef.current += mouseScore;

            if (cognitiveLoad.overload_detected) {
                phase2OverloadCountRef.current += 1;
            }

            if (normalizedScore >= SCORE_THRESHOLD) {
                phase2HighScoreCountRef.current += 1;
            }
        } else {
            // Phase 1: Before simplified UI
            phase1SampleCountRef.current += 1;
            phase1SumScoreRef.current += normalizedScore;
            phase1MaxScoreRef.current = Math.max(phase1MaxScoreRef.current, normalizedScore);
            phase1SumGazeRef.current += gazeScore;
            phase1SumEmotionRef.current += emotionScore;
            phase1SumMouseRef.current += mouseScore;

            if (cognitiveLoad.overload_detected) {
                phase1OverloadCountRef.current += 1;
            }

            if (normalizedScore >= SCORE_THRESHOLD) {
                phase1HighScoreCountRef.current += 1;
            }
        }

        // Always track samples for overall final results
        sampleCountRef.current += 1;
        sumScoreRef.current += normalizedScore;
        maxScoreRef.current = Math.max(maxScoreRef.current, normalizedScore);
        sumGazeRef.current += gazeScore;
        sumEmotionRef.current += emotionScore;
        sumMouseRef.current += mouseScore;

        if (cognitiveLoad.overload_detected) {
            overloadCountRef.current += 1;
        }

        const isHigh = normalizedScore >= SCORE_THRESHOLD;
        if (isHigh) {
            highScoreCountRef.current += 1;
            consecutiveHighRef.current += 1;
            thresholdReachedRef.current = true;
        } else {
            consecutiveHighRef.current = 0;
        }

        // During first 30 seconds: monitor but don't show modal
        if (isInGracePeriod && currentRound === 1) {
            // Just monitor, don't show warning
            return;
        }

        // After 30 seconds: show modal whenever cognitive load crosses 70%
        // But only if user is NOT already in simplified mode
        if (!isInGracePeriod && currentRound === 1 && isHigh && !showWarning && !isSimplifiedMode) {
            setShowWarning(true);
        }
    }, [cognitiveLoad, currentRound, isRunning, showWarning, isSimplifiedMode]);

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
        <div className="mt-4 mb-4">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                <div className="px-6 py-4">
                    <div className="flex flex-col">
                        {/* Controls and status */}
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <div className="text-sm font-semibold text-gray-900">
                                        Current round:
                                        {' '}
                                        {currentRound}
                                    </div>
                                    <div className="text-sm text-gray-700 mt-1">
                                        Time elapsed:
                                        {' '}
                                        <span className="font-semibold">
                                            {timeLeftSeconds}
                                            s
                                        </span>
                                    </div>
                                </div>
                                {isRunning && !isSimplifiedMode && (
                                    <button
                                        type="button"
                                        onClick={switchToSimplifiedUI}
                                        className="px-4 py-2 rounded-lg bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition-colors"
                                    >
                                        Switch to Simplified UI
                                    </button>
                                )}
                            </div>

                            <div className="flex items-center gap-2 flex-wrap">
                                <button
                                    type="button"
                                    onClick={() => setShowTaskModal(true)}
                                    className="px-3.5 py-2 rounded-lg bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                >
                                    {!hasStartedExperiment ? 'Select Task' : 'View Task'}
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
                                {roundResults.length > 0 && (
                                    <button
                                        type="button"
                                        onClick={() => setShowResultsModal(true)}
                                        className="ml-auto px-3.5 py-2 rounded-lg bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                    >
                                        View Results
                                    </button>
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
                    // Switch to simplified mode if round is still running
                    if (isRunning && currentRound === 1) {
                        // Track when simplified mode is activated
                        simplifiedModeActivatedAtMsRef.current = Date.now();
                        // Initialize phase 2 (in simplified UI)
                        phase2StartedAtMsRef.current = Date.now();
                        setIsSimplifiedMode(true);
                        // Reset filter selections when transitioning to simplified view
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

            <ResultsModal
                isVisible={showResultsModal}
                onClose={() => setShowResultsModal(false)}
                isSimplifiedMode={isSimplifiedMode}
                round1={round1}
                round2={round2}
                comparison={comparison}
                onResetResults={resetResults}
            />

            <TaskModal
                isVisible={showTaskModal}
                onClose={() => setShowTaskModal(false)}
                selectedTaskId={selectedTaskId}
                onTaskChange={setSelectedTaskId}
                tasks={DEFAULT_TASKS}
                hasStartedExperiment={hasStartedExperiment}
                isRunning={isRunning}
                onStartRound={startRound}
                canStart={canStart}
                currentRound={currentRound}
            />
        </div>
    );
}

export default TaskExperiment;
