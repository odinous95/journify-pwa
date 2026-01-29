"use client";

import { useRouter } from "next/navigation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@auth0/nextjs-auth0";

export function ProfileDropdown() {
    const { user, isLoading } = useUser();
    const router = useRouter();

    const getInitials = (name?: string) => {
        if (!name) return "U";
        return name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
            .slice(0, 2);
    };

    const handleLogout = () => {
        router.push("/auth/logout");
    };

    if (isLoading) {
        return (
            <button className="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer">
                <Avatar>
                    <AvatarFallback>...</AvatarFallback>
                </Avatar>
            </button>
        );
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer">
                    <Avatar>
                        <AvatarImage src={user?.picture} alt={user?.name} />
                        <AvatarFallback>{getInitials(user?.name)}</AvatarFallback>
                    </Avatar>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
                <p className="text-xs text-gray-500 px-2 pb-2">{user?.email}</p>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Help & Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
