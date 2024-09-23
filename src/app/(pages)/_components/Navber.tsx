'use client'

import { Button } from '@/components/ui/button'
import { verifyJwt } from '@/lib/jwt'
import { UserCircle2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Navber = ({ token }: any) => {
    const router = useRouter()

    let handleClick = (e: any) => {
        e.preventDefault()
        router.push('/login')
    }

    return (
        <div className='w-full container py-6 mx-auto px-2'>
            <div className='flex justify-between'>
                <Link href={'/'} className='w-full'>
                    <Image src='/logo-black.svg' alt='logo' width={140} height={70} />
                </Link>
                <div className='flex items-center gap-10'>
                    <Link href='/'>Home</Link>
                    <Link href='/shop'>Shop</Link>
                    {
                        token ? <div>
                            <Link href='/user'>
                                <UserCircle2 className='w-8 h-8' />
                            </Link>
                        </div> : <Button onClick={handleClick}>Login</Button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navber