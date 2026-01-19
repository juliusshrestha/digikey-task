import { X } from 'lucide-react';

interface TaskDefinition {
    id: string;
    title: string;
    instructions: string[];
    timeLimitSeconds: number;
}

interface Props {
    isVisible: boolean;
    onClose: () => void;
    selectedTaskId: string;
    onTaskChange: (taskId: string) => void;
    tasks: TaskDefinition[];
    hasStartedExperiment: boolean;
    isRunning: boolean;
    onStartRound: () => void;
    canStart: boolean;
}

function TaskModal(props: Props) {
    const {
        isVisible,
        onClose,
        selectedTaskId,
        onTaskChange,
        tasks,
        hasStartedExperiment,
        isRunning,
        onStartRound,
        canStart,
    } = props;

    const selectedTask = tasks.find((t) => t.id === selectedTaskId) ?? tasks[0];

    // Extract task number from task ID (e.g., 'battery-task-1' -> 1)
    const taskNumber = selectedTaskId.match(/\d+$/)?.[0] ?? '1';

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Modal */}
            <div className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#2d2d86] to-[#3d3d96] px-12 py-5">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-semibold text-white tracking-tight" style={{ marginLeft: '3%' }}>Task</h2>
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
                <div className="px-12 py-7 overflow-y-auto flex-1">
                    <div style={{ marginLeft: '3%' }}>
                        <div className="mb-10">
                            <label className="block text-base font-semibold text-gray-900 mb-2">
                                <span className="block mb-2">Select Task</span>
                                <select
                                    value={selectedTaskId}
                                    onChange={(e) => {
                                        onTaskChange(e.target.value);
                                    }}
                                    disabled={isRunning}
                                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 disabled:bg-gray-50 disabled:cursor-not-allowed"
                                >
                                    {tasks.map((task) => (
                                        <option key={task.id} value={task.id}>
                                            {task.title}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>

                        {selectedTask && (
                            <div style={{ marginLeft: '3%' }}>
                                <ol className="list-decimal pl-6 text-base text-gray-700 space-y-2.5">
                                    {selectedTask.instructions.map((line) => (
                                        <li key={`${selectedTask.id}-${line}`}>{line}</li>
                                    ))}
                                </ol>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <div
                    className="px-12 py-5 bg-gray-50 border-t border-gray-200"
                    style={{
                        marginLeft: '3%',
                        marginTop: '2%',
                        marginBottom: '2%',
                        marginRight: '3%',
                    }}
                >
                    {!hasStartedExperiment ? (
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <button
                                type="button"
                                onClick={onClose}
                                className="flex-1 px-5 py-3.5 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-100 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    onStartRound();
                                    onClose();
                                }}
                                disabled={!canStart}
                                className="flex-1 px-5 py-3.5 text-base font-semibold text-white bg-[#2d2d86] rounded-xl hover:bg-[#3d3d96] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                Start Task
                                {' '}
                                {taskNumber}
                            </button>
                        </div>
                    ) : (
                        <button
                            type="button"
                            onClick={onClose}
                            className="w-full px-5 py-3.5 text-base font-semibold text-white bg-[#2d2d86] rounded-xl hover:bg-[#3d3d96] transition-colors"
                        >
                            Close
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default TaskModal;
