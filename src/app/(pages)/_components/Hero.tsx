import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Hero = (props: Props) => {
    return (
        <div className='my-8 container mx-auto'>
            <div className='flex justify-center'>
                <img src='/ui/hero/hero-1.png' alt='hero' className='absolute w-[94%] h-full rounded-lg !bg-gray-200' />
                <div className='relative w-full h-[600px] flex items-center justify-start pl-20'>
                    <div>
                        <h1 className='font-black text-6xl'>Unleas Innovation <br /> in Every Byte</h1>
                        <p className='mt-4 mb-10 text-2xl'>Explore a world of cutting-edge Tech.</p>
                        <Link href='/shop'>
                            <Button>Shop Now</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero