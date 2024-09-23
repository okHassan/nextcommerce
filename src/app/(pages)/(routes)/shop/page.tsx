import React from 'react'
import Filter from './_components/Filter'
import Products from './_components/Products'

type Props = {}

export default function page(props: Props) {
    return (
        <div className='w-full'>
            <div className='px-4 container mx-auto mt-10'>
                <div className='flex justify-between'>
                    <Filter />
                    <Products />
                </div>
            </div>
        </div>
    )
}