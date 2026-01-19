import { useCallback, useState } from 'react';

import CognitiveLoadIndicator from '#components/CognitiveLoadIndicator';
import Filters from '#components/Filters';
import TaskExperiment from '#components/TaskExperiment';
import { useCognitiveLoad } from '#hooks/useCognitiveLoad';

const HIGH_LOAD_THRESHOLD = 5; // Number of consecutive high readings before warning

function Home() {
    const {
        cognitiveLoad,
        isConnected,
        error,
        highLoadCount,
    } = useCognitiveLoad({
        highLoadThreshold: HIGH_LOAD_THRESHOLD,
        highLoadScoreThreshold: 0.7,
    });

    const [isSimplifiedMode, setIsSimplifiedMode] = useState(false);
    const [clearFiltersSignal, setClearFiltersSignal] = useState(0);
    const [currentTaskId, setCurrentTaskId] = useState<string>('');

    const clearAllFilters = useCallback(() => {
        setClearFiltersSignal((prev) => prev + 1);
    }, []);

    const handleTaskChange = useCallback((taskId: string) => {
        setCurrentTaskId(taskId);
    }, []);

    return (
        <div className="min-h-screen bg-gray-100">
            <TaskExperiment
                cognitiveLoad={cognitiveLoad}
                isConnected={isConnected}
                isSimplifiedMode={isSimplifiedMode}
                setIsSimplifiedMode={setIsSimplifiedMode}
                onClearAllFilters={clearAllFilters}
                onTaskChange={handleTaskChange}
            />
            <Filters isSimplifiedMode={isSimplifiedMode} clearFiltersSignal={clearFiltersSignal} currentTaskId={currentTaskId} />

            <CognitiveLoadIndicator
                cognitiveLoad={cognitiveLoad}
                isConnected={isConnected}
                error={error}
                highLoadCount={highLoadCount}
                highLoadThreshold={HIGH_LOAD_THRESHOLD}
            />

            {/* Simplified mode indicator */}
            {isSimplifiedMode && (
                <div className="fixed top-4 right-4 bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 shadow-lg">
                    <div className="flex items-center gap-3">
                        <span className="text-sm text-blue-700">Simplified Mode Active</span>
                        <button
                            type="button"
                            onClick={() => setIsSimplifiedMode(false)}
                            className="text-xs text-blue-600 hover:text-blue-800 font-medium underline"
                        >
                            Exit
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
