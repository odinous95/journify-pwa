"use client";

import { ReactNode } from "react";

interface AppContainerProps {
    children: ReactNode;
    className?: string;
}

export function AppContainer({ children, className = "" }: AppContainerProps) {
    return (
        <div className={`w-full min-h-screen bg-white dark:bg-gray-950 ${className}`}>
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
                {children}
            </div>
        </div>
    );
}