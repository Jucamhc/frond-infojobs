import React, { useState } from 'react';
import makeAnimated from 'react-select/animated';
import Select from 'react-select'
import { FaShoppingBag } from 'react-icons/fa';

const JobOffers = () => {

    const options = [
        { value: '1', label: 'Choc' },
        { value: '2', label: 'Strawberry' },
        { value: '3', label: 'Vanilla' },
        { value: '4', label: 'Vanilla' },
        { value: '5', label: 'Vanilla' },
    ]

    const animatedComponents = makeAnimated();

    return (

        <div className='p-3 grid md:grid-cols-3 grid-cols-1 gap-2 bg-gray-100'>
            <div className='w-full md:col-span-2 relative lg:h-[79vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>

            </div>

            <div className='w-full col-span-1 relative lg:h-[79vh] h-[80%] m-auto p-4 border rounded-lg bg-white '>

                <div className='flex justify-between  p-1'>
                    <h1>Filtros de Empleos</h1>
                    <button
                        type="submit"
                        className="flex-none rounded-md bg-[#2088c2] px-7 py-1 text-sm font-semibold text-white shadow-sm hover:bg-[#4993bc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2088c2]"
                    >
                        Filtrar
                    </button>
                </div>

                <div className='w-full col-span-1 relative lg:h-[68vh] h-[50%] m-auto p-3 border rounded-lg  overflow-y-auto'> 
                    <ul className=''>
                        <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2  items-center cursor-pointer'>
                            <label for="">Fecha</label>
                            <Select
                                className='w-full'
                                closeMenuOnSelect={false}
                                components={animatedComponents}
                                defaultValue={[]}
                                isMulti
                                options={options}
                            />
                        </li>
                        <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2  items-center cursor-pointer'>
                            <label for="">Provincia</label>
                            <Select
                                className='w-full'
                                closeMenuOnSelect={false}
                                components={animatedComponents}
                                defaultValue={[]}
                                isMulti
                                options={options}
                            />
                        </li>
                        <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer'>
                            <label className='text-sm'>Presencial/Teletrabajo</label>
                            <Select
                                className='w-full'
                                closeMenuOnSelect={false}
                                components={animatedComponents}
                                defaultValue={[]}
                                isMulti
                                options={options}
                            />
                        </li>
                        <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2  items-center cursor-pointer'>
                            <label for="">Categoría del puesto</label>
                            <Select
                                className='w-full'
                                closeMenuOnSelect={false}
                                components={animatedComponents}
                                defaultValue={[]}
                                isMulti
                                options={options}
                            />
                        </li>
                        <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer'>
                            <label className='text-sm'>Experiencia (años)</label>
                            <Select
                                className='w-full'
                                closeMenuOnSelect={false}
                                components={animatedComponents}
                                defaultValue={[]}
                                isMulti
                                options={options}
                            />
                        </li>
                        <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2  items-center cursor-pointer'>
                            <label for="">Jornada laboral</label>
                            <Select
                                className='w-full'
                                closeMenuOnSelect={false}
                                components={animatedComponents}
                                defaultValue={[]}
                                isMulti
                                options={options}
                            />
                        </li>
                        <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer'>
                            <label className='text-sm'>Tipo de contrato</label>
                            <Select
                                className='w-full'
                                closeMenuOnSelect={false}
                                components={animatedComponents}
                                defaultValue={[]}
                                isMulti
                                options={options}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>


    )

    /* 
        <div className='flex p-4 bg-gray-100'>
            <div className='lg:col-span-2 w-[30%] col-span-1 bg-white flex  justify-between  border p-4 rounded-lg'>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-2xl font-bold'>7,846</p>
                    <p className='text-gray-600 '></p>
                </div>
                <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-green-700 text-lg'>+18%</span>
                </p>
            </div>
        </div > 

)

/* 
            <div style={{ width: '90%', justifyContent: 'center', display: 'flex' }}>
                <Multiselect options={options} displayValue="Country" />
            </div>
 
 
            <li className='flex ml-5 bg-white rounded-lg my-3 items-center justify-between'>
                <select>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Maybe</option>
                </select>
                <select>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Maybe</option>
                </select>
                <select>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Maybe</option>
                </select>
                <select>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Maybe</option>
                </select>
                <select>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Maybe</option>
                </select>
                <select>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Maybe</option>
                </select>
                <select>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Maybe</option>
                </select>
                <select>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Maybe</option>
                </select>
                <select>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Maybe</option>
                </select>
                <select>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Maybe</option>
                </select>
            </li> */

    /*         <li className='flex w-[35%] bg-white rounded-lg my-3 items-center justify-between'>
                    <div className=" ml-2">
                        <label className='text-sm '>Busco ofertas de...</label>
                        <div className=' flex max-w-md gap-x-4'>
                            <input
                                id="email-address"
                                name="busqueda"
                                type="text"
                                autoComplete="email"
                                required
                                className="min-w-full flex rounded-md  border-2 px-3.5 py-1 shadow-sm ring-1 ring-inset  sm:text-sm sm:leading-6"
                                placeholder="Puesto, empresa o palabra clave"
                            />
    
                            <button
                                type="submit"
                                className="flex-none rounded-md bg-[#2088c2] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#4993bc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2088c2]"
                            >
                                Buscar
                            </button>
                        </div>
                    </div>
                </li>  */


}

export default JobOffers