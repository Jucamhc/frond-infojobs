import React, { useEffect, useState } from 'react';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';
import { aggregation } from '@/data/aggregationApi';
import JsonFormatter from 'react-json-formatter'

const urlApi = () => {

  const [formattedDataProvincia, setFormattedDataProvincia] = useState(null);
  const [formattedDataCity, setFormattedDataCity] = useState(null);
  const [formattedDataTeleworking, setFormattedDataTeleworking] = useState(null);
  const [formattedDataCategoriaTrabajo, setFormattedDataCategoriaTrabajo] = useState(null);
  const [formattedDataEducation, setFormattedDataEducation] = useState(null);
  const [formattedDataWorkdayIds, setFormattedDataWorkdayIds] = useState(null);
  const [formattedDataContractType, setFormattedDataContractType] = useState(null);
  const [formattedDataCountryIds, setFormattedDataCountryIds] = useState(null);


  const [selectProvincia, setSelectProvincia] = useState([]);
  const [selectCity, setSelectCity] = useState([]);
  const [selectTeleworking, setSelectTeleworking] = useState([]);
  const [selectCategory, setSelectCategory] = useState([]);
  const [selectEducation, setSelectEducation] = useState([]);
  const [selectWorkday, setSelectWorkday] = useState([]);
  const [selectContractType, setSelectContractType] = useState([]);
  const [selectCountry, setSelectcountry] = useState([]);


  const [inputGetProvincia, setInputGetProvincia] = useState('https://api-jucamhc.hop.sh/api-offers/search?page=1&provinceIds=');
  const [inputGetCiudad, setInputGetCiudad] = useState('https://api-jucamhc.hop.sh/api-offers/search?page=1&cityIds=');
  const [inputGetTeletrabajo, setInputGetTeletrabajo] = useState('https://api-jucamhc.hop.sh/api-offers/search?page=1&teleworkingIds=');
  const [inputGetCategoriaTrabajo, setInputGetCategoriaTrabajo] = useState('https://api-jucamhc.hop.sh/api-offers/search?page=1&categoryIds=');
  const [inputGetEducationIds, setInputGetEducationIds] = useState('https://api-jucamhc.hop.sh/api-offers/search?page=1&educationIds=');
  const [inputGetWorkdayIds, setInputGetWorkdayIds] = useState('https://api-jucamhc.hop.sh/api-offers/search?page=1&workdayIds=');
  const [inputGetcontract, setInputGetcontract] = useState('https://api-jucamhc.hop.sh/api-offers/search?page=1&contractTypeIds=');
  const [inputGetcountryIds, setInputGetcountryIds] = useState('https://api-jucamhc.hop.sh/api-offers/search?page=1&countryIds=');


  const seProvince = async () => {
    const pro = selectProvincia.map(item => item.value);
    const provin = pro.join(",");
    let preProvincia = document.getElementById("preProvincia");
    let inputSetProvincia = `https://api-jucamhc.hop.sh/api-offers/search?page=1&provinceIds=${provin}`;

    setInputGetProvincia(inputSetProvincia)

    const data = await fetch(inputSetProvincia)
      .then((response) => response.json());

    const formattedData = JSON.stringify(data.offers, null, 2)
      .replace(/},/g, "},\n")
      .replace(/^\[/, "[\n")
      .replace(/\]$/, "\n]");

    preProvincia.className = 'text-left w-full bg-[#1c2833] border-2 border-[#2088c2] p-2 overflow-auto ';
    setFormattedDataProvincia(formattedData);

    //console.log(data);

  }

  const seCity = async () => {
    const pro = selectCity.map(item => item.value);
    const city = pro.join(",");
    let preCity = document.getElementById("preCity");
    let inputSetCity = `https://api-jucamhc.hop.sh/api-offers/search?page=1&cityIds=${city}`;

    setInputGetCiudad(inputSetCity)

    const data = await fetch(inputSetCity)
      .then((response) => response.json());

    const DataCity = JSON.stringify(data.offers, null, 2)
      .replace(/},/g, "},\n")
      .replace(/^\[/, "[\n")
      .replace(/\]$/, "\n]");

    preCity.className = 'text-left w-full bg-[#1c2833] border-2 border-[#2088c2] p-2 overflow-auto ';
    setFormattedDataCity(DataCity);

  }

  const seTeleworking = async () => {

    const pro = selectTeleworking.map(item => item.value);
    const teletrabajo = pro.join(",");
    let preTeleworking = document.getElementById("preTeleworking");
    let inputSetTeletrabajo = `https://api-jucamhc.hop.sh/api-offers/search?page=1&teleworkingIds=${teletrabajo}`;

    setInputGetTeletrabajo(inputSetTeletrabajo)

    const data = await fetch(inputSetTeletrabajo)
      .then((response) => response.json());

    const DataTeleworking = JSON.stringify(data, null, 2)
      .replace(/},/g, "},\n")
      .replace(/^\[/, "[\n")
      .replace(/\]$/, "]\n]");

    console.log(DataTeleworking);
    preTeleworking.className = 'text-left w-full bg-[#1c2833] border-2 border-[#2088c2] p-2 overflow-auto ';
    setFormattedDataTeleworking(DataTeleworking);

  }

  const seCategory = async () => {
    const pro = selectCategory.map(item => item.value);
    const category = pro.join(",");
    let preCategoriaTrabajo = document.getElementById("preCategoriaTrabajo");
    let inputSetCategoriaTrabajo = `https://api-jucamhc.hop.sh/api-offers/search?page=1&categoryIds=${category}`;

    setInputGetCategoriaTrabajo(inputSetCategoriaTrabajo)

    const data = await fetch(inputSetCategoriaTrabajo)
      .then((response) => response.json());

    const formattedDataCategory = JSON.stringify(data.offers, null, 2)
      .replace(/},/g, "},\n")
      .replace(/^\[/, "[\n")
      .replace(/\]$/, "\n]");

    preCategoriaTrabajo.className = 'text-left w-full bg-[#1c2833] border-2 border-[#2088c2] p-2 overflow-auto ';

    setFormattedDataCategoriaTrabajo(formattedDataCategory);

  }

  const seEducation = async () => {
    const pro = selectEducation.map(item => item.value);
    const provin = pro.join(",");
    let preEducation = document.getElementById("preEducation");
    let inputSetEducation = `https://api-jucamhc.hop.sh/api-offers/search?page=1&educationIds=${provin}`;

    setInputGetEducationIds(inputSetEducation)

    const data = await fetch(inputSetEducation)
      .then((response) => response.json());

    const formattedData = JSON.stringify(data.offers, null, 2)
      .replace(/},/g, "},\n")
      .replace(/^\[/, "[\n")
      .replace(/\]$/, "\n]");

    preEducation.className = 'text-left w-full bg-[#1c2833] border-2 border-[#2088c2] p-2 overflow-auto ';

    setFormattedDataEducation(formattedData);
  }

  const seWorkday = async () => {
    const pro = selectWorkday.map(item => item.value);
    const provin = pro.join(",");
    let preWorkdayIds = document.getElementById("preWorkdayIds");
    let inputSetWorkdayIds = `https://api-jucamhc.hop.sh/api-offers/search?page=1&workdayIds=${provin}`;

    setInputGetWorkdayIds(inputSetWorkdayIds)

    const data = await fetch(inputSetWorkdayIds)
      .then((response) => response.json());

    const formattedData = JSON.stringify(data.offers, null, 2)
      .replace(/},/g, "},\n")
      .replace(/^\[/, "[\n")
      .replace(/\]$/, "\n]");

    preWorkdayIds.className = 'text-left w-full bg-[#1c2833] border-2 border-[#2088c2] p-2 overflow-auto ';
    setFormattedDataWorkdayIds(formattedData);
  }

  const seContractType = async () => {
    const pro = selectContractType.map(item => item.value);
    const provin = pro.join(",");
    let preContractType = document.getElementById("preContractType");
    let inputSetContractType = `https://api-jucamhc.hop.sh/api-offers/search?page=1&contractTypeIds=${provin}`;

    setInputGetcontract(inputSetContractType)

    const data = await fetch(inputSetContractType)
      .then((response) => response.json());

    const formattedData = JSON.stringify(data.offers, null, 2)
      .replace(/},/g, "},\n")
      .replace(/^\[/, "[\n")
      .replace(/\]$/, "\n]");

    preContractType.className = 'text-left w-full bg-[#1c2833] border-2 border-[#2088c2] p-2 overflow-auto ';
    setFormattedDataContractType(formattedData);
  }

  const seCountry = async () => {
    const pro = selectCountry.map(item => item.value);
    const provin = pro.join(",");
    let preCountry = document.getElementById("preCountry");
    let inputSetCountry = `https://api-jucamhc.hop.sh/api-offers/search?page=1&countryIds=${provin}`;

    setInputGetcountryIds(inputSetCountry)

    const data = await fetch(inputSetCountry)
      .then((response) => response.json());

    const formattedData = JSON.stringify(data.offers, null, 2)
      .replace(/},/g, "},\n")
      .replace(/^\[/, "[\n")
      .replace(/\]$/, "\n]");

    preCountry.className = 'text-left w-full bg-[#1c2833] border-2 border-[#2088c2] p-2 overflow-auto ';
    setFormattedDataCountryIds(formattedData);
  }

  const jsonStyle = {
    propertyStyle: { color: '#4fdee5' },
    stringStyle: { color: '#01ff70' },
    numberStyle: { color: '#f5b041' },
    bracketStyle: { color: '#fff' },
    braceStyle: { color: '#fff' },
  }

  const animatedComponents = makeAnimated();

  return (
    <div className="p-3 grid md:grid-cols-1 grid-cols-1 gap-2 bg-gray-100">
      <div className="text-center w-full md:col-span-1 lg:h-full h-[50vh] m-auto p-4 border rounded-lg bg-white">
        <h1 className="font-bold text-3xl mb-4">Consumo de API Rest: InfoJobs</h1>
        <p className="text-sm text-gray-800">
          Descubre una forma rápida y sencilla de acceder a la información de ofertas laborales a través de una API REST. 😊
          Simplemente selecciona la categoría que deseas consultar en el segmento correspondiente. Todas las consultas son
          del tipo GET. Una vez que hayas seleccionado la opción deseada, haz clic en 'Buscar' 🔍 para obtener los resultados
          de la consulta y explorar la información disponible. 🌟
        </p>
      </div>

      <div className="w-full md:col-span-1 flex lg:h-[60vh] h-[50vh] m-auto p-2 rounded-lg bg-white border-2 border-black">
        <div className="w-[20%] mt-1 text-center overflow-y-auto">
          <ul>
            <li className="bg-gray-100 hover:bg-gray-200 rounded-lg my-1 p-1 cursor-pointer border border-gray-400">
              <a href="#trabajoProvincia">Trabajo por Provincia</a>
            </li>
            <li className=" hover:bg-gray-200 rounded-lg my-1 p-1 cursor-pointer border border-gray-400">
              <a href="#trabajoCiudades">Trabajo por Ciudades</a>
            </li>
            <li className="bg-gray-100 hover:bg-gray-200 rounded-lg my-1 p-1 cursor-pointer border border-gray-400">
              <a href="#teletrabajo">Teletrabajo</a>
            </li>
            <li className=" hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400">
              <a href="#categoriaTrabajos">Categoria Trabajos</a>
            </li>
            <li className="bg-gray-100 hover:bg-gray-200 rounded-lg my-1 p-1 cursor-pointer border border-gray-400">
              <a href="#educacionporTrabajo">Educacion por Trabajo</a>
            </li>
            <li className=" hover:bg-gray-200 rounded-lg my-1 p-1 cursor-pointer border border-gray-400">
              <a href="#jornadaLavoral">Jornada Laboral</a>
            </li>
            <li className="bg-gray-100 hover:bg-gray-200 rounded-lg my-1 p-1 cursor-pointer border border-gray-400">
              <a href="#tipoDeContrato">Tipo de Contrato</a>
            </li>
            <li className=" hover:bg-gray-200 rounded-lg my-1 p-1 cursor-pointer border border-gray-400">
              <a href="#trabajoPorPaises">Trabajo por Paises</a>
            </li>
          </ul>
        </div>

        <div className="w-full h-full mt-1 ml-2 md:col-span-1 m-auto rounded-lg bg-white overflow-y-auto">

          <section id='trabajoProvincia' className='border border-gray-500 p-2 m-1 text-center rounded-lg bg-gray-100'>
            <h1 className='underline underline-offset-4 font-bold text-2xl mb-4'>Trabajo por Provincia</h1>
            <div className='flex items-center mb-4'>
              <div className='w-full '>
                <div className='flex items-center mb-3'>
                  <li className='bg-yellow-300 flex rounded-lg mr-1 p-1 cursor-pointer border'>
                    <p className='mx-2'>/GET</p>
                  </li>
                  <div className='flex w-[50%] '>
                    <input
                      id='inputProvincia'
                      name='inputProvincia'
                      type='text'
                      value={inputGetProvincia}
                      required
                      className='w-full flex  rounded-md border-2 px-3 py-1 shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6'
                      placeholder='Puesto, empresa o palabra clave'
                    />
                  </div>
                  <ul className='w-[35%] ml-2'>
                    <Select
                      id='selectProvincia'
                      className='w-full'
                      closeMenuOnSelect={true}
                      components={animatedComponents}
                      value={selectProvincia}
                      isMulti
                      options={aggregation[0].province}
                      onChange={(item) => setSelectProvincia(item)}
                    />
                  </ul>
                  <button
                    type='submit'
                    onClick={seProvince}
                    className='rounded-md ml-2 bg-[#2088c2] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#4993bc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2088c2]'
                  >
                    Buscar
                  </button>
                </div>
                <div className='flex h-[300px]'>
                  <pre id='preProvincia' className='text-left w-full bg-[#1c2833] border-2 border-black p-2  h-full'>
                    {formattedDataProvincia && <JsonFormatter json={formattedDataProvincia} tabWith={4} jsonStyle={jsonStyle} />}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          <section id='trabajoCiudades' className='border border-gray-500 p-2 m-1 text-center rounded-lg '>
            <h1 className='underline underline-offset-4 font-bold text-2xl mb-4'>Trabajo por Ciudades</h1>
            <div className='flex items-center mb-4'>
              <div className='w-full '>
                <div className='flex items-center mb-3'>
                  <li className='bg-yellow-300 flex rounded-lg mr-1 p-1 cursor-pointer border'>
                    <p className='mx-2'>/GET</p>
                  </li>
                  <div className='flex w-[50%]'>
                    <input
                      id='inputTrabajoCiudades'
                      name='inputTrabajoCiudades'
                      type='text'
                      value={inputGetCiudad}
                      required
                      className='w-full flex  rounded-md border-2 px-3 py-1 shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6'
                      placeholder='Puesto, empresa o palabra clave'
                    />
                  </div>
                  <ul className='w-[35%] ml-2'>
                    <Select
                      id='selectTrabajoCiudades'
                      className='w-full'
                      closeMenuOnSelect={true}
                      components={animatedComponents}
                      value={selectCity}
                      isMulti
                      options={aggregation[0].city}
                      onChange={(item) => setSelectCity(item)}
                    />
                  </ul>
                  <button
                    type='submit'
                    onClick={seCity}
                    className='rounded-md ml-2 bg-[#2088c2] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#4993bc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2088c2]'
                  >
                    Buscar
                  </button>
                </div>
                <div className='flex h-[300px]'>
                  <pre id='preCity' className='text-left w-full bg-[#1c2833] border-2 border-black p-2  h-full'>
                    {formattedDataCity && <JsonFormatter json={formattedDataCity} tabWith={4} jsonStyle={jsonStyle} />}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          <section id='teletrabajo' className='border border-gray-500 p-2 m-1 text-center rounded-lg bg-gray-100'>
            <h1 className='underline underline-offset-4 font-bold text-2xl mb-4'>Teletrabajo</h1>
            <div className='flex items-center mb-4'>
              <div className='w-full '>
                <div className='flex items-center mb-3'>
                  <li className='bg-yellow-300 flex rounded-lg mr-1 p-1 cursor-pointer border'>
                    <p className='mx-2'>/GET</p>
                  </li>
                  <div className='flex w-[50%]'>
                    <input
                      id='inputTeletrabajo'
                      name='inputTeletrabajo'
                      type='text'
                      value={inputGetTeletrabajo}
                      required
                      className='w-full flex  rounded-md border-2 px-3 py-1 shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6'
                      placeholder='Puesto, empresa o palabra clave'
                    />
                  </div>
                  <ul className='w-[35%] ml-2'>
                    <Select
                      id='selectTeletrabajo'
                      className='w-full'
                      closeMenuOnSelect={true}
                      components={animatedComponents}
                      value={selectTeleworking}
                      isMulti
                      options={aggregation[0].teleworking}
                      onChange={(item) => setSelectTeleworking(item)}
                    />
                  </ul>
                  <button
                    type='submit'
                    onClick={seTeleworking}
                    className='rounded-md ml-2 bg-[#2088c2] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#4993bc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2088c2]'
                  >
                    Buscar
                  </button>
                </div>
                <div className='flex h-[300px]'>
                  <pre id='preTeleworking' className='text-left w-full bg-[#1c2833] border-2 border-black p-2  h-full'>
                    {formattedDataTeleworking && <JsonFormatter json={formattedDataTeleworking} tabWith={4} jsonStyle={jsonStyle} />}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          <section id='categoriaTrabajos' className='border border-gray-500 p-2 m-1 text-center rounded-lg '>
            <h1 className='underline underline-offset-4 font-bold text-2xl mb-4'>Trabajo por Categoria</h1>
            <div className='flex items-center mb-4'>
              <div className='w-full '>
                <div className='flex items-center mb-3'>
                  <li className='bg-yellow-300 flex rounded-lg mr-1 p-1 cursor-pointer border'>
                    <p className='mx-2'>/GET</p>
                  </li>
                  <div className='flex w-[50%]'>
                    <input
                      id='inputCategoriaTrabajo'
                      name='inputCategoriaTrabajo'
                      type='text'
                      value={inputGetCategoriaTrabajo}
                      required
                      className='w-full flex  rounded-md border-2 px-3 py-1 shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6'
                      placeholder='Puesto, empresa o palabra clave'
                    />
                  </div>
                  <ul className='w-[35%] ml-2'>
                    <Select
                      id='selectProvincia'
                      className='w-full'
                      closeMenuOnSelect={true}
                      components={animatedComponents}
                      value={selectCategory}
                      isMulti
                      options={aggregation[0].category}
                      onChange={(item) => setSelectCategory(item)}
                    />
                  </ul>
                  <button
                    type='submit'
                    onClick={seCategory}
                    className='rounded-md ml-2 bg-[#2088c2] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#4993bc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2088c2]'
                  >
                    Buscar
                  </button>
                </div>
                <div className='flex h-[300px]'>
                  <pre id='preCategoriaTrabajo' className='text-left w-full bg-[#1c2833] border-2 border-black p-2  h-full'>
                    {formattedDataCategoriaTrabajo && <JsonFormatter json={formattedDataCategoriaTrabajo} tabWith={4} jsonStyle={jsonStyle} />}
                  </pre>
                </div>
              </div>
            </div>
          </section>


          <section id='educacionporTrabajo' className='border border-gray-500 p-2 m-1 text-center rounded-lg bg-gray-100'>
            <h1 className='underline underline-offset-4 font-bold text-2xl mb-4'>Trabajo por Educacion</h1>
            <div className='flex items-center mb-4'>
              <div className='w-full '>
                <div className='flex items-center mb-3'>
                  <li className='bg-yellow-300 flex rounded-lg mr-1 p-1 cursor-pointer border'>
                    <p className='mx-2'>/GET</p>
                  </li>
                  <div className='flex w-[50%]'>
                    <input
                      id='inputEducacion'
                      name='inputEducacion'
                      type='text'
                      value={inputGetEducationIds}
                      required
                      className='w-full flex  rounded-md border-2 px-3 py-1 shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6'
                    />
                  </div>
                  <ul className='w-[35%] ml-2'>
                    <Select
                      id='selectEducacion'
                      className='w-full'
                      closeMenuOnSelect={true}
                      components={animatedComponents}
                      value={selectEducation}
                      isMulti
                      options={aggregation[0].education}
                      onChange={(item) => setSelectEducation(item)}
                    />
                  </ul>
                  <button
                    type='submit'
                    onClick={seEducation}
                    className='rounded-md ml-2 bg-[#2088c2] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#4993bc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2088c2]'
                  >
                    Buscar
                  </button>
                </div>
                <div className='flex h-[300px]'>
                  <pre id='preEducation' className='text-left w-full bg-[#1c2833] border-2 border-black p-2  h-full'>
                    {formattedDataEducation && <JsonFormatter json={formattedDataEducation} tabWith={4} jsonStyle={jsonStyle} />}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          <section id='jornadaLavoral' className='border border-gray-500 p-2 m-1 text-center rounded-lg '>
            <h1 className='underline underline-offset-4 font-bold text-2xl mb-4'>Jornada Laboral</h1>
            <div className='flex items-center mb-4'>
              <div className='w-full '>
                <div className='flex items-center mb-3'>
                  <li className='bg-yellow-300 flex rounded-lg mr-1 p-1 cursor-pointer border'>
                    <p className='mx-2'>/GET</p>
                  </li>
                  <div className='flex w-[50%]'>
                    <input
                      id='inputWorkdayIds'
                      name='inputWorkdayIds'
                      type='text'
                      value={inputGetWorkdayIds}
                      required
                      className='w-full flex  rounded-md border-2 px-3 py-1 shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6'
                      placeholder='Puesto, empresa o palabra clave'
                    />
                  </div>
                  <ul className='w-[35%] ml-2'>
                    <Select
                      id='selectProvincia'
                      className='w-full'
                      closeMenuOnSelect={true}
                      components={animatedComponents}
                      value={selectWorkday}
                      isMulti
                      options={aggregation[0].workday}
                      onChange={(item) => setSelectWorkday(item)}
                    />
                  </ul>
                  <button
                    type='submit'
                    onClick={seWorkday}
                    className='rounded-md ml-2 bg-[#2088c2] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#4993bc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2088c2]'
                  >
                    Buscar
                  </button>
                </div>
                <div className='flex h-[300px]'>
                  <pre id='preWorkdayIds' className='text-left w-full bg-[#1c2833] border-2 border-black p-2  h-full'>
                    {formattedDataWorkdayIds && <JsonFormatter json={formattedDataWorkdayIds} tabWith={4} jsonStyle={jsonStyle} />}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          <section id='tipoDeContrato' className='border border-gray-500 p-2 m-1 text-center rounded-lg bg-gray-100'>
            <h1 className='underline underline-offset-4 font-bold text-2xl mb-4'>Tipo de Contrato</h1>
            <div className='flex items-center mb-4'>
              <div className='w-full '>
                <div className='flex items-center mb-3'>
                  <li className='bg-yellow-300 flex rounded-lg mr-1 p-1 cursor-pointer border'>
                    <p className='mx-2'>/GET</p>
                  </li>
                  <div className='flex w-[50%]'>
                    <input
                      id='inputProvincia'
                      name='inputProvincia'
                      type='text'
                      value={inputGetcontract}
                      required
                      className='w-full flex  rounded-md border-2 px-3 py-1 shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6'
                      placeholder='Puesto, empresa o palabra clave'
                    />
                  </div>
                  <ul className='w-[35%] ml-2'>
                    <Select
                      id='selectProvincia'
                      className='w-full'
                      closeMenuOnSelect={true}
                      components={animatedComponents}
                      value={selectContractType}
                      isMulti
                      options={aggregation[0].contractType}
                      onChange={(item) => setSelectContractType(item)}
                    />
                  </ul>
                  <button
                    type='submit'
                    onClick={seContractType}
                    className='rounded-md ml-2 bg-[#2088c2] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#4993bc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2088c2]'
                  >
                    Buscar
                  </button>
                </div>
                <div className='flex h-[300px]'>
                  <pre id='preContractType' className='text-left w-full bg-[#1c2833] border-2 border-black p-2  h-full'>
                    {formattedDataContractType && <JsonFormatter json={formattedDataContractType} tabWith={4} jsonStyle={jsonStyle} />}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          <section id='trabajoPorPaises' className='border border-gray-500 p-2 m-1 text-center rounded-lg '>
            <h1 className='underline underline-offset-4 font-bold text-2xl mb-4'>Trabajo por Paises</h1>
            <div className='flex items-center mb-4'>
              <div className='w-full '>
                <div className='flex items-center mb-3'>
                  <li className='bg-yellow-300 flex rounded-lg mr-1 p-1 cursor-pointer border'>
                    <p className='mx-2'>/GET</p>
                  </li>
                  <div className='flex w-[50%]'>
                    <input
                      id='inputProvincia'
                      name='inputProvincia'
                      type='text'
                      value={inputGetcountryIds}
                      required
                      className='w-full flex  rounded-md border-2 px-3 py-1 shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6'
                      placeholder='Puesto, empresa o palabra clave'
                    />
                  </div>
                  <ul className='w-[35%] ml-2'>
                    <Select
                      id='selectProvincia'
                      className='w-full'
                      closeMenuOnSelect={true}
                      components={animatedComponents}
                      value={selectCountry}
                      isMulti
                      options={aggregation[0].country}
                      onChange={(item) => setSelectcountry(item)}
                    />
                  </ul>
                  <button
                    type='submit'
                    onClick={seCountry}
                    className='rounded-md ml-2 bg-[#2088c2] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#4993bc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2088c2]'
                  >
                    Buscar
                  </button>
                </div>
                <div className='flex h-[300px]'>
                  <pre id='preCountry' className='text-left w-full bg-[#1c2833] border-2 border-black p-2  h-full'>
                    {formattedDataCountryIds && <JsonFormatter json={formattedDataCountryIds} tabWith={4} jsonStyle={jsonStyle} />}
                  </pre>
                </div>
              </div>
            </div>
          </section>


        </div>
      </div>
      <div className='flex items-center  justify-center mt-2'>
        <img className='w-[80%] h-[90px] ' src="https://tpc.googlesyndication.com/simgad/9279042036256268657" alt="" />
      </div>
    </div>
  )
}

export default urlApi