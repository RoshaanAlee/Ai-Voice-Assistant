"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { subjects } from "@/constants"
import { Textarea } from "./textarea"
import { createCompanion } from "@/lib/actions/companions.action"
import { redirect } from "next/navigation"


const formSchema = z.object({
  name: z.string().min(1,{message:'name is required'}).max(50),
  subject: z.string().min(1,{message:'subject is required'}).max(50),
  topic: z.string().min(1,{message:'topic is required'}).max(50),
  voice: z.string().min(1,{message:'voice is required'}).max(50),
  style: z.string().min(1,{message:'style is required'}).max(50),
  duration: z.number().min(1,{message:'duration is required'}),
})

const CompanionForm = () => {
    // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name:'',
      subject: '',
      topic: '',
      voice: '',
      style: '',
      duration: 15,
    },
  })
 
  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    
    const companion = await createCompanion(values);
    if(companion){
      redirect(`/companions/${companion.id}`)
    }
    else{
      console.log('Failed to create the companion')
      redirect(`/ `)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField  //1
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Companion name</FormLabel>
              <FormControl>
                <Input placeholder="Enter the companion name" 
                    {...field} 
                    className="input" 
                />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
            
        <FormField //2
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}                >
                    <SelectTrigger className="input capitalize">
                        <SelectValue placeholder="Select the subject" />
                    </SelectTrigger>
                    <SelectContent>
                         {subjects.map((subject)=>(
                            <SelectItem
                                value={subject}
                                key={subject}
                                className="captalize"
                            >
                                {subject}
                            </SelectItem>
                         ))}
                    </SelectContent>
                </Select>
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField  //3
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What should the companion help with?</FormLabel>
              <FormControl>
                <Textarea placeholder="Ex. derivtives and Integrals" 
                    className="input"
                    {...field} 
                     
                />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField //4
          control={form.control}
          name="voice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Voice</FormLabel>
              <FormControl>
                <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}                >
                    <SelectTrigger className="input ">
                        <SelectValue placeholder="Select the voice" />
                    </SelectTrigger>
                    <SelectContent>
                            <SelectItem value="male">
                                Male
                            </SelectItem>
                            <SelectItem value="female">
                                Female
                            </SelectItem>
                    </SelectContent>
                </Select>
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField //5
          control={form.control}
          name="style"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Style</FormLabel>
              <FormControl>
                <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}                >
                    <SelectTrigger className="input ">
                        <SelectValue placeholder="Select the voice" />
                    </SelectTrigger>
                    <SelectContent>
                            <SelectItem value="formal">
                                Formal
                            </SelectItem>
                            <SelectItem value="casual">
                                Casual
                            </SelectItem>
                    </SelectContent>
                </Select>
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField   //6
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estimated session duration in minutes</FormLabel>
              <FormControl>
                <Input placeholder="15" 
                    type="number"
                    {...field} 
                    className="input" 
                />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full cursor-pointer">Build your companion</Button>
      </form>
    </Form>
  )
}

export default CompanionForm