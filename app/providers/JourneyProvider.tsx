"use client";
import { createContext, useContext, useEffect, useState } from "react";
import {
    createJourneyFeature,
    createJourneyService,
    OfflineRepository,
    OnlineRepository,
} from "@/src/app.features/journey";
import { useOnlineStatus } from "@/src/hooks";


const JourneyContext =
    createContext<ReturnType<typeof createJourneyFeature> | null>(null);

export function JourneyProvider({ children }: { children: React.ReactNode }) {
    const isOnline = useOnlineStatus();
    const [feature, setFeature] =
        useState<ReturnType<typeof createJourneyFeature> | null>(null);

    useEffect(() => {
        const onlineRepo = new OnlineRepository();
        const offlineRepo = new OfflineRepository();

        const service = createJourneyService(
            onlineRepo,
            offlineRepo,
            () => isOnline
        );
        setFeature(createJourneyFeature(service));
    }, []);

    if (!feature) return null;

    return (
        <JourneyContext.Provider value={feature}>
            {children}
        </JourneyContext.Provider>
    );
}

export function useJourney() {
    const ctx = useContext(JourneyContext);
    if (!ctx) throw new Error("JourneyProvider missing");
    return ctx;
}