import React from 'react';
import { FaStar, FaComment } from 'react-icons/fa';
import { dataViewProfile } from '../data/dataViewProfile.js';

const viewProfile = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='p-4 '>
        <h1 className='text-xl font-bold mb-1 flex items-end'>
          {dataViewProfile.length - 2} Empresas que visitaron tu CV
          <p className='text-gray-600 text-sm'> en las últimas 2 semanas</p>
        </h1>
        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className='underline underline-offset-4 text-center font-bold my-2 p-1 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <span className=''>Empresa</span>
            <span className=''>País</span>
            <span className='hidden md:grid'>Empleados</span>
            <span className='hidden sm:grid'>Aplica/Disponibles</span>
            <span className='hidden sm:grid'>Calificación</span>
          </div>
          <ul>
            {dataViewProfile.map((order, id) => (
              <li
                key={id}
                className={
                  order.name === 'OFERTA PATROCINADA'
                    ? 'bg-blue-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'
                    : 'bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'
                }
              >
                <div className='flex items-center'>
                  <div className='w-[70px] h-[70px] aspect-auto'>
                    <img src={order.img} className='object-contain w-full h-full' alt='Logo' />
                  </div>

                  <div className='pl-2 text-sm'>
                    <p className='text-gray-800 font-bold'>{order.name}</p>
                    <p className='text-gray-800 text-sm'>{order.industry}</p>
                  </div>
                </div>

                <div className='text-center'>
                  <p>{order.country} </p>
                </div>

                <p className='text-gray-600 text-center'>
                  <span className='bg-white p-0.5 rounded-lg text-center text-sm border-2 border-black'>
                    {order.employ} Empleados
                  </span>
                </p>

                <p className='text-gray-600 sm:text-center'>
                  <span className='bg-[#2088c2] p-0.5 px-2 rounded-l-lg text-white border-2 text-sm border-black'>
                    {order.compatible}
                  </span>
                  <span className='bg-[#fff] p-0.5 px-2 rounded-r-lg text-black border-2 text-sm border-black'>
                    {order.offer} Ofertas
                  </span>
                </p>

                <div className='text-center items-center'>
                  <p className='flex items-center text-yellow-500 justify-center '>
                    <FaStar className='mr-1 ' /> {order.qualification} Calificación
                  </p>
                  <p className='flex items-center text-blue-400 justify-center'>
                    <FaComment className='mr-1' /> {order.opinions} Opiniones
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex items-center  justify-center mt-2'>
          <img className='w-[80%] h-[90px] ' src="https://tpc.googlesyndication.com/simgad/9279042036256268657" alt="" />
        </div>
      </div>

    </div>
  );
};

export default viewProfile;
