"use client";

import { StepVM } from "@/src/models/Step";
import { useState } from "react";
import { StepTimer } from "./StepTimer";
import { StepDetails } from "./StepDetails";
import { StepActions } from "./StepActions";

export function StepCard({ step }: { step: StepVM }) {
    const [isActive, setIsActive] = useState(false);
    const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds

    const toggleTimer = () => {
        setIsActive(!isActive);
    };

    const resetTimer = () => {
        setIsActive(false);
        setTimeLeft(25 * 60);
    };

    const handleTimeChange = (newTime: number) => {
        setTimeLeft(newTime);
    };

    return (
        <div className="flex flex-col items-center gap-4 p-6 bg-transparent max-w-md mx-auto">
            {/* Step Details at top */}
            <StepDetails title={step.title} description={step.description} />

            {/* Timer in the middle */}
            <StepTimer timeLeft={timeLeft} onTimeChange={handleTimeChange} />

            {/* Actions at bottom */}
            <StepActions isActive={isActive} onToggleTimer={toggleTimer} onReset={resetTimer} />
        </div>
    );
}
