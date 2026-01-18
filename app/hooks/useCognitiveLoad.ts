import { useEffect, useState, useCallback, useRef } from 'react';

export interface CognitiveLoadData {
    score: number;
    level: 'low' | 'medium' | 'high';
    overload_detected: boolean;
    gaze_score: number;
    emotion_score: number;
    mouse_score: number;
    triggers: Record<string, unknown>;
}

interface CognitiveLoadMessage {
    type: 'cognitive_load_update';
    timestamp: number;
    data: CognitiveLoadData;
}

interface UseCognitiveLoadOptions {
    url?: string;
    autoConnect?: boolean;
    highLoadThreshold?: number; // Number of consecutive high readings to trigger warning
    highLoadScoreThreshold?: number; // Score threshold to consider as "high" (0-1)
}

interface UseCognitiveLoadReturn {
    cognitiveLoad: CognitiveLoadData | null;
    isConnected: boolean;
    error: string | null;
    isConsistentlyHigh: boolean;
    highLoadCount: number;
    connect: () => void;
    disconnect: () => void;
    requestLatest: () => void;
    resetHighLoadCount: () => void;
}

const DEFAULT_WS_URL = 'ws://127.0.0.1:8765';
const DEFAULT_HIGH_LOAD_THRESHOLD = 5; // 5 consecutive high readings
const DEFAULT_HIGH_LOAD_SCORE_THRESHOLD = 0.7; // Score >= 0.7 is considered high

export function useCognitiveLoad(options: UseCognitiveLoadOptions = {}): UseCognitiveLoadReturn {
    const {
        url = DEFAULT_WS_URL,
        autoConnect = true,
        highLoadThreshold = DEFAULT_HIGH_LOAD_THRESHOLD,
        highLoadScoreThreshold = DEFAULT_HIGH_LOAD_SCORE_THRESHOLD,
    } = options;

    const [cognitiveLoad, setCognitiveLoad] = useState<CognitiveLoadData | null>(null);
    const [isConnected, setIsConnected] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [highLoadCount, setHighLoadCount] = useState(0);
    const [isConsistentlyHigh, setIsConsistentlyHigh] = useState(false);

    const wsRef = useRef<WebSocket | null>(null);
    const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const resetHighLoadCount = useCallback(() => {
        setHighLoadCount(0);
        setIsConsistentlyHigh(false);
    }, []);

    const connect = useCallback(() => {
        if (wsRef.current?.readyState === WebSocket.OPEN) {
            return;
        }

        try {
            const ws = new WebSocket(url);

            ws.onopen = () => {
                setIsConnected(true);
                setError(null);
                // Subscribe to cognitive load stream
                ws.send(JSON.stringify({ type: 'subscribe', stream: 'cognitive_load' }));
            };

            ws.onmessage = (event) => {
                try {
                    const msg = JSON.parse(event.data) as CognitiveLoadMessage;
                    if (msg.type === 'cognitive_load_update' && msg.data) {
                        setCognitiveLoad(msg.data);

                        // Track consecutive high load readings
                        const isHighLoad = msg.data.score >= highLoadScoreThreshold || msg.data.level === 'high';

                        if (isHighLoad) {
                            setHighLoadCount((prev) => {
                                const newCount = prev + 1;
                                if (newCount >= highLoadThreshold) {
                                    setIsConsistentlyHigh(true);
                                }
                                return newCount;
                            });
                        } else {
                            // Reset count if load drops
                            setHighLoadCount(0);
                            setIsConsistentlyHigh(false);
                        }
                    }
                } catch (parseError) {
                    console.error('Failed to parse WebSocket message:', parseError);
                }
            };

            ws.onerror = () => {
                setError('WebSocket connection error');
            };

            ws.onclose = () => {
                setIsConnected(false);
                wsRef.current = null;

                // Auto-reconnect after 3 seconds
                if (autoConnect) {
                    reconnectTimeoutRef.current = setTimeout(() => {
                        connect();
                    }, 3000);
                }
            };

            wsRef.current = ws;
        } catch (err) {
            setError(`Failed to connect: ${err}`);
        }
    }, [url, autoConnect, highLoadThreshold, highLoadScoreThreshold]);

    const disconnect = useCallback(() => {
        if (reconnectTimeoutRef.current) {
            clearTimeout(reconnectTimeoutRef.current);
            reconnectTimeoutRef.current = null;
        }

        if (wsRef.current) {
            wsRef.current.close();
            wsRef.current = null;
        }

        setIsConnected(false);
    }, []);

    const requestLatest = useCallback(() => {
        if (wsRef.current?.readyState === WebSocket.OPEN) {
            wsRef.current.send(JSON.stringify({ type: 'get_cognitive_load' }));
        }
    }, []);

    useEffect(() => {
        if (autoConnect) {
            connect();
        }

        return () => {
            disconnect();
        };
    }, [autoConnect, connect, disconnect]);

    return {
        cognitiveLoad,
        isConnected,
        error,
        isConsistentlyHigh,
        highLoadCount,
        connect,
        disconnect,
        requestLatest,
        resetHighLoadCount,
    };
}

export default useCognitiveLoad;
