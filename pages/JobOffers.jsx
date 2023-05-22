import React, { useEffect, useState } from 'react';
import makeAnimated from 'react-select/animated';
import Select from 'react-select'
import { useRouter } from 'next/router';

const JobOffers = ({ data }) => {

    const [selectData, setSelectData] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const queryData = router.query.searchData;
        if (queryData) {
            const searchData = JSON.parse(queryData);
            setSelectData(searchData);
        }
    }, [router.query]);

    console.log(selectData);


    let dataSearch = {
        province: [],
        date: [],
        teleworking: []
    };
    const [selectFecha, setSelectFecha] = useState([]);
    const [selectProvincia, setSelectProvincia] = useState([]);
    const [selectTeleworking, setSelectTeleworking] = useState([]);

    const handSelectProvincia = () => {
        dataSearch.date.push(selectFecha)
        dataSearch.province.push(selectProvincia)
        dataSearch.teleworking.push(selectTeleworking)
        console.log(data);
        //console.log(dataSearch);
        console.log(selectData);
    }

    const optionsSelect = {
        date: [
            { value: 'ANY', label: "Cualquier Fecha" },
            { value: '_24_HOURS', label: "Ultimas 24 Horas" },
            { value: '_7_DAYS', label: "Ultimos 7 Dias" },
            { value: '_15_DAYS', label: "Ultimos 15 Dias" }
        ],
        province: [
            { value: '33', label: "Madrid" },
            { value: '9', label: "Barcelona" },
            { value: '49', label: "Valencia/València" },
            { value: '26', label: "Islas Baleares/Illes Balears" }
        ],
        teleworking: [
            { value: '1', label: "Presencial" },
            { value: '2', label: "Solo teletrabajo" },
            { value: '3', label: "Híbrido" },
            { value: '4', label: "Sin especificar" }
        ]
    }


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
                        onClick={handSelectProvincia}
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
                                closeMenuOnSelect={true}
                                components={animatedComponents}
                                defaultValue={[]}
                                options={optionsSelect.date}
                                isSearchable={false}
                                onChange={(item) => setSelectFecha(item)}

                            />
                        </li>
                        <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2  items-center cursor-pointer'>
                            <label >Provincia</label>
                            <Select
                                className='w-full'
                                closeMenuOnSelect={true}
                                components={animatedComponents}
                                defaultValue={[]}
                                isMulti
                                options={optionsSelect.province}
                                isSearchable={true}
                                onChange={(item) => setSelectProvincia(item)}
                            />
                        </li>
                        <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer'>
                            <label className='text-sm'>Presencial/Teletrabajo</label>
                            <Select
                                className='w-full'
                                closeMenuOnSelect={true}
                                components={animatedComponents}
                                defaultValue={[]}
                                options={optionsSelect.teleworking}
                                isSearchable={false}
                                onChange={(item) => setSelectTeleworking(item)}
                            />
                        </li>
                        <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2  items-center cursor-pointer'>
                            <label >Categoría del puesto</label>
                            <Select
                                className='w-full'
                                closeMenuOnSelect={true}
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
                                closeMenuOnSelect={true}
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
                                closeMenuOnSelect={true}
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
                                closeMenuOnSelect={true}
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