import React from 'react';
import { Eye, ShoppingCart, ShoppingBag, Users } from 'lucide-react';

const Card = ({ icon: Icon, value, label, percentage, isPositive }: any) => {
    return (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-lg shadow-md w-full max-w-sm mx-auto mb-6">
            <div className="flex items-center pt-3">
                <div className="p-3 bg-blue-100 rounded-full">
                    <Icon className="w-6 h-6 text-blue-500" />
                </div>
                <div className="ml-4">
                    <h2 className="text-xl font-bold">{value}</h2>
                    <p className="text-gray-600 text-sm pt-2">{label}</p>
                </div>
            </div>
        </div>
    );
};

const Details = () => {
    const cardsData = [
        {
            icon: Eye,
            value: '$3.456K',
            label: 'Total views',
            percentage: '0.43%',
            isPositive: true,
        },
        {
            icon: ShoppingCart,
            value: '$45.2K',
            label: 'Total Profit',
            percentage: '4.35%',
            isPositive: true,
        },
        {
            icon: ShoppingBag,
            value: '2.450',
            label: 'All Product',
            percentage: '2.59%',
            isPositive: true,
        },
        {
            icon: Users,
            value: '3.456',
            label: 'Total Users',
            percentage: '0.95%',
            isPositive: false,
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            {cardsData.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </div>
    );
};

export default Details;
