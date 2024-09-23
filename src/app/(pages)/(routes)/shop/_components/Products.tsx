import { products } from '@/utils/product'
import Link from 'next/link'
import React from 'react'

const Products = () => {

    return (
        <div className='w-[80%]'>
            <h2 className='font-bold text-lg text-start pl-2 mb-7'>product</h2>
            <div className='flex flex-wrap gap-4 justify-between'>
                {
                    products.map(product => (
                        <Link href={`/product/${product.id}`} key={product.id} className='w-[23%]'>
                            <div className='bg-gray-100 flex justify-center items-center rounded-lg py-10 mt-3'>
                                <img src={product.image} alt={product.name} className='w-24 h-24' />
                            </div>
                            <div>
                                <h3 className='text-lg font-bold my-4'>{product.name}</h3>
                                <p className='text-ellipsis overflow-hidden whitespace-nowrap text-base'>{product.description}</p>
                                <span className='text-sm text-black font-bold'>${product.price}</span>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>

    )
}

export default Products