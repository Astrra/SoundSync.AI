"use client";

import { cn } from '@/lib/utils';
import {Home , Plus, Settings,Rocket} from 'lucide-react'
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { usePathname , useRouter} from 'next/navigation';
//import { useRouter } from 'next/router';


const font = Poppins({
    weight: "600",
    subsets: ["latin"]
});
export const Sidebar = () =>{
    const pathname = usePathname();
    const router=useRouter();
    const routes =[
        {
            icon: Home,
            href: "/",
            label: "Home",
            pro: false
        },
        {
            icon: Plus,
            href: "/companion/new",
            label: "Create",
            pro: true
        },
        {
            icon: Settings,
            href: "/settings",
            label: "Settings",
            pro: false
        },
        {
            icon: Rocket,
            href: "/upgrade",
            label: "Upgrade",
            pro: false
        }


    ];

    const arr=[
        {
            icon: Rocket,
            href: "/",
            label: "Upgrade",
            pro: false
        },
    ];

    const onNavigate = (url: string , pro: boolean) => {
        return router.push(url);
    }
    

    return (
        <div className="space-y-4 flex-none w-[250px] flex-col h-full text-primary bg-secondary">
            <div >
                <div className='ml-5 mt-5 mb-7'>
                <Link href="/">
                    <h1 className={cn("hidden md:block text-xl md:text-3xl font-bold text-primary", 
                    font.className
                    )}>
                        soundsync.ai
                    </h1>
                </Link>
                </div>
                <div className="space-y-4">
                    {routes.map((route)=> (
                        <div
                         onClick={() => onNavigate(route.href , route.pro)}
                        key={route.href} className={cn(
                            "text-muted-foreground text-base group flex pt-5 pb-5 w-full items-start  font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                            pathname === route.href && "bg-primary/10 text-primary"
                        )}>
                            <div className="flex ml-5 space-x-4 gap-y-2 items-center flex-1">
                                <div>
                                <route.icon className="h-6 w-6"/>
                                </div>
                                <div>
                                {route.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex-col ml-5 mb-2 mt-20 w-[200px] h-[200px] bg-slate-700'>
                    <div className='ml-[80px] pt-12 '>
                        {arr.map((obj)=>(
                            <div>
                            <div >
                                <obj.icon className="h-8 w-8 "/>
                            </div>
                            <div>
                                {obj.label}
                            </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}