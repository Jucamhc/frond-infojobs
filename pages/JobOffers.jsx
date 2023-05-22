import React, { useEffect, useState } from 'react';
import makeAnimated from 'react-select/animated';
import Select from 'react-select'
import { useRouter } from 'next/router';

const JobOffers = () => {

    const [selectData, setSelectData] = useState([]);
    const router = useRouter();
    const [initialOptionsSelect, setInitialOptionsSelect] = useState([]);

    useEffect(() => {
        const queryData = router.query.searchData;
        if (queryData) {
            const searchData = JSON.parse(queryData);
            setSelectData(searchData);

            console.log(searchData);
            const newOptionsSelect = {

                province: searchData.aggregation.province.map(item => ({
                    value: item.value,
                    label: item.label,
                    count: item.count
                })),
                teleworking: searchData.aggregation.teleworking.map(item => ({
                    value: item.value,
                    label: item.label,
                    count: item.count
                })),
                category: searchData.aggregation.category.map(item => ({
                    value: item.value,
                    label: item.label,
                    count: item.count
                })),

                city: searchData.aggregation.city.map(item => ({
                    value: item.value,
                    label: item.label,
                    count: item.count
                })),

                contractType: searchData.aggregation.contractType.map(item => ({
                    value: item.value,
                    label: item.label,
                    count: item.count
                })),

                country: searchData.aggregation.country.map(item => ({
                    value: item.value,
                    label: item.label,
                    count: item.count
                })),

                education: searchData.aggregation.education.map(item => ({
                    value: item.value,
                    label: item.label,
                    count: item.count
                })),
                workday: searchData.aggregation.workday.map(item => ({
                    value: item.value,
                    label: item.label,
                    count: item.count
                }))
            };

            setInitialOptionsSelect(newOptionsSelect);
            console.log(initialOptionsSelect);
        }

    }, [router.query]);



    let dataSearch = {
        date: [],
        province: [],
        teleworking: [],
        category: [],
        city: [],
        contractType: [],
        country: [],
        education: [],
        workday: []
    };
    const [selectFecha, setSelectFecha] = useState([]);
    const [selectProvincia, setSelectProvincia] = useState([]);
    const [selectTeleworking, setSelectTeleworking] = useState([]);
    const [selectCategory, setSelectCategory] = useState([]);
    const [selectCity, setSelectCity] = useState([]);
    const [selectContractType, setSelectContractType] = useState([]);
    const [selectCountry, setSelectcountry] = useState([]);
    const [selectEducation, setSelectEducation] = useState([]);
    const [selectWorkday, setSelectWorkday] = useState([]);

    const handSelectProvincia = () => {
        
        dataSearch = {
            date: [],
            province: [],
            teleworking: [],
            category: [],
            city: [],
            contractType: [],
            country: [],
            education: [],
            workday: []
        };

        dataSearch.date.push(selectFecha)
        dataSearch.province.push(selectProvincia)
        dataSearch.teleworking.push(selectTeleworking)
        dataSearch.category.push(selectCategory)
        dataSearch.city.push(selectCity)
        dataSearch.contractType.push(selectContractType)
        dataSearch.country.push(selectCountry)
        dataSearch.education.push(selectEducation)
        dataSearch.workday.push(selectWorkday)
        console.log(dataSearch);
    }

    let optionsSelect = {
        date: [
            { value: 'ANY', label: "Cualquier Fecha" },
            { value: '_24_HOURS', label: "Ultimas 24 Horas" },
            { value: '_7_DAYS', label: "Ultimos 7 Dias" },
            { value: '_15_DAYS', label: "Ultimos 15 Dias" }
        ]
    }


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
                        onClick={handSelectProvincia}>
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
                                onChange={(item) => setSelectFecha(item)} />
                        </li>
                        <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2  items-center cursor-pointer'>
                            <label >Provincia</label>
                            <Select
                                className='w-full'
                                closeMenuOnSelect={true}
                                components={animatedComponents}
                                defaultValue={[]}
                                isMulti
                                options={initialOptionsSelect.province}
                                isSearchable={true}
                                onChange={(item) => setSelectProvincia(item)}
                            />
                        </li>
                        <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer'>
                            <label className='text-sm'>Presencial/Teletrabajo</label>
                            <Select
                                className='w-full'
                                isMulti
                                closeMenuOnSelect={true}
                                components={animatedComponents}
                                defaultValue={[]}
                                options={initialOptionsSelect.teleworking}
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
                                options={initialOptionsSelect.category}
                                onChange={(item) => setSelectCategory(item)}
                            />
                        </li>
                        <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer'>
                            <label className='text-sm'>Ciudad</label>
                            <Select
                                className='w-full'
                                closeMenuOnSelect={true}
                                components={animatedComponents}
                                defaultValue={[]}
                                isMulti
                                options={initialOptionsSelect.city}
                                onChange={(item) => setSelectCity(item)}
                            />
                        </li>
                        <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2  items-center cursor-pointer'>
                            <label >Pais</label>
                            <Select
                                className='w-full'
                                closeMenuOnSelect={true}
                                components={animatedComponents}
                                defaultValue={[]}
                                isMulti
                                options={initialOptionsSelect.country}
                                onChange={(item) => setSelectcountry(item)}
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
                                options={initialOptionsSelect.contractType}
                                onChange={(item) => setSelectContractType(item)}
                            />
                        </li>
                        <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer'>
                            <label className='text-sm'>Educacion</label>
                            <Select
                                className='w-full'
                                closeMenuOnSelect={true}
                                components={animatedComponents}
                                defaultValue={[]}
                                isMulti
                                options={initialOptionsSelect.education}
                                onChange={(item) => setSelectEducation(item)}
                            />
                        </li>
                        <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer'>
                            <label className='text-sm'>Tipo de Conrtrato</label>
                            <Select
                                className='w-full'
                                closeMenuOnSelect={true}
                                components={animatedComponents}
                                defaultValue={[]}
                                isMulti
                                options={initialOptionsSelect.workday}
                                onChange={(item) => setSelectWorkday(item)}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )

}

export default JobOffers