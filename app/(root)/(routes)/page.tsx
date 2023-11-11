
import React from 'react'
import { currentUser } from '@clerk/nextjs'
import TranscribeButton from '@/components/transcribe'
import { Button } from '@/components/ui/button';
import MidLayer from '@/components/file-info';
import FileStructure from '@/components/file-storage';

const page = async () => {
  const user = await currentUser();
  return (
   <div> 
    <div className='flex mt-12 mr-8 ml-[220px] justify-between'>
      <div className='text-2xl'>
        Welcome {user?.firstName},
      </div>
      <Button>Transcribe File</Button>
       {/* <TranscribeButton/>*/}  
    </div>
    <div className='flex-col ml-[220px] text-muted-foreground'>
        Upload your audio or video to convert it to text
    </div>
    <div className='ml-[220px] mr-8 pt-[100px]'>
        <div className='w-full'>
        <MidLayer/>
        </div>
    </div>
    <div className='ml-[220px] mr-8 mt-[30px]'>
        <FileStructure/>
    </div>
  </div>
  )
}

export default page

