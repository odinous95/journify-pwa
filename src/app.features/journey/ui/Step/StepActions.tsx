"use client";

import { Play, Pause, RotateCcw } from "lucide-react";

interface StepActionsProps {
    isActive: boolean;
    onToggleTimer: () => void;
    onReset: () => void;
}

export function StepActions({ isActive, onToggleTimer, onReset }: StepActionsProps) {
    return (
        <div className="shrink-0 flex gap-2">
            <button
                onClick={onToggleTimer}
                className={`px-4 py-2 rounded-md font-medium transition-colors flex items-center gap-2 ${isActive
                        ? "bg-red-500 hover:bg-red-600 text-white"
                        : "bg-orange-500 hover:bg-orange-600 text-white"
                    }`}
            >
                {isActive ? (
                    <>
                        <Pause size={18} />
                        Pause
                    </>
                ) : (
                    <>
                        <Play size={18} />
                        Start
                    </>
                )}
            </button>
            <button
                onClick={onReset}
                className="px-4 py-2 rounded-md font-medium bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white transition-colors flex items-center gap-2"
            >
                <RotateCcw size={18} />
                Reset
            </button>
        </div>
    );
}
