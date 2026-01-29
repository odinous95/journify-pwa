"use client";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageDropdown } from "@/components/ui/language-dropdown";
import { JournifyIcon } from "@/components/ui/journify-icon";

export default function Navbar() {
    return (
        <nav className="bg-white dark:bg-gray-950 sticky top-0 z-50">
            <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                {/* Logo/Brand */}
                <div className="flex items-center gap-3 shrink-0">
                    <JournifyIcon width={40} height={40} />
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Journify</h1>
                </div>

                {/* Theme Toggle, Language Dropdown, and User Profile */}
                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <LanguageDropdown />

                    {/* User Profile Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Help & Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
}