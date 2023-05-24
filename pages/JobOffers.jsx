import React, { useEffect, useState } from 'react';
import makeAnimated from 'react-select/animated';
import Select from 'react-select'
import { useRouter } from 'next/router';
import { fetchDataJobsDetail } from '@/data/fetchData';

const JobOffers = () => {

    const [selectData, setSelectData] = useState([]);
    const router = useRouter();
    const [initialOptionsSelect, setInitialOptionsSelect] = useState([]);

    const [selectFecha, setSelectFecha] = useState([]);
    const [selectProvincia, setSelectProvincia] = useState([]);
    const [selectTeleworking, setSelectTeleworking] = useState([]);
    const [selectCategory, setSelectCategory] = useState([]);
    const [selectCity, setSelectCity] = useState([]);
    const [selectContractType, setSelectContractType] = useState([]);
    const [selectCountry, setSelectcountry] = useState([]);
    const [selectEducation, setSelectEducation] = useState([]);
    const [selectWorkday, setSelectWorkday] = useState([]);


    // Variables de la consulta filtro
    const [keywordSearch, setKeywordSearch] = useState('');
    const [normalizedJobTitleIdsSearch, setNormalizedJobTitleIdsSearch] = useState('');
    let [provinceIdsSearch, setProvinceIdsSearch] = useState('');
    let [cityIdsSearch, setCityIdsSearch] = useState('');
    let [teleworkingIdsSearch, setTeleworkingIdsSearch] = useState('');
    let [categoryIdsSearch, setCategoryIdsSearch] = useState('');
    let [educationIdsSearch, setEducationIdsSearch] = useState('');
    let [contractTypeIdsSearch, setContractTypeIdsSearch] = useState('');
    const [pageSearch, setPageSearch] = useState('');
    const [sortBySearch, setSortBySearch] = useState('');
    const [onlyForeignCountrySearch, setOnlyForeignCountrySearch] = useState('');
    let [countryIdsSearch, setCountryIdsSearch] = useState('');
    let [sinceDateSearch, setSinceDateSearch] = useState('');
    const [subcategoryIdsSearch, setSubcategoryIdsSearch] = useState('');
    const [segmentIdSearch, setSegmentIdSearch] = useState('');
    let [workdayIdsSearch, setWorkdayIdsSearch] = useState('');
    let [searchData, setSearchData] = useState([]);




    useEffect(() => {
        const queryData = router.query.searchData;
        //console.log(queryData?.length);

        if (queryData?.length > 0) {

            setSelectWorkday([])
            setSelectEducation([])
            setSelectContractType([])
            setSelectcountry([])
            setSelectCity([])
            setSelectCategory([])
            setSelectTeleworking([])
            setSelectProvincia([])
            setSelectFecha([optionsSelect.date[0]])

            searchData = JSON.parse(queryData)

            const newOptionsSelect = {

                province: searchData.aggregation?.province.map(item => ({
                    value: item.value,
                    label: item.label,
                    count: item.count
                })),
                teleworking: searchData.aggregation?.teleworking.map(item => ({
                    value: item.value,
                    label: item.label,
                    count: item.count
                })),
                category: searchData.aggregation?.category.map(item => ({
                    value: item.value,
                    label: item.label,
                    count: item.count
                })),

                city: searchData.aggregation?.city.map(item => ({
                    value: item.value,
                    label: item.label,
                    count: item.count
                })),

                contractType: searchData.aggregation?.contractType.map(item => ({
                    value: item.value,
                    label: item.label,
                    count: item.count
                })),

                country: searchData.aggregation?.country.map(item => ({
                    value: item.value,
                    label: item.label,
                    count: item.count
                })),

                education: searchData.aggregation?.education.map(item => ({
                    value: item.value,
                    label: item.label,
                    count: item.count
                })),
                workday: searchData.aggregation?.workday.map(item => ({
                    value: item.value,
                    label: item.label,
                    count: item.count
                })),
                navigation: {
                    self: searchData.navigation?.self,
                    next: searchData.navigation?.next,
                    totalPages: searchData.navigation?.totalPages,
                    totalElements: searchData.navigation?.totalElements
                },
                search: {
                    keyword: searchData.search?.keyword?.value.replace(/ /g, "%20"),
                }
            };
            /*  console.log(newOptionsSelect); */
            setKeywordSearch(newOptionsSelect.search.keyword)
            setSinceDateSearch('ANY')
            setInitialOptionsSelect(newOptionsSelect);
            setSelectData(searchData);
        }

    }, [router.query]);




    const [secondData, setSecondData] = useState([]);
    const [loadData, setLoadData] = useState(false);

    useEffect(() => {
        //console.log("loadData " + loadData);

        if (loadData) {

            searchData = secondData

            const newOptionsSelect = {

                province: searchData.aggregation?.province.map(item => ({
                    value: item.value,
                    label: item.label,
                    count: item.count
                })),
                teleworking: searchData.aggregation?.teleworking.map(item => ({
                    value: item.value,
                    label: item.label,
                    count: item.count
                })),
                category: searchData.aggregation?.category.map(item => ({
                    value: item.value,
                    label: item.label,
                    count: item.count
                })),

                city: searchData.aggregation?.city.map(item => ({
                    value: item.value,
                    label: item.label,
                    count: item.count
                })),

                contractType: searchData.aggregation?.contractType.map(item => ({
                    value: item.value,
                    label: item.label,
                    count: item.count
                })),

                country: searchData.aggregation?.country.map(item => ({
                    value: item.value,
                    label: item.label,
                    count: item.count
                })),

                education: searchData.aggregation?.education.map(item => ({
                    value: item.value,
                    label: item.label,
                    count: item.count
                })),
                workday: searchData.aggregation?.workday.map(item => ({
                    value: item.value,
                    label: item.label,
                    count: item.count
                })),
                navigation: {
                    self: searchData.navigation?.self,
                    next: searchData.navigation?.next,
                    totalPages: searchData.navigation?.totalPages,
                    totalElements: searchData.navigation?.totalElements
                },
                search: {
                    keyword: searchData.search?.keyword?.value.replace(/ /g, "%20"),
                }
            };
            setSinceDateSearch('ANY')
            setInitialOptionsSelect(newOptionsSelect);
        } setSelectData(searchData);

    }, [loadData]);


    const [dataSearch, setDataSearch] = useState({
        date: [],
        province: [],
        teleworking: [],
        category: [],
        city: [],
        contractType: [],
        country: [],
        education: [],
        workday: [],
    });


    const handSelectProvincia = async () => {
        setLoadData(false)
        setDataSearch({
            date: [],
            province: [],
            teleworking: [],
            category: [],
            city: [],
            contractType: [],
            country: [],
            education: [],
            workday: []
        });

        dataSearch.date.push(selectFecha)
        dataSearch.province.push(selectProvincia)
        dataSearch.teleworking.push(selectTeleworking)
        dataSearch.category.push(selectCategory)
        dataSearch.city.push(selectCity)
        dataSearch.contractType.push(selectContractType)
        dataSearch.country.push(selectCountry)
        dataSearch.education.push(selectEducation)
        dataSearch.workday.push(selectWorkday)


        //ARMO LOS DATOS DE LA CONSULTA Y REALIZO LA CONSULTA

        //fecha
        if (dataSearch?.date[0]?.length > 0) {
            sinceDateSearch = dataSearch?.date[0]?.value
        }
        //PROVINCIA
        if (dataSearch?.province[0]?.length > 0) {
            const pro = dataSearch.province[0].map(item => item.value);
            const provin = pro.join(",");
            provinceIdsSearch = provin
        }
        //PRESENCIAL TELLETRABAJO
        if (dataSearch?.teleworking[0]?.length > 0) {
            const tele = dataSearch.teleworking[0].map(item => item.value);
            const telewor = tele.join(",");
            teleworkingIdsSearch = telewor
        }
        //CATEGORIA
        if (dataSearch?.category[0]?.length > 0) {
            const cate = dataSearch.category[0].map(item => item.value);
            const catego = cate.join(",");
            categoryIdsSearch = catego
        }

        if (dataSearch?.city[0]?.length > 0) {
            const cit = dataSearch.city[0].map(item => item.value);
            const city = cit.join(",");
            cityIdsSearch = city
        }

        if (dataSearch?.contractType[0]?.length > 0) {
            const contr = dataSearch.contractType[0].map(item => item.value);
            const contra = contr.join(",");
            contractTypeIdsSearch = contra
        }

        if (dataSearch?.country[0]?.length > 0) {
            const count = dataSearch.country[0].map(item => item.value);
            const countr = count.join(",");
            countryIdsSearch = countr
        }

        if (dataSearch?.education[0]?.length > 0) {
            console.log("educacion prueba");
            const edu = dataSearch.education[0].map(item => item.value);
            const educa = edu.join(",");
            educationIdsSearch = educa
        }

        if (dataSearch?.workday[0]?.length > 0) {
            const wor = dataSearch.workday[0].map(item => item.value);
            const work = wor.join(",");
            workdayIdsSearch = work
        }


        //console.log("keywordSearch ", keywordSearch, " \n \n normalizedJobTitleIdsSearch ", normalizedJobTitleIdsSearch, "\n \n provinceIdsSearch ", provinceIdsSearch, " \n \ncityIdsSearch ", cityIdsSearch, "\n\n teleworkingIdsSearch ", teleworkingIdsSearch, "\n\n categoryIdsSearch ", categoryIdsSearch, " \n\nworkdayIdsSearch ", workdayIdsSearch, " \n\neducationIdsSearch ", educationIdsSearch, " \n\nsegmentIdSearch ", segmentIdSearch, "\n\n contractTypeIdsSearch ", contractTypeIdsSearch, " \n\npageSearch ", pageSearch, " \n\nsortBySearch ", sortBySearch, "\n\n onlyForeignCountrySearch ", onlyForeignCountrySearch, " \n\ncountryIdsSearch ", countryIdsSearch, "\n\n sinceDateSearch ", sinceDateSearch, " \n\nsubcategoryIdsSearch ", subcategoryIdsSearch);
        setSecondData(await fetchDataJobsDetail(
            keywordSearch,
            normalizedJobTitleIdsSearch,
            provinceIdsSearch,
            cityIdsSearch,
            teleworkingIdsSearch,
            categoryIdsSearch,
            workdayIdsSearch,
            educationIdsSearch,
            segmentIdSearch,
            contractTypeIdsSearch,
            pageSearch,
            sortBySearch,
            onlyForeignCountrySearch,
            countryIdsSearch,
            sinceDateSearch,
            subcategoryIdsSearch)
        );

        setLoadData(true);
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
            <div className='overflow-y-auto w-full md:col-span-2 lg:h-[79vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                    {selectData.offers?.map((item) => (
                        <div key={item.id} className='max-h-full w-60 bg-gray-50 hover:bg-gray-100 border-2 rounded-lg px-2 py-2 ring-1 ring-slate-900/5 shadow-xl '>
                            {/*  <div className='absolute top-0 left-0'>
                                <div className='flex text-[12px] font-bold items-center justify-center w-4 h-4 bg-[#67add3] text-white rounded-br-lg'>
                                    {item.rating}
                                </div>
                            </div> */}
                            <div className='flex '>
                                <span className='w-[50%] h-[20%]  items-center justify-start rounded-none'>
                                    <img
                                        className='h-10 w-10'
                                        src={item?.companyLogo ? item?.companyLogo : 'https://media.infojobs.net/appgrade/pictures/pic-company-logo.png'}
                                        alt='Logo'
                                    />
                                    <p className='mt-1 text-gray-500 font-bold text-[11px]'>{item?.companyName.toUpperCase()}</p>
                                </span>
                                <div className='ml-1'>
                                    <h3 className='text-slate-900 text-start  text-xs font-semibold tracking-tight'>
                                        {item?.title}
                                    </h3>
                                    <div className='mt-2 text-gray-400 flex text-[14px] justify-between  font-normal grid-cols-3'>
                                        <p className='flex'>{item?.contractType}</p>
                                        <p className='text-end'>{item?.workday}</p>
                                    </div>
                                </div>
                            </div>
                            <h3 className='text-gray-500 mt-1 flex justify-between text-[11px]'>
                                {item?.salary?.period === "MONTH" ? (
                                    <p className='text-start font-medium'>{item?.salary?.range?.min} € - {item?.salary?.range?.max} € Bruto/al mes</p>
                                ) : item?.salary?.period === "YEAR" ? (
                                    <p className='text-start font-medium'>{item?.salary?.range?.min} € - {item?.salary?.range?.max} € Bruto/año</p>
                                ) : <p className='text-start font-medium'>{item?.teleworking}</p>}


                                <p className='text-end  font-medium'>{item?.city.toUpperCase()}</p>
                            </h3>
                        </div>
                    ))}
                </div>
            </div>

            <div className='w-full col-span-1 lg:h-[79vh] h-[80%] m-auto p-4 border rounded-lg bg-white'>
                <div className='flex justify-between p-1'>
                    <h1>Filtros de {initialOptionsSelect?.navigation?.totalElements ? initialOptionsSelect?.navigation?.totalElements : 0} Ofertas</h1>
                    <button
                        type="submit"
                        className="flex-none rounded-md bg-[#2088c2] px-7 py-1 text-sm font-semibold text-white shadow-sm hover:bg-[#4993bc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2088c2]"
                        onClick={handSelectProvincia} >
                        Filtrar
                    </button>
                </div>

                <div className='w-full col-span-1 lg:h-[68vh] h-[50%] m-auto p-3 border rounded-lg overflow-y-auto'>
                    <ul>
                        <li key='fecha' className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer'>
                            <label htmlFor='fecha'>Fecha</label>
                            <Select
                                id='fecha'
                                className='w-full'
                                closeMenuOnSelect={true}
                                components={animatedComponents}
                                defaultValue={[optionsSelect.date[0]]}
                                value={selectFecha}
                                options={optionsSelect.date}
                                isSearchable={false}
                                onChange={(item) => setSelectFecha(item.value)}
                            />
                        </li>
                        <li key='provincia' className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer'>
                            <label htmlFor='provincia'>Provincia</label>
                            <Select
                                id='provincia'
                                className='w-full'
                                closeMenuOnSelect={true}
                                components={animatedComponents}
                                defaultValue={[]}
                                value={selectProvincia}
                                isMulti
                                options={initialOptionsSelect.province ? initialOptionsSelect.province.map(item => ({
                                    value: item.value,
                                    label: `${item.label} (${item.count})`,
                                })) : []}
                                isSearchable={true}
                                onChange={(item) => setSelectProvincia(item)}
                            />
                        </li>
                        <li key='teletrabajo' className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer'>
                            <label htmlFor='teletrabajo'>Presencial/Teletrabajo</label>
                            <Select
                                id='teletrabajo'
                                className='w-full'
                                isMulti
                                closeMenuOnSelect={true}
                                components={animatedComponents}
                                defaultValue={[]}
                                value={selectTeleworking}
                                options={initialOptionsSelect.teleworking ? initialOptionsSelect.teleworking.map(item => ({
                                    value: item.value,
                                    label: `${item.label} (${item.count})`,
                                })) : []}
                                isSearchable={false}
                                onChange={(item) => setSelectTeleworking(item)}
                            />
                        </li>
                        <li key='categoria' className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer'>
                            <label htmlFor='categoria'>Categoría del puesto</label>
                            <Select
                                id='categoria'
                                className='w-full'
                                closeMenuOnSelect={true}
                                components={animatedComponents}
                                defaultValue={[]}
                                value={selectCategory}
                                isMulti
                                options={initialOptionsSelect.category ? initialOptionsSelect.category.map(item => ({
                                    value: item.value,
                                    label: `${item.label} (${item.count})`,
                                })) : []}
                                onChange={(item) => setSelectCategory(item)}
                            />
                        </li>
                        <li key='ciudad' className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer'>
                            <label htmlFor='ciudad'>Ciudad</label>
                            <Select
                                id='ciudad'
                                className='w-full'
                                closeMenuOnSelect={true}
                                components={animatedComponents}
                                defaultValue={[]}
                                value={selectCity}
                                isMulti
                                options={initialOptionsSelect.city ? initialOptionsSelect.city.map(item => ({
                                    value: item.value,
                                    label: `${item.label} (${item.count})`,
                                })) : []}
                                onChange={(item) => setSelectCity(item)}
                            />
                        </li>
                        <li key='pais' className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer'>
                            <label htmlFor='pais'>País</label>
                            <Select
                                id='pais'
                                className='w-full'
                                closeMenuOnSelect={true}
                                components={animatedComponents}
                                defaultValue={[]}
                                value={selectCountry}
                                isMulti
                                options={initialOptionsSelect.country ? initialOptionsSelect.country.map(item => ({
                                    value: item.value,
                                    label: `${item.label} (${item.count})`,
                                })) : []}
                                onChange={(item) => setSelectcountry(item)}
                            />
                        </li>
                        <li key='tipoContrato' className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer'>
                            <label htmlFor='tipoContrato'>Tipo de contrato</label>
                            <Select
                                id='tipoContrato'
                                className='w-full'
                                closeMenuOnSelect={true}
                                components={animatedComponents}
                                defaultValue={[]}
                                value={selectContractType}
                                isMulti
                                options={initialOptionsSelect.contractType ? initialOptionsSelect.contractType.map(item => ({
                                    value: item.value,
                                    label: `${item.label} (${item.count})`,
                                })) : []}
                                onChange={(item) => setSelectContractType(item)}
                            />
                        </li>
                        <li key='educacion' className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer'>
                            <label htmlFor='educacion'>Educación</label>
                            <Select
                                id='educacion'
                                className='w-full'
                                closeMenuOnSelect={true}
                                components={animatedComponents}
                                defaultValue={[]}
                                value={selectEducation}
                                isMulti
                                options={initialOptionsSelect.education ? initialOptionsSelect.education.map(item => ({
                                    value: item.value,
                                    label: `${item.label} (${item.count})`,
                                })) : []}
                                onChange={(item) => setSelectEducation(item)}
                            />
                        </li>
                        <li key='jornadaLaboral' className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer'>
                            <label htmlFor='jornadaLaboral'>Jornada laboral</label>
                            <Select
                                id='jornadaLaboral'
                                className='w-full'
                                closeMenuOnSelect={true}
                                components={animatedComponents}
                                defaultValue={[]}
                                value={selectWorkday}
                                isMulti
                                options={initialOptionsSelect.workday ? initialOptionsSelect.workday.map(item => ({
                                    value: item.value,
                                    label: `${item.label} (${item.count})`,
                                })) : []}
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