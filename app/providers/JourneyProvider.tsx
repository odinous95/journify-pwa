"use client";
import { createContext, useContext, useEffect, useState } from "react";
import {
    createHybridRepository,
    createStepFeature,
    OfflineRepository,
    isOnline,
} from "@/src/app.features/journey";


const StepContext =
    createContext<ReturnType<typeof createStepFeature> | null>(null);

export function JourneyProvider({ children }: { children: React.ReactNode }) {
    const [feature, setFeature] =
        useState<ReturnType<typeof createStepFeature> | null>(null);

    useEffect(() => {
        // 1️⃣ Create cache (browser-only)
        const cache = new OfflineRepository();

        // 2️⃣ Create hybrid repository (reads)
        const repository = createHybridRepository();

        // 3️⃣ Create feature with explicit policy
        setFeature(createStepFeature(repository, cache, isOnline));
    }, []);

    if (!feature) return null; // or loading state

    return (
        <StepContext.Provider value={feature}>
            {children}
        </StepContext.Provider>
    );
}

export function useSteps() {
    const ctx = useContext(StepContext);
    if (!ctx) throw new Error("JourneyProvider missing");
    return ctx;
}
