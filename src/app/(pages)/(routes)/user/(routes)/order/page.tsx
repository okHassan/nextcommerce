import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <div className='w-[60%]'>
            <h1 className='text-3xl font-bold pl-4'>My Orders</h1>
            <div className='border-t border-b mt-8'>
                <div className='flex py-8 pl-8 gap-5 justify-between items-center'>
                    <div className='space-y-2'>
                        <h1 className='font-semibold text-lg'>11-inch-ipad-pro-512gb-space-gray</h1>
                        <p className='font-semibold'>Total : $2,999</p>
                        <p><span className='font-semibold text-green-500'>purchased On</span> : 11/05/1999</p>
                    </div>
                    <Button>View Order</Button>
                </div>
            </div>
        </div>
    )
}

export default page