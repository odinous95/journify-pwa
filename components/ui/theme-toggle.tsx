"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return (
            <Button
                variant="ghost"
                size="icon"
                disabled
                className="rounded-full cursor-pointer bg-blue-500/20 hover:bg-blue-500/30 dark:bg-blue-500/15 dark:hover:bg-blue-500/25"
            >
                <Moon className="h-5 w-5" />
            </Button>
        );
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full cursor-pointer bg-blue-500/20 hover:bg-blue-500/30 dark:bg-blue-500/15 dark:hover:bg-blue-500/25"
        >
            {theme === "dark" ? (
                <Sun className="h-5 w-5" />
            ) : (
                <Moon className="h-5 w-5" />
            )}
        </Button>
    );
}