import { Button } from '@/components/ui/button'
import { ArrowBigLeft, ArrowBigRightDash } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Deals = () => {
    return (
        <div className='my-10 container mx-auto px-2'>
            <div className='flex justify-center items-center gap-10'>
                <div className='w-[47.9%] space-y-10'>
                    <h1 className='text-3xl font-semibold'>Deals of the Month</h1>
                    <p className='font-medium text-base'>Get ready for a shopping experience like never before with our deals of month! Every purchase comes with exclusive pearks and offers. making this month celebration of a savvy choices and amazing deals. Don't miss out!</p>
                    <Button>
                        <p className='mr-2'>View Products</p>
                        <ArrowBigRightDash />
                    </Button>
                </div>
                <div>
                    <Image src='/assets/images/image-4.svg' alt='deals' width={350} height={350} />
                </div>
            </div>
        </div>
    )
}

export default Deals