import React, { useState } from 'react';
import makeAnimated from 'react-select/animated';
import Select from 'react-select'

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
            <div className='w-full md:col-span-2  lg:h-[79vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>

            </div>

            <div className='w-full col-span-1  lg:h-[79vh] h-[80%] m-auto p-4 border rounded-lg bg-white '>

                <div className='flex justify-between  p-1'>
                    <h1>Filtros de Empleos</h1>
                    <button
                        type="submit"
                        className="flex-none rounded-md bg-[#2088c2] px-7 py-1 text-sm font-semibold text-white shadow-sm hover:bg-[#4993bc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2088c2]"
                    >
                        Filtrar
                    </button>
                </div>

                <div className='w-full col-span-1 lg:h-[68vh] h-[50%] m-auto p-3 border rounded-lg  overflow-y-auto'> 
                    <ul className=''>
                        <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2  items-center cursor-pointer'>
                            <label >Fecha</label>
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
                            <label >Provincia</label>
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
                            <label >Categoría del puesto</label>
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
                            <label >Jornada laboral</label>
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

}

export default JobOffers