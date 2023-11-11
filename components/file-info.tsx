"use client";
import React from 'react'
import { cn } from '@/lib/utils';
import {File, Text, Save} from 'lucide-react'
import { useRouter, usePathname } from 'next/navigation';



const  MidLayer = () => {
    const router= useRouter();
    const pathname= usePathname();

    const routes=[
        {
            icon: File,
            href: "/file",
            label: "File",
            pro: false
        },
        {
            icon: Text,
            href: "/text",
            label: "Text",
            pro: false
        },
        {
            icon: Save,
            href: "/saved",
            label: "Save",
            pro: false
        },
    ];

    const onNavigate = (url: string , pro: boolean) => {
        return router.push(url);
    }

  return (
    <div className='flex justify-between'>
        {/*<div className='h-[150px] w-[150px] hover:bg-slate-400 rounded pt-[20px]'>
            Uploaded Files
        </div>
        <div className='h-[150px] w-[150px] hover:bg-slate-400 rounded'>
          Transcribed
        </div>
        <div className='h-[150px] w-[150px] hover:bg-slate-400 rounded'>
            Saved
        </div>*/}
        <div className="flex space-x-[100px] h-[150px] w-full">
                    {routes.map((route)=> (
                        <div
                         onClick={() => onNavigate(route.href , route.pro)}
                        key={route.href} className={cn(
                            "text-muted-foreground text-base group flex pt-5 pb-5 w-full  items-start  font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                            pathname === route.href && "bg-primary/10 text-primary"
                        )}>
                            <div className="flex-col pt-[20px] ml-[150px] space-y-4 gap-y-2 items-center flex-1">
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
    </div>
  )
}

export default MidLayer; 
