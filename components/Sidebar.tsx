"use client";

import { cn } from '@/lib/utils';
import {Home , Plus, Settings,Rocket, Folder, Bookmark, GitFork, Trash2, Info} from 'lucide-react'
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { usePathname , useRouter} from 'next/navigation';
import { Button } from './ui/button';
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
            icon: Folder,
            href: "/files",
            label: "All files",
            pro: true
        },
        {
            icon: Bookmark,
            href: "/saved",
            label: "Saved",
            pro:false
        },
        {
            icon: GitFork,
            href: "/integration",
            label: "Integrations",
            pro: false
        },
        {
            icon: Trash2,
            href: "/deleted",
            label: "Trash",
            pro:false
        },
        {
            icon: Settings,
            href: "/settings",
            label: "Settings",
            pro: false
        },
        {
            icon: Info,
            href: "/help",
            label: "Help and Support",
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
                <div className="space-y-1 ">
                    {routes.map((route)=> (
                        <div
                         onClick={() => onNavigate(route.href , route.pro)}
                        key={route.href} className={cn(
                            "text-muted-foreground text-sm group flex pt-3 pb-3 w-full items-start  font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                            pathname === route.href && "bg-primary/10 text-primary"
                        )}>
                            <div className="flex ml-5 space-x-4 gap-y-2 items-center flex-1 ">
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
                <div className='flex-col ml-5 mb-2 mt-[65px] w-[200px] h-[200px] bg-primary/10 rounded'>
                    <div className=' pt-12 '>
                        {arr.map((obj)=>(
                            <div>
                            <div className='ml-[80px] justify-center'>
                                <obj.icon className="h-8 w-8 "/>
                            </div>
                            <div className='text-base ml-7 mt-2 text-primary'>
                                Upgrade Account
                            </div>
                            <div className='text-xs ml-2 mt-2 text-muted-foreground'>
                                Access to unlimited transcription
                            </div>
                            <div className='mt-4 ml-[50px]'>
                                
                               <Button className='hover:bg-blue-400'>{obj.label}</Button> 
                            </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}