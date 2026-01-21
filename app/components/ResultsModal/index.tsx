import { X } from 'lucide-react';

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
    round: 1 | 2;
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

interface Comparison {
    avgScoreDelta: number;
    maxScoreDelta: number;
    timeDelta: number;
}

interface Props {
    isVisible: boolean;
    onClose: () => void;
    isSimplifiedMode: boolean;
    round1?: RoundResult;
    round2?: RoundResult;
    comparison?: Comparison | null;
    onResetResults?: () => void;
}

function ResultsModal(props: Props) {
    const {
        isVisible,
        onClose,
        isSimplifiedMode,
        round1,
        round2,
        comparison,
        onResetResults,
    } = props;

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Modal */}
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-hidden flex flex-col">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#2d2d86] to-[#3d3d96] px-6 py-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-white">Results</h2>
                        <button
                            type="button"
                            onClick={onClose}
                            className="text-white/80 hover:text-white transition-colors"
                            aria-label="Close"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="px-6 py-6 overflow-y-auto flex-1">
                    <div className="space-y-3 text-sm mb-6">
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
                        <div className="space-y-6">
                            {round1 && (
                                <div className="border border-gray-200 rounded-lg p-4">
                                    <div className="text-sm font-semibold text-gray-900 mb-3">Round 1</div>
                                    <div className="text-sm text-gray-600 space-y-2">
                                        <div className="flex justify-between">
                                            <span>Ended:</span>
                                            <span className="text-gray-900 font-medium">{round1.endedReason}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Duration:</span>
                                            <span className="text-gray-900 font-medium">
                                                {round1.durationSeconds}s
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Avg score:</span>
                                            <span className="text-gray-900 font-medium">
                                                {Math.round(round1.avgScore * 100)}%
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Max score:</span>
                                            <span className="text-gray-900 font-medium">
                                                {Math.round(round1.maxScore * 100)}%
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Avg eye gaze:</span>
                                            <span className="text-gray-900 font-medium">
                                                {Math.round(round1.avgGaze * 100)}%
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Avg emotion:</span>
                                            <span className="text-gray-900 font-medium">
                                                {Math.round(round1.avgEmotion * 100)}%
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Avg mouse:</span>
                                            <span className="text-gray-900 font-medium">
                                                {Math.round(round1.avgMouse * 100)}%
                                            </span>
                                        </div>
                                    </div>

                                    {/* Phase 1: Before Simplified UI */}
                                    {round1.phase1 && (
                                        <div className="mt-4 pt-4 border-t border-gray-200">
                                            <div className="text-xs font-semibold text-gray-700 mb-2">Phase 1: Before Simplified UI</div>
                                            <div className="text-xs text-gray-600 space-y-1.5">
                                                <div className="flex justify-between">
                                                    <span>Duration:</span>
                                                    <span className="text-gray-900 font-medium">
                                                        {round1.phase1.durationSeconds}s
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Samples:</span>
                                                    <span className="text-gray-900 font-medium">
                                                        {round1.phase1.sampleCount}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Avg score:</span>
                                                    <span className="text-gray-900 font-medium">
                                                        {Math.round(round1.phase1.avgScore * 100)}%
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Max score:</span>
                                                    <span className="text-gray-900 font-medium">
                                                        {Math.round(round1.phase1.maxScore * 100)}%
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>High score count:</span>
                                                    <span className="text-gray-900 font-medium">
                                                        {round1.phase1.highScoreCount}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Avg eye gaze:</span>
                                                    <span className="text-gray-900 font-medium">
                                                        {Math.round(round1.phase1.avgGaze * 100)}%
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Avg emotion:</span>
                                                    <span className="text-gray-900 font-medium">
                                                        {Math.round(round1.phase1.avgEmotion * 100)}%
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Avg mouse:</span>
                                                    <span className="text-gray-900 font-medium">
                                                        {Math.round(round1.phase1.avgMouse * 100)}%
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Phase 2: In Simplified UI */}
                                    {round1.phase2 && (
                                        <div className="mt-4 pt-4 border-t border-gray-200">
                                            <div className="text-xs font-semibold text-gray-700 mb-2">Phase 2: In Simplified UI</div>
                                            <div className="text-xs text-gray-600 space-y-1.5">
                                                <div className="flex justify-between">
                                                    <span>Duration:</span>
                                                    <span className="text-gray-900 font-medium">
                                                        {round1.phase2.durationSeconds}s
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Samples:</span>
                                                    <span className="text-gray-900 font-medium">
                                                        {round1.phase2.sampleCount}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Avg score:</span>
                                                    <span className="text-gray-900 font-medium">
                                                        {Math.round(round1.phase2.avgScore * 100)}%
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Max score:</span>
                                                    <span className="text-gray-900 font-medium">
                                                        {Math.round(round1.phase2.maxScore * 100)}%
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>High score count:</span>
                                                    <span className="text-gray-900 font-medium">
                                                        {round1.phase2.highScoreCount}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Avg eye gaze:</span>
                                                    <span className="text-gray-900 font-medium">
                                                        {Math.round(round1.phase2.avgGaze * 100)}%
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Avg emotion:</span>
                                                    <span className="text-gray-900 font-medium">
                                                        {Math.round(round1.phase2.avgEmotion * 100)}%
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Avg mouse:</span>
                                                    <span className="text-gray-900 font-medium">
                                                        {Math.round(round1.phase2.avgMouse * 100)}%
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                            {round2 && (
                                <div className="border border-gray-200 rounded-lg p-4">
                                    <div className="text-sm font-semibold text-gray-900 mb-3">Round 2</div>
                                    <div className="text-sm text-gray-600 space-y-2">
                                        <div className="flex justify-between">
                                            <span>Ended:</span>
                                            <span className="text-gray-900 font-medium">{round2.endedReason}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Duration:</span>
                                            <span className="text-gray-900 font-medium">
                                                {round2.durationSeconds}s
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Avg score:</span>
                                            <span className="text-gray-900 font-medium">
                                                {Math.round(round2.avgScore * 100)}%
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Max score:</span>
                                            <span className="text-gray-900 font-medium">
                                                {Math.round(round2.maxScore * 100)}%
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Avg eye gaze:</span>
                                            <span className="text-gray-900 font-medium">
                                                {Math.round(round2.avgGaze * 100)}%
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Avg emotion:</span>
                                            <span className="text-gray-900 font-medium">
                                                {Math.round(round2.avgEmotion * 100)}%
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Avg mouse:</span>
                                            <span className="text-gray-900 font-medium">
                                                {Math.round(round2.avgMouse * 100)}%
                                            </span>
                                        </div>
                                    </div>

                                    {/* Phase 1: Before Simplified UI */}
                                    {round2.phase1 && (
                                        <div className="mt-4 pt-4 border-t border-gray-200">
                                            <div className="text-xs font-semibold text-gray-700 mb-2">Phase 1: Before Simplified UI</div>
                                            <div className="text-xs text-gray-600 space-y-1.5">
                                                <div className="flex justify-between">
                                                    <span>Duration:</span>
                                                    <span className="text-gray-900 font-medium">
                                                        {round2.phase1.durationSeconds}s
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Samples:</span>
                                                    <span className="text-gray-900 font-medium">
                                                        {round2.phase1.sampleCount}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Avg score:</span>
                                                    <span className="text-gray-900 font-medium">
                                                        {Math.round(round2.phase1.avgScore * 100)}%
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Max score:</span>
                                                    <span className="text-gray-900 font-medium">
                                                        {Math.round(round2.phase1.maxScore * 100)}%
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>High score count:</span>
                                                    <span className="text-gray-900 font-medium">
                                                        {round2.phase1.highScoreCount}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Avg eye gaze:</span>
                                                    <span className="text-gray-900 font-medium">
                                                        {Math.round(round2.phase1.avgGaze * 100)}%
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Avg emotion:</span>
                                                    <span className="text-gray-900 font-medium">
                                                        {Math.round(round2.phase1.avgEmotion * 100)}%
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Avg mouse:</span>
                                                    <span className="text-gray-900 font-medium">
                                                        {Math.round(round2.phase1.avgMouse * 100)}%
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Phase 2: In Simplified UI */}
                                    {round2.phase2 && (
                                        <div className="mt-4 pt-4 border-t border-gray-200">
                                            <div className="text-xs font-semibold text-gray-700 mb-2">Phase 2: In Simplified UI</div>
                                            <div className="text-xs text-gray-600 space-y-1.5">
                                                <div className="flex justify-between">
                                                    <span>Duration:</span>
                                                    <span className="text-gray-900 font-medium">
                                                        {round2.phase2.durationSeconds}s
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Samples:</span>
                                                    <span className="text-gray-900 font-medium">
                                                        {round2.phase2.sampleCount}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Avg score:</span>
                                                    <span className="text-gray-900 font-medium">
                                                        {Math.round(round2.phase2.avgScore * 100)}%
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Max score:</span>
                                                    <span className="text-gray-900 font-medium">
                                                        {Math.round(round2.phase2.maxScore * 100)}%
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>High score count:</span>
                                                    <span className="text-gray-900 font-medium">
                                                        {round2.phase2.highScoreCount}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Avg eye gaze:</span>
                                                    <span className="text-gray-900 font-medium">
                                                        {Math.round(round2.phase2.avgGaze * 100)}%
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Avg emotion:</span>
                                                    <span className="text-gray-900 font-medium">
                                                        {Math.round(round2.phase2.avgEmotion * 100)}%
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Avg mouse:</span>
                                                    <span className="text-gray-900 font-medium">
                                                        {Math.round(round2.phase2.avgMouse * 100)}%
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                            {comparison && (
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <div className="text-sm font-semibold text-gray-900 mb-3">
                                        Comparison (Round 2 - Round 1)
                                    </div>
                                    <div className="text-sm text-gray-600 space-y-2">
                                        <div className="flex justify-between">
                                            <span>Avg score Δ:</span>
                                            <span className="text-gray-900 font-medium">
                                                {Math.round(comparison.avgScoreDelta * 100)}%
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Max score Δ:</span>
                                            <span className="text-gray-900 font-medium">
                                                {Math.round(comparison.maxScoreDelta * 100)}%
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Time Δ:</span>
                                            <span className="text-gray-900 font-medium">
                                                {comparison.timeDelta}s
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {!round1 && !round2 && (
                        <div className="text-center py-8 text-gray-500">
                            No results yet. Complete a round to see results here.
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <div className="flex gap-3">
                        {onResetResults && (round1 || round2) && (
                            <button
                                type="button"
                                onClick={() => {
                                    onResetResults();
                                    onClose();
                                }}
                                className="flex-1 px-4 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                Reset Results
                            </button>
                        )}
                        <button
                            type="button"
                            onClick={onClose}
                            className={`${onResetResults && (round1 || round2) ? 'flex-1' : 'w-full'} px-4 py-3 text-sm font-medium text-white bg-[#2d2d86] rounded-lg hover:bg-[#3d3d96] transition-colors`}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResultsModal;
