
"use client";

import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageDropdown } from "@/components/ui/language-dropdown";
import { JournifyIcon } from "@/components/ui/journify-icon";
import { ProfileDropdown } from "@/components/ui/profile-dropdown";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    const { user, isLoading } = useUser();

    return (
        <nav className="bg-white dark:bg-gray-950 sticky top-0 z-50">
            <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                {/* Logo/Brand */}
                <div className="flex items-center gap-3 shrink-0">
                    <JournifyIcon width={40} height={40} />
                </div>

                {/* Theme Toggle, Language Dropdown, and User Profile */}
                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <LanguageDropdown />
                    {!isLoading && (
                        user ? (
                            <ProfileDropdown />
                        ) : (
                            <Link href="/auth/login">
                                <Button variant="default" size="sm">
                                    Log In
                                </Button>
                            </Link>
                        )
                    )}
                </div>
            </div>
        </nav>
    );
}