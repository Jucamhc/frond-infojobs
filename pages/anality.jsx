import React from 'react'
import BarChart from '../components/BarChart'
import RecentOrders from '../components/RecentOrders'

const anality = () => {
    return (

        <div className="bg-gray-100 min-h-screen">
            <div className='grid lg:grid-cols-5 gap-4 p-4'>
                <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
                    <div className='flex flex-col w-full pb-4'>
                        <p className='text-2xl font-bold'>7,846</p>
                        <p className='text-gray-600 '></p>
                    </div>
                    <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                        <span className='text-green-700 text-lg'>+18%</span>
                    </p>
                </div>
                <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
                    <div className='flex flex-col w-full pb-4'>
                        <p className='text-2xl font-bold'>7,846</p>
                        <p className='text-gray-600 '></p>
                    </div>
                    <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                        <span className='text-green-700 text-lg'>+18%</span>
                    </p>
                </div>
                <div className=' bg-white flex justify-between w-full border p-4 rounded-lg'>
                    <div className='flex flex-col w-full pb-4'>
                        <p className='text-2xl font-bold'>7,846</p>
                        <p className='text-gray-600 '></p>
                    </div>
                    <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                        <span className='text-green-700 text-lg'>+18%</span>
                    </p>
                </div>
            </div>
            <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
                <BarChart />
                <RecentOrders />
            </div>
        </div>
    )
}

export default anality