import { Blocks, Code, ListOrdered, User2, UserCircle2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Sidebar = (props: Props) => {
    return (
        <div className='w-[25%]'>
            <h1 className='text-3xl font-bold pb-4 border-b'>Mr Admin</h1>
            <div className='mt-10 space-y-8 pb-8'>
                <Link href='/admin' className='flex items-center gap-4'>
                    <Code className='w-6 h-6' />
                    <p>OverView</p>
                </Link>
                <Link href='/admin/products' className='flex items-center gap-4'>
                    <Blocks className='w-6 h-6' />
                    <p>Products</p>
                </Link>
                <Link href='/admin/order' className='flex items-center gap-4'>
                    <ListOrdered className='w-6 h-6' />
                    <p>Orders</p>
                </Link>
                <Link href='/users' className='flex items-center gap-4'>
                    <UserCircle2 className='w-6 h-6' />
                    <p>Users</p>
                </Link>
                <Link href='/users/admin' className='flex items-center gap-4'>
                    <User2 className='w-6 h-6' />
                    <p>Admin</p>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar