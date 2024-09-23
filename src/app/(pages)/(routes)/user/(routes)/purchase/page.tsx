import Image from 'next/image'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <div className='w-[60%]'>
            <h1 className='text-3xl font-bold pl-4'>Purchase Products</h1>
            <div className='border-t border-b mt-8'>
                <div className='flex py-8 pl-8 gap-5'>
                    <Image src='/ui/products/11-inch-ipad-pro-512gb-space-gray.png' alt='purchase' width={65} height={65} className='' />
                    <div className='space-y-2'>
                        <h1 className='font-bold text-xl'>11-inch-ipad-pro-512gb-space-gray</h1>
                        <p className='font-semibold'>$2,999</p>
                        <p><span className='font-semibold text-green-500'>purchased On</span> : 11/05/1999</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page