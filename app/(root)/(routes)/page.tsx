
import React from 'react'
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const page = async () => {
  const user = await currentUser();

  const onClick = (language: string,file: File) => {
   
    
   console.log(language);
}

  return (
    <div className='w-full overflow-x-auto ml-14 space-x-2 p-6'>
        <Dialog>
              <DialogTrigger><Button>Transcribe File</Button></DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Transcribe File</DialogTitle>
                  <Label htmlFor="language">Transcription Language</Label>
                  <Select >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select a language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Language</SelectLabel>
                        <SelectItem value="English">English</SelectItem>
                        <SelectItem value="Hindi">Hindi</SelectItem>
                       
                      </SelectGroup>
                    </SelectContent>
                 </Select>
                  <Label htmlFor='file'>Upload your file</Label>
                  <Input id="file" type="file"/>
                  <Button type="submit" >Upload</Button>
                </DialogHeader>
              </DialogContent>
          </Dialog>
        </div>
  )
}

export default page

