import React from 'react';
import { data } from '../data/data.js';
import { FaShoppingBag } from 'react-icons/fa';
import { RiToolsLine } from 'react-icons/ri';

const RecentOrders = () => {
  return (
    <div className='w-full col-span-1  lg:h-[44%] h-[70vh]  p-4 border rounded-lg bg-white overflow-hidden'>
      <h1 className='text-2xl font-bold mb-4 text-center'>
        <RiToolsLine className='inline-block mr-2 text-xl' />
        Herramientas Web Utilizadas
      </h1>
      <div className='overflow-y-auto h-full'>
        <ul className='flex flex-col mb-20'>
          {data.map((order, id) => (           
              <li key={id}
                className='bg-gray-50 hover:bg-gray-200 rounded-lg my-3 p-4 flex items-center cursor-pointer'
              >
                <div className='rounded-lg'>
                  <a href={order.url} target='_blank' rel='noreferrer'>
                    <img
                      src={order.img}
                      alt={order.name}
                      className='w-12 h-12 bg-blue-50 hover:bg-gray-200 rounded-lg'
                    />
                  </a>
                </div>
                <div className='pl-4'>
                  <p className='text-gray-800 font-bold'>{order.name}</p>
                  <p className='text-gray-400 text-sm'>{order.use}</p>
                </div>
                {/* <p className='lg:flex md:hidden absolute right-6 text-sm'>{order.date}</p> */}
              </li>
          ))}
        </ul>
      </div>
    </div>

  );
};

export default RecentOrders;