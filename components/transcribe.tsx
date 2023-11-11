"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from './ui/use-toast'
import { Dialog } from '@radix-ui/react-dialog'
import { DialogContent, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from './ui/select'
import { useRef } from 'react'
import { Input } from './ui/input'

const FormSchema = z.object({
  language: z.string({
    required_error: "Please select a language"
  })
  ,
  file: z.any({
    required_error: "Please select a file"
  })
  ,
})
const TranscribeButton = () => {
  const form= useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
      console.log(data);
      console.log(fileInputRef.current?.files?.[0]);
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Transcribe File</Button>
      </DialogTrigger>
      <DialogContent>
        <Form {...form}>
          <form onSubmit = {form.handleSubmit(onSubmit)}>
            <FormField control={form.control} name="language" render={({field})=>(
              <FormItem>
                <FormLabel>Transcription Language</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a language"/>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                        <SelectItem value="English">English</SelectItem>
                        <SelectItem value="Hindi">Hindi</SelectItem>
                    </SelectContent>
                </Select>
                <FormMessage/>
              </FormItem>
            )} />
            <FormField control={form.control} name="file" render={({field})=>(
              <FormItem className='mt-[30px]'>
                <FormLabel>Upload a file for transcription</FormLabel>
                
                <Input id="file" type="file" ref={fileInputRef} className='h-[300px] w-[400px] bg-secondary/10 ml-[30px] mb-[20px] hover:bg-secondary'/>
                
              </FormItem>
            )} />
            <Button className='mt-[20px] ml-[190px]' variant="secondary" type="submit">Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default TranscribeButton
