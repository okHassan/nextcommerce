import { ListOrdered, LogOut, User, UserCheck2Icon, UserCircle2, Wallet } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Sidebar = (props: Props) => {
    return (
        <div className='w-[25%]'>
            <h1 className='text-3xl font-bold pb-4 border-b'>My Profile</h1>
            <div className='pt-4 pb-4 border-b'>
                <div className='flex gap-4 items-center'>
                    <UserCircle2 className='w-10 h-10' />
                    <div>
                        <h1 className='font-bold text-lg'>Faizan</h1>
                        <p>freelancerhassan23@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='mt-10 space-y-8 border-b pb-8'>
                <Link href='/user/' className='flex items-center gap-4'>
                    <User className='w-6 h-6' />
                    <p>Personal Information</p>
                </Link>
                <Link href='/user/purchase' className='flex items-center gap-4'>
                    <Wallet className='w-6 h-6' />
                    <p>My Purchase</p>
                </Link>
                <Link href='/user/order' className='flex items-center gap-4'>
                    <ListOrdered className='w-6 h-6' />
                    <p>Order</p>
                </Link>
                <Link href='/logout' className='flex items-center gap-4'>
                    <LogOut className='w-6 h-6' />
                    <p>Logout</p>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar