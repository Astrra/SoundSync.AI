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

  function onSubmit(data: z.infer<typeof FormSchema>){
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        <code className="text-white">{JSON.stringify(data, null, 2)}</code>
      </pre>
      ),
    })
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
                <FormLabel>Language</FormLabel>
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
                <FormDescription>
                  Select a language and file to transcribe it{" "}
                </FormDescription>
                <FormMessage/>
              </FormItem>
            )} />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default TranscribeButton
