"use client";

interface StepTimerProps {
    timeLeft: number;
    totalTime?: number;
    onTimeChange: (newTime: number) => void;
}

export function StepTimer({ timeLeft, totalTime = 25 * 60, onTimeChange }: StepTimerProps) {
    const displayTime = () => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    const circumference = 2 * Math.PI * 90; // radius = 90
    const strokeDashoffset = circumference - (timeLeft / totalTime) * circumference;

    const addMinute = () => {
        onTimeChange(timeLeft + 60);
    };

    const subtractMinute = () => {
        if (timeLeft >= 60) {
            onTimeChange(timeLeft - 60);
        }
    };

    return (
        <div className="flex flex-col items-center gap-3">
            <div className="relative">
                <svg width="200" height="200" className="transform -rotate-90">
                    {/* Background circle */}
                    <circle
                        cx="100"
                        cy="100"
                        r="90"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        className="text-gray-200 dark:text-gray-700"
                    />
                    {/* Progress circle */}
                    <circle
                        cx="100"
                        cy="100"
                        r="90"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        className="text-orange-500 transition-all duration-1000 cursor-pointer hover:text-orange-600"
                    />
                </svg>
                {/* Time display in center */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                        {displayTime()}
                    </span>
                </div>
            </div>
            {/* Time adjustment buttons */}
            <div className="flex gap-2 text-sm">
                <button
                    onClick={subtractMinute}
                    className="px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white transition-colors"
                    title="Decrease by 1 minute"
                >
                    −1m
                </button>
                <button
                    onClick={addMinute}
                    className="px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white transition-colors"
                    title="Increase by 1 minute"
                >
                    +1m
                </button>
            </div>
        </div>
    );
}
