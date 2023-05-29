import React from 'react';
import { GoVerified } from 'react-icons/go';
import { FcButtingIn, FcDisapprove, FcApproval, FcCheckmark, FcReadingEbook } from 'react-icons/fc';
import { MdOutlineVerified } from 'react-icons/md';
import { dataApplication } from '../data/dataApplication';

const application = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='p-4 '>
        <h1 className='text-1xl font-bold mb-1 flex items-end'>
          Ofertas Aplicadas
        </h1>
        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className='underline underline-offset-4 text-center font-bold my-2 p-1 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <span className=''>Empresa</span>
            <span className=''>Países</span>
            <span className='hidden md:grid'>Postulados</span>
            <span className='hidden sm:grid'>Adaptabilidad</span>
            <span className='hidden sm:grid'>Proceso</span>
          </div>
          <ul>
            {dataApplication.map((order, id) => (
              <a
              href={order?.url} target="_blank" rel="noreferrer" 
                key={id}
                className={
                  order.name === 'OFERTA PATROCINADA'
                    ? 'bg-blue-50 hover:bg-gray-200 rounded-lg my-3 p-2 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'
                    : 'bg-gray-50 hover:bg-gray-200 rounded-lg my-3 p-2 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'
                }
              >
                <div className='flex items-center'>
                  <div className='w-[70px] h-[70px] aspect-auto'>
                    <img src={order.img} className='object-contain w-full h-full' alt='Logo' />
                  </div>

                  <div className='pl-2 text-sm'>
                    <p className='text-gray-800 font-bold'>{order.name}</p>
                    {/* <p className='text-gray-800 text-sm'>{order.industry}</p> */}
                  </div>
                </div>

                <div className='text-center'>
                  <p>{order.country} </p>
                </div>


                <div className='text-center items-center'>
                  <p className='flex items-center  justify-center '>

                    <FcReadingEbook  className='mr-1 text-xl' />{order.enrolled}
                  </p>
                </div>

                <div className='flex items-center justify-center'>
                  <div className='w-10 h-10'>
                    <svg className='transform -rotate-0' viewBox='0 0 100 100'>
                      <circle className='text-gray-300 stroke-current' cx='50' cy='50' r='46' strokeWidth='8' fill='none' />
                      <circle className='text-blue-500 stroke-current stroke-dashoffset-transition' cx='50' cy='50' r='46' strokeWidth='8' fill='none' style={{ strokeDasharray: '289.027px', strokeDashoffset: `${(100 - order.porcent) / 100 * 289.027}px` }} />
                      <text className='text-xl font-bold text-blue-500 fill-current' x='50' y='50' textAnchor='middle' dominantBaseline='middle'>
                        {order.porcent}%
                      </text>
                    </svg>
                  </div>
                     
                </div>

                <div className='text-center items-center'>
                  <div className='flex items-center justify-center'>
                    {order.calcel === 1 ? (
                      <div className={`flex flex-col items-center ${order.process >= 1 ? 'text-green-500' : 'text-gray-300'}`}>
                        <div className={`flex items-center justify-center bg-gray-200 rounded-full w-6 h-6 ${order.process >= 1 ? 'bg-red-500' : ''}`}>
                          {order.calcel === 1 ? <FcDisapprove className='text-red-500 text-3xl' /> : null}
                        </div>
{/*                         <p className='text-xs text-gray-500 mt-1 font-bold'>No Aplica</p>
 */}                        <p className='text-xs text-gray-500 font-bold'>Proceso Finalizado</p>
                      </div>
                    ) : order.calcel === 2 ? (
                      <div className={`flex flex-col items-center ${order.process >= 1 ? 'text-green-500' : 'text-gray-300'}`}>
                        <div className={`flex items-center justify-center bg-gray-200 rounded-full w-6 h-6 ${order.process >= 1 ? 'bg-white' : ''}`}>
                          {order.calcel === 2 ? <FcButtingIn className=' text-3xl' /> : null}
                        </div>
                        {/* <p className='text-xs text-gray-500 mt-1 font-bold'>Aplica a</p> */}
                        <p className='text-xs text-gray-500 font-bold'>Contratado</p>
                      </div>
                    ) : (
                      <>
                        <div className={`flex flex-col items-center ${order.process >= 1 ? 'text-green-500' : 'text-gray-300'}`}>
                          <div className={`flex items-center justify-center bg-gray-200 rounded-full w-6 h-6 ${order.process >= 1 ? 'bg-gray-50' : ''}`}>
                            {order.process >= 1 ? <FcApproval className='text-3xl' /> : null}
                          </div>
                          <p className='text-xs text-gray-500 mt-1'>Aplicada</p>
                        </div>
                        <div className='flex-1 border-t-2 border-gray-300'></div>
                        <div className={`flex flex-col items-center ${order.process >= 2 ? 'text-green-500' : 'text-gray-300'}`}>
                          <div className={`flex items-center justify-center bg-gray-200 rounded-full w-6 h-6 ${order.process >= 2 ? 'bg-gray-50' : ''}`}>
                            {order.process >= 2 ? <FcApproval className='text-3xl' /> : null}
                          </div>
                          <p className='text-xs text-gray-500 mt-1'>CV vista</p>
                        </div>
                        <div className='flex-1 border-t-2 border-gray-300'></div>
                        <div className={`flex flex-col items-center ${order.process >= 3 ? 'text-white' : 'text-gray-300'}`}>
                          <div className={`flex items-center justify-center bg-gray-200 rounded-full w-6 h-6 ${order.process >= 3 ? 'bg-yellow-500 w-5 h-5' : ''}`}>
                            {order.process >= 3 ? <FcCheckmark className='text-1xl' /> : null}
                          </div>
                          <p className='text-xs text-gray-500 mt-1'>En proceso</p>
                        </div>
                        <div className='flex-1 border-t-2 border-gray-300'></div>
                        <div className={`flex flex-col items-center ${order.process >= 4 ? 'text-white' : 'text-gray-300'}`}>
                          <div className={`flex items-center justify-center bg-gray-200 rounded-full w-6 h-6 ${order.process >= 4 ? ' font-bold bg-blue-500' : ''}`}>
                            {order.process >= 4 ? <MdOutlineVerified className='text-3xl' /> : null}
                          </div>
                          <p className='text-xs text-gray-500 mt-1'>Finalista</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>





              </a>
            ))}
          </ul>
        </div>
        <div className='flex items-center  justify-center mt-2'>
          <img className='w-[80%] h-[90px] ' src="https://tpc.googlesyndication.com/simgad/4718189520296694711" alt="" />
        </div>
      </div>

    </div>
  );
};

export default application;