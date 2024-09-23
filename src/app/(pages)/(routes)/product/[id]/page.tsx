import React from 'react'
import ImageLoader from '../_components/ImageLoader'
import ContantLoader from '../_components/ContantLoader'

type Props = {}

const page = (props: Props) => {
    return (
        <div className='container mx-auto px-4 mt-10'>
            <div className='flex justify-center gap-14'>
                <ImageLoader />
                <ContantLoader />
            </div>
        </div>
    )
}

export default page