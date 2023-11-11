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
        <div className="fixed ml-[250px] w-10/12 z-50 flex justify-between items-center py-2 px-4  bg-secondary h-16 mt-2">
            <div className="flex items-center">
                <MobileSidebar/>
            </div>
            <div className="mr-[850px]">
                <SearchInput/>
            </div>
            <div className="flex items-center gap-x-3 mr-3">
                
                <ModeToggle/>
                <UserButton afterSignOutUrl="/"/>

            </div>
        </div>
    )
}