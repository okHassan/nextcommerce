import React from 'react'

const rule: Array<
    {
        image: string,
        title: string,
        description: string
    }
> = [
        {
            image: '/ui/rule/shipping.svg',
            title: 'Free Shipping',
            description: 'Free Shipping For order above $150'
        },
        {
            image: '/ui/rule/dollar.svg',
            title: 'Money Garrenty',
            description: 'within 30 days for any exchange'
        },
        {
            image: '/ui/rule/support.svg',
            title: 'Online Support',
            description: '24 hours a day, 7 days a week'
        },
        {
            image: '/ui/rule/payment.svg',
            title: 'Flexible Payment',
            description: 'Pay with Multiple cradit cards'
        },
    ]

const Rules = () => {
    return (
        <div className='container mx-auto px-2 pt-10 mb-12'>
            <div className='flex flex-wrap gap-10 justify-between'>
                {
                    rule.map(rule =>(
                        <div className=''>
                            <img src={rule.image} alt={rule.title} className='w-10 h-10' />
                            <h3 className='text-xl font-semibold mt-4'>{rule.title}</h3>
                            <p className='mt-2'>{rule.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Rules