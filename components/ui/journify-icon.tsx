"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function JournifyIcon({ width = 64, height = 64 }) {
    const { theme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const currentTheme = theme === "system" ? systemTheme : theme;
    const iconSrc = currentTheme === "dark" ? "/icons/journify-icon-dark.svg" : "/icons/journify-icon-light.svg";

    return (
        <Image
            src={iconSrc}
            alt="Journify"
            width={width}
            height={height}
            priority
        />
    );
}