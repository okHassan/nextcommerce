import { products } from '@/utils/product'
import React from 'react'

const Collections = () => {

    const collection = products.slice(0,3)

    return (
        <div className='container mx-auto px-4 my-20'>
            <h1 className='text-4xl font-medium text-center'>New Collection</h1>
            <div className='mt-10'>
                <h2 className='font-bold text-lg text-start pl-2 mb-7'>showing 1-3 of 15 product</h2>
                <div className='flex justify-between flex-wrap'>
                    {
                        collection.map(product => (
                            <div key={product.id} className='w-[27%]'>
                                <div className='bg-gray-100 flex justify-center items-center rounded-lg py-10'>
                                    <img src={product.image} alt={product.name} className='w-32 h-32' />
                                </div>
                                <div>
                                    <h3 className='text-lg font-bold my-4'>{product.name}</h3>
                                    <p className='text-ellipsis overflow-hidden whitespace-nowrap text-base'>{product.description}</p>
                                    <span className='text-sm text-black font-bold'>${product.price}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Collections