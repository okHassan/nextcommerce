import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const categories: Array<{ id: number, name: string }> = [
    {
        id: 1,
        name: 'Accessories'
    },
    {
        id: 2,
        name: 'IPods'
    },
    {
        id: 3,
        name: 'Laptops'
    },
    {
        id: 4,
        name: 'Phones'
    },
    {
        id: 5,
        name: 'Tv and Homes'
    },
    {
        id: 6,
        name: 'Watches'
    },
]

const Categories = () => {
    return (
        <div className='px-2 container mx-auto my-20'>
            <div className='my-8 flex justify-between'>
                <h2 className='text-3xl font-semibold'>Shop By Categories</h2>
                <Link href='/shop' className='font-semibold'>Show All</Link>
            </div>
            <div className='flex flex-wrap justify-between gap-16'>
                {
                    categories.map(category => (
                        <Link href={`/shop?category=${category.id}`} key={category.id}>
                            <div className='rounded-md bg-gray-100 p-2'>
                                <img src={`/ui/categories/${category.id}.png`} alt={category.name} className='w-[300px] h-[200px] pt-4 object-cover' />
                                <p className='bg-white text-center py-4 m-2 rounded-lg -mt-4'>{category.name}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Categories