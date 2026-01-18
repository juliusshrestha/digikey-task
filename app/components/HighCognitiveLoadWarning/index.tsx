import { useEffect, useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';

interface Props {
    isVisible: boolean;
    onDismiss: () => void;
    onAcceptChange: () => void;
    countdown?: number; // Seconds before auto-change
    title?: string;
    message?: string;
    showDismiss?: boolean;
    dismissLabel?: string;
    acceptLabel?: string;
    autoAccept?: boolean;
    showCountdown?: boolean;
}

function HighCognitiveLoadWarning(props: Props) {
    const {
        isVisible,
        onDismiss,
        onAcceptChange,
        countdown = 10,
        title = 'High Cognitive Load Detected',
        message = 'We\'ve noticed that your cognitive load has been consistently high. To help reduce mental strain, we\'re going to simplify the interface.',
        showDismiss = true,
        dismissLabel = 'Keep Current View',
        acceptLabel = 'Simplify Now',
        autoAccept = true,
        showCountdown = true,
    } = props;

    const [timeLeft, setTimeLeft] = useState(countdown);

    useEffect(() => {
        if (!isVisible) {
            setTimeLeft(countdown);
            return;
        }

        if (!showCountdown) {
            return undefined;
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    if (autoAccept) {
                        onAcceptChange();
                    }
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [autoAccept, countdown, isVisible, onAcceptChange, showCountdown]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

            {/* Modal */}
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 overflow-hidden">
                {/* Header with warning color */}
                <div className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                <AlertTriangle className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-xl font-bold text-white">{title}</h2>
                        </div>
                        {showDismiss && (
                            <button
                                type="button"
                                onClick={onDismiss}
                                className="text-white/80 hover:text-white transition-colors"
                                aria-label="Close"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        )}
                    </div>
                </div>

                {/* Content */}
                <div className="px-6 py-6">
                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                        {message}
                    </p>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 mb-6">
                        <p className="text-sm text-blue-800">
                            <strong>What will change:</strong>
                        </p>
                        <ul className="text-sm text-blue-700 mt-2 space-y-1">
                            <li>• Fewer filter options will be displayed</li>
                            <li>• Table columns will be reduced</li>
                            <li>• Interface will be simplified</li>
                        </ul>
                    </div>

                    {showCountdown && (
                        <>
                            {/* Countdown */}
                            <div className="flex items-center justify-center mb-6">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-orange-500 mb-1">
                                        {timeLeft}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        seconds until automatic change
                                    </div>
                                </div>
                            </div>

                            {/* Progress bar */}
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-6">
                                <div
                                    className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-1000"
                                    style={{ width: `${((countdown - timeLeft) / countdown) * 100}%` }}
                                />
                            </div>
                        </>
                    )}
                </div>

                {/* Actions */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex gap-3">
                    {showDismiss && (
                        <button
                            type="button"
                            onClick={onDismiss}
                            className="flex-1 px-4 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            {dismissLabel}
                        </button>
                    )}
                    <button
                        type="button"
                        onClick={onAcceptChange}
                        className="flex-1 px-4 py-3 text-sm font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors"
                    >
                        {acceptLabel}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HighCognitiveLoadWarning;
