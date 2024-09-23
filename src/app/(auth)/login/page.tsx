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
import { login } from '@/lib/action'



const formSchema = z.object({
    email: z.string().min(2).max(50),
    password: z.string().min(6).max(50)
})

type Props = {}

const page = (props: Props) => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

   async function onSubmit(values: z.infer<typeof formSchema>) {
        const res = await login({
            email: values.email,
            password: values.password,
        })

        if(res?.success) return window.location.href = '/'
        
    }


    return (
        <div className='flex items-center'>
            <div>
                <img src='/assets/images/image-1.svg' alt='login' className='h-screen ' />
            </div>
            <div className='w-[60%] flex justify-center items-center'>
                <div className='w-[400px]'>
                    <div className='mb-10'>
                        <h1 className='font-black text-4xl tracking-wider'>Welcome 👋</h1>
                        <p className='text-base font-semibold tracking-wider pt-3'>please Login Here</p>
                    </div>Here
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>E-mail Address *</FormLabel>
                                        <FormControl>
                                            <Input placeholder="enter your email address" {...field} />
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
                                            <Input placeholder="enter your password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className='w-[400px]'>Create Account</Button>
                        </form>
                    </Form>
                    <div className='flex justify-between mt-6'>
                            <Link href='/register' className='text-base font-semibold'>Create an Account</Link>
                        <Link href='/forgot-password' className='text-base font-semibold tracking-wider'>Forgot Password?</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page