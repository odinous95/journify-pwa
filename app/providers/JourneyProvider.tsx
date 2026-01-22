"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
    createJourneyFeature,
    createJourneyService,
    createJourneySyncService,
    OfflineRepository,
    OnlineRepository,
} from "@/src/app.features/journey";
import { useOnlineStatus } from "@/src/hooks";

const JourneyContext =
    createContext<ReturnType<typeof createJourneyFeature> | null>(null);

export function JourneyProvider({ children }: { children: React.ReactNode }) {
    const isOnline = useOnlineStatus();
    const [feature, setFeature] = useState<ReturnType<typeof createJourneyFeature> | null>(null);

    const offlineRepo = useMemo(() => new OfflineRepository(), []);
    const onlineRepo = useMemo(() => new OnlineRepository(), []);

    const syncService = useMemo(
        () => createJourneySyncService(offlineRepo, onlineRepo, () => isOnline),
        [offlineRepo, onlineRepo, isOnline]
    );

    useEffect(() => {
        const service = createJourneyService(offlineRepo, syncService);
        setFeature(createJourneyFeature(service));
    }, [offlineRepo, syncService]);

    useEffect(() => {
        if (isOnline) {
            syncService.sync().catch(console.warn);
        }
    }, [isOnline, syncService]);

    if (!feature) return null;

    return <JourneyContext.Provider value={feature}>{children}</JourneyContext.Provider>;
}


export function useJourney() {
    const ctx = useContext(JourneyContext);
    if (!ctx) throw new Error("JourneyProvider missing");
    return ctx;
}
