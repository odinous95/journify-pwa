import { StepVM } from "@/src/models/Step";
import { StepCard } from "./Step/StepCard";


export function StepsContainer({ steps }: { steps?: StepVM[] }) {
    return (
        <div className="space-y-4">
            {steps?.map((step, index) => (
                <div key={step.id}>
                    <StepCard step={step} />
                    {index < (steps?.length ?? 0) - 1 && (
                        <div className="flex items-center gap-2 my-4">
                            <div className="flex-1 h-px bg-linear-to-r from-orange-500/30 to-transparent"></div>
                            <div className="text-gray-400 dark:text-gray-600">•</div>
                            <div className="flex-1 h-px bg-linear-to-l from-orange-500/30 to-transparent"></div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
