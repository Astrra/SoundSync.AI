"use client";

import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Menu , Sparkles} from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { MobileSidebar } from "./mobile-sidebar";
import SearchInput from "./search-input";

const font = Poppins({
    weight: "600",
    subsets: ["latin"]
});

export const Navbar = () => {
    return (
        <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4  bg-secondary h-16">
            <div className="flex items-center">
                <MobileSidebar/>
                <Link href="/">
                    <h1 className={cn("hidden md:block text-xl md:text-3xl font-bold text-primary", 
                    font.className
                    )}>
                        soundsync.ai
                    </h1>
                </Link>

            </div>
            <div className="justify-items-stretch">
                <SearchInput/>
            </div>
            <div className="flex items-center gap-x-3">
                
                <ModeToggle/>
                <UserButton afterSignOutUrl="/"/>

            </div>
        </div>
    )
}