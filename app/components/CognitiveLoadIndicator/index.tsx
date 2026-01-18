import { CognitiveLoadData } from '#hooks/useCognitiveLoad';

interface Props {
    cognitiveLoad: CognitiveLoadData | null;
    isConnected: boolean;
    error: string | null;
    highLoadCount: number;
    highLoadThreshold: number;
}

function CognitiveLoadIndicator(props: Props) {
    const {
        cognitiveLoad,
        isConnected,
        error,
        highLoadCount,
        highLoadThreshold,
    } = props;

    const getLevelColor = (level: string | undefined) => {
        switch (level) {
            case 'low':
                return 'bg-green-500';
            case 'medium':
                return 'bg-yellow-500';
            case 'high':
                return 'bg-red-500';
            default:
                return 'bg-gray-400';
        }
    };

    const getLevelBgColor = (level: string | undefined) => {
        switch (level) {
            case 'low':
                return 'bg-green-50 border-green-200';
            case 'medium':
                return 'bg-yellow-50 border-yellow-200';
            case 'high':
                return 'bg-red-50 border-red-200';
            default:
                return 'bg-gray-50 border-gray-200';
        }
    };

    if (error) {
        return (
            <div className="fixed bottom-4 right-4 bg-red-50 border border-red-200 rounded-lg px-4 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="text-sm text-red-700">Disconnected</span>
                </div>
            </div>
        );
    }

    if (!isConnected) {
        return (
            <div className="fixed bottom-4 right-4 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" />
                    <span className="text-sm text-gray-600">Connecting...</span>
                </div>
            </div>
        );
    }

    if (!cognitiveLoad) {
        return (
            <div className="fixed bottom-4 right-4 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-sm text-gray-600">Waiting for data...</span>
                </div>
            </div>
        );
    }

    return (
        <div className={`fixed bottom-4 right-4 ${getLevelBgColor(cognitiveLoad.level)} border rounded-lg px-5 py-4 shadow-lg min-w-64`}>
            <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-gray-700">Cognitive Load</span>
                <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${getLevelColor(cognitiveLoad.level)}`} />
                    <span className="text-sm font-medium capitalize text-gray-700">
                        {cognitiveLoad.level}
                    </span>
                </div>
            </div>

            {/* Score bar */}
            <div className="mb-3">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Score</span>
                    <span>{(cognitiveLoad.score * 100).toFixed(0)}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                        className={`h-full ${getLevelColor(cognitiveLoad.level)} transition-all duration-300`}
                        style={{ width: `${cognitiveLoad.score * 100}%` }}
                    />
                </div>
            </div>

            {/* Individual scores */}
            <div className="space-y-2 text-xs">
                <div className="flex justify-between text-gray-600">
                    <span>Gaze</span>
                    <span>{(cognitiveLoad.gaze_score * 100).toFixed(0)}%</span>
                </div>
                <div className="flex justify-between text-gray-600">
                    <span>Emotion</span>
                    <span>{(cognitiveLoad.emotion_score * 100).toFixed(0)}%</span>
                </div>
                <div className="flex justify-between text-gray-600">
                    <span>Mouse</span>
                    <span>{(cognitiveLoad.mouse_score * 100).toFixed(0)}%</span>
                </div>
            </div>

            {/* High load warning indicator */}
            {highLoadCount > 0 && (
                <div className="mt-3 pt-3 border-t border-gray-200">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>High load streak</span>
                        <span>{highLoadCount} / {highLoadThreshold}</span>
                    </div>
                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-orange-500 transition-all duration-300"
                            style={{ width: `${(highLoadCount / highLoadThreshold) * 100}%` }}
                        />
                    </div>
                </div>
            )}

            {cognitiveLoad.overload_detected && (
                <div className="mt-3 pt-3 border-t border-red-200">
                    <span className="text-xs font-medium text-red-600">
                        ⚠️ Overload Detected
                    </span>
                </div>
            )}
        </div>
    );
}

export default CognitiveLoadIndicator;
