'use client'
import React from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
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
import Link from 'next/link'
import { createUser } from '@/lib/action'



const formSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().min(2).max(50),
    password: z.string().min(6).max(50),
})

type Props = {}

const page = (props: Props) => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    })

            async function onSubmit(values: z.infer<typeof formSchema>) {
                const res = await createUser({
                    name: values.name,
                    email: values.email,
                    password: values.password,
                })

                 if(res?.success) return window.location.href = '/'
                
            }


    return (
        <div className='flex items-center'>
            <div>
                <img src='/assets/images/image-2.svg' alt='login' className='h-screen ' />
            </div>
            <div className='w-[60%] flex justify-center items-center'>
                <div className='w-[400px]'>
                    <div className='mb-10'>
                        <h1 className='font-black text-4xl tracking-wider'>Create Account 👋</h1>
                        <p className='text-base font-semibold tracking-wider pt-3'>please enter details</p>
                    </div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full Name *</FormLabel>
                                        <FormControl>
                                            <Input placeholder="enter your full name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>E-mail Address *</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="enter your email address" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password *</FormLabel>
                                        <FormControl>
                                            <Input type='password' placeholder="enter your password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className='w-[400px]'>Join Now</Button>
                        </form>
                    </Form>
                    <div className='flex justify-start mt-6'>
                            <Link href='/login' className='text-base font-semibold'>Have an Account ?</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page