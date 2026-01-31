interface StepDetailsProps {
    title: string;
    description?: string;
}

export function StepDetails({ title, description }: StepDetailsProps) {
    return (
        <div className="w-full text-center space-y-1 px-4 py-3 bg-white/80 dark:bg-linear-to-br dark:from-slate-700/80 dark:to-slate-800/80 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-base font-semibold text-gray-900 dark:text-orange-200 truncate">
                {title}
            </h3>
            {description && (
                <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2">
                    {description}
                </p>
            )}
        </div>
    );
}
