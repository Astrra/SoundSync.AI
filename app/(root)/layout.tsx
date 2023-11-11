import React from 'react'
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import { currentUser } from '@clerk/nextjs'
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import TranscribeButton from '@/components/transcribe';

const RootLayout = ({
    children
} : {
    children: React.ReactNode;
}) => {
  return (
    <div className="h-full">
        {/*<Navbar/>*/}
        <div className="hidden md:flex mt-0 w-200 ml-0 flex-col fixed inset-y-0 h-full">
          <Sidebar/>
           <Navbar/>
        </div>
        
        <main className="md:pl-20 pt-16 h-full">
      {children}
      </main>
    </div>
  )
}

export default RootLayout
