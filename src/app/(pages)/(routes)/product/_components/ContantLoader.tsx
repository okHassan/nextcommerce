import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {}

const ContantLoader = (props: Props) => {
    return (
        <div className='ml-4 w-[50%]'>
            <h1 className='font-bold text-2xl '>15 inch Apple Macbook Pro (2TB) - Midlight</h1>
            <div className='flex gap-4 mt-4'>
                <p className='border-r pr-3'>Laptop</p>
                <p className='flex gap-2'><span className='text-green-600'>In</span><span className='text-blue-400'>Stock</span></p>
            </div>
            <h1 className='font-semibold text-lg mt-4 pb-5'>$2,999.99</h1>
            <h1 className='font-bold text-base tracking-wider'>Description</h1>
            <p className='leading-7 mt-5 tracking-wide font-light'>Experiance peak performance with the 15 inch Macbook Air Featuring the revolutionary Apple M2 Cheap, Stunning 15.3inch liquid retina display, and versetile performance MegSafe 3 charging.Elevate productivity with touch id and more</p>
            <Button className='w-full mt-4'>ChackOut</Button>
        </div>
    )
}

export default ContantLoader