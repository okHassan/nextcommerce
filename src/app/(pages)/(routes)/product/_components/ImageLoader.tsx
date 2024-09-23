import React from 'react'

type Props = {}

const ImageLoader = (props: Props) => {
    return (
        <div className='bg-gray-200 p-10 rounded-sm'>
            <img src='/ui/products/11-inch-ipad-pro-512gb-space-gray.png' alt='productspage' className='w-full h-[350px] object-cover' />
        </div>
    )
}

export default ImageLoader