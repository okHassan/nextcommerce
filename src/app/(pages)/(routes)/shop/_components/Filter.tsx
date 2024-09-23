import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import React from 'react'

type Props = {}

const Filter = (props: Props) => {
    return (
        <div className='w-[20%]'>
            <h1 className='font-bold text-lg mb-8'>Product Categories</h1>
            <div className='space-y-3'>
                <div className="flex items-center space-x-4">
                    <Checkbox id="terms2" />
                    <label htmlFor="terms2" className="font-medium text-base">Watches</label>
                </div>
                <div className="flex items-center space-x-4">
                    <Checkbox id="terms2" />
                    <label htmlFor="terms2" className="font-medium text-base">TV & Homes</label>
                </div>
                <div className="flex items-center space-x-4">
                    <Checkbox id="terms2" />
                    <label htmlFor="terms2" className="font-medium text-base">Ipads</label>
                </div>
                <div className="flex items-center space-x-4">
                    <Checkbox id="terms2" />
                    <label htmlFor="terms2" className="font-medium text-base">Accessories</label>
                </div>
                <div className="flex items-center space-x-4">
                    <Checkbox id="terms2" />
                    <label htmlFor="terms2" className="font-medium text-base">Laptops</label>
                </div>
                <div className="flex items-center space-x-4">
                    <Checkbox id="terms2" />
                    <label htmlFor="terms2" className="font-medium text-base">Phones</label>
                </div>
            </div>
            <h1 className='font-bold text-lg pt-8 pb-8'>Short By</h1>

            <RadioGroup defaultValue="comfortable">
                <div className="flex items-center space-x-4">
                    <RadioGroupItem value="default" id="r1" />
                    <label htmlFor="r1" className="font-medium text-base">Latest</label>
                </div>
                <div className="flex items-center space-x-4">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <label htmlFor="r2" className="font-medium text-base">Oldest</label>
                </div>
            </RadioGroup>
        </div>
    )
}

export default Filter