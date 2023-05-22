import React from 'react'

const urlApi = () => {
  return (
    <div className='p-3 grid md:grid-cols-1 grid-cols-1 gap-2 bg-gray-100 '>

      <div className='text-center w-full md:col-span-1  lg:h-full h-[50vh] m-auto p-4 border rounded-lg bg-white'>
        <h1 className='font-bold text-3xl mb-4'>Consumo de API Rest: InfoJobs</h1>
        <p className='text-sm text-gray-800'>
        Descubre una forma rápida y sencilla de acceder a la información de ofertas laborales a través de una API REST. 😊 Simplemente selecciona la categoría que deseas consultar en el segmento correspondiente. Todas las consultas son del tipo GET. Una vez que hayas seleccionado la opción deseada, haz clic en 'Buscar' 🔍 para obtener los resultados de la consulta y explorar la información disponible. 🌟

        </p>
      </div>



      <div className="w-full md:col-span-1 flex  lg:h-[70vh] h-[50vh] m-auto p-2  rounded-lg bg-white border-2 border-black">
        <div className="w-[20%] mt-1 text-center overflow-y-auto">
          <ul>
            <li className="bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400">
              <a href="#trabajoProvincia">Trabajo por Provincia</a>
            </li>
            <li className="bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400">
              <a href="#trabajoCiudades">Trabajo por Ciudades</a>
            </li>
            <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1  cursor-pointer border border-gray-400'>
              <a href="#teletrabajo" >Teletrabajo</a>
            </li>
            <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1  cursor-pointer border border-gray-400'>
              <a href="#categoriaTrabajos" >Categoria Trabajos</a>
            </li>
            <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1  cursor-pointer border border-gray-400'>
              <a href="#educacionporTrabajo" >Educacion por Trabajo</a>
            </li>
            <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1  cursor-pointer border border-gray-400'>
              <a href="#jornadaLavoral" >Jornada Lavoral</a>
            </li>
            <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1  cursor-pointer border border-gray-400'>
              <a href="#tipoDeContrato" >Tipo de Contrato</a>
            </li>
            <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1  cursor-pointer border border-gray-400'>
              <a href="#trabajoPorPaises" >Trabajo por Paises</a>
            </li>
            <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1  cursor-pointer border border-gray-400'>
              <a href="#palabrasClaves" >Palabras Claves</a>
            </li>
            <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1  cursor-pointer border border-gray-400'>
              <a href="#construirBusqueda" >construir Busqueda</a>
            </li>
          </ul>
        </div>

        <div className='w-full h-full mt-1 ml-2 md:col-span-1  m-auto  rounded-lg bg-white overflow-y-auto '>

          <section id='trabajoProvincia' className='border border-gray-500 p-2 m-5 text-center rounded-lg'>
            <h1 className='underline underline-offset-4 font-bold text-2xl mb-4'>Trabajo por Provincia</h1>
            <div className='flex items-center mb-4'>
              <div className='w-full'>
                <div className='flex items-center mb-3'>
                  <li className='bg-yellow-300 flex rounded-lg mr-2 p-1 cursor-pointer border'>
                    <p className='mx-2'>/GET</p>
                  </li>
                  <input
                    id='email-address'
                    name='busqueda'
                    type='text'
                    value={'https://api-infojobs.hop.sh/api-offers/desarrollo%20Web/1'}
                    required
                    className='w-full flex rounded-md border-2 px-3 py-1 shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6'
                    placeholder='Puesto, empresa o palabra clave'
                  />
                </div>
                <button
                  type='submit'
                  className='w-full rounded-md bg-[#2088c2] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#4993bc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2088c2]'
                >
                  Buscar
                </button>
              </div>
            </div>
            <div className='flex'>
              <div className='w-[20%] h-[250px] mt-1 text-center overflow-y-auto'>
                <ul>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#trabajoProvincia'>Trabajo por Provincia</a>
                  </li>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#trabajoCiudades'>Trabajo por Ciudades</a>
                  </li>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#construirBusqueda'>Teletrabajo</a>
                  </li>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#construirBusqueda'>Palabras Claves</a>
                  </li>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#construirBusqueda'>Construir Búsqueda</a>
                  </li>
                </ul>
              </div>
              <textarea className='w-full ml-3 bg-gray-300 border-2 border-black'></textarea>
            </div>
          </section>

          <section id='trabajoCiudades' className='border border-gray-500 p-2 m-5 text-center rounded-lg'>
            <h1 className='underline underline-offset-4 font-bold text-2xl mb-4'>Trabajo Ciudades</h1>
            <div className='flex items-center mb-4'>
              <div className='w-full'>
                <div className='flex items-center mb-3'>
                  <li className='bg-yellow-300 flex rounded-lg mr-2 p-1 cursor-pointer border'>
                    <p className='mx-2'>/GET</p>
                  </li>
                  <input
                    id='email-address'
                    name='busqueda'
                    type='text'
                    value={'https://api-infojobs.hop.sh/api-offers/desarrollo%20Web/1'}
                    required
                    className='w-full flex rounded-md border-2 px-3 py-1 shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6'
                    placeholder='Puesto, empresa o palabra clave'
                  />
                </div>
                <button
                  type='submit'
                  className='w-full rounded-md bg-[#2088c2] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#4993bc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2088c2]'
                >
                  Buscar
                </button>
              </div>
            </div>
            <div className='flex'>
              <div className='w-[20%] h-[250px] mt-1 text-center overflow-y-auto'>
                <ul>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#trabajoProvincia'>Trabajo por Provincia</a>
                  </li>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#trabajoCiudades'>Trabajo por Ciudades</a>
                  </li>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#construirBusqueda'>Teletrabajo</a>
                  </li>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#construirBusqueda'>Palabras Claves</a>
                  </li>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#construirBusqueda'>Construir Búsqueda</a>
                  </li>
                </ul>
              </div>
              <textarea className='w-full ml-3 bg-gray-300 border-2 border-black'></textarea>
            </div>
          </section>

          <section id='teletrabajo' className='border border-gray-500 p-2 m-5 text-center rounded-lg'>
            <h1 className='underline underline-offset-4 font-bold text-2xl mb-4'>Teletrabajo</h1>
            <div className='flex items-center mb-4'>
              <div className='w-full'>
                <div className='flex items-center mb-3'>
                  <li className='bg-yellow-300 flex rounded-lg mr-2 p-1 cursor-pointer border'>
                    <p className='mx-2'>/GET</p>
                  </li>
                  <input
                    id='email-address'
                    name='busqueda'
                    type='text'
                    value={'https://api-infojobs.hop.sh/api-offers/desarrollo%20Web/1'}
                    required
                    className='w-full flex rounded-md border-2 px-3 py-1 shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6'
                    placeholder='Puesto, empresa o palabra clave'
                  />
                </div>
                <button
                  type='submit'
                  className='w-full rounded-md bg-[#2088c2] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#4993bc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2088c2]'
                >
                  Buscar
                </button>
              </div>
            </div>
            <div className='flex'>
              <div className='w-[20%] h-[250px] mt-1 text-center overflow-y-auto'>
                <ul>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#trabajoProvincia'>Trabajo por Provincia</a>
                  </li>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#trabajoCiudades'>Trabajo por Ciudades</a>
                  </li>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#construirBusqueda'>Teletrabajo</a>
                  </li>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#construirBusqueda'>Palabras Claves</a>
                  </li>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#construirBusqueda'>Construir Búsqueda</a>
                  </li>
                </ul>
              </div>
              <textarea className='w-full ml-3 bg-gray-300 border-2 border-black'></textarea>
            </div>
          </section>

          <section id='categoriaTrabajos' className='border border-gray-500 p-2 m-5 text-center rounded-lg'>
            <h1 className='font-bold text-2xl mb-4'>Categoria Trabajos</h1>
            <div className='flex items-center mb-4'>
              <div className='w-full'>
                <div className='flex items-center mb-3'>
                  <li className='bg-yellow-300 flex rounded-lg mr-2 p-1 cursor-pointer border'>
                    <p className='mx-2'>/GET</p>
                  </li>
                  <input
                    id='email-address'
                    name='busqueda'
                    type='text'
                    value={'https://api-infojobs.hop.sh/api-offers/desarrollo%20Web/1'}
                    required
                    className='w-full flex rounded-md border-2 px-3 py-1 shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6'
                    placeholder='Puesto, empresa o palabra clave'
                  />
                </div>
                <button
                  type='submit'
                  className='w-full rounded-md bg-[#2088c2] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#4993bc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2088c2]'
                >
                  Buscar
                </button>
              </div>
            </div>
            <div className='flex'>
              <div className='w-[20%] h-[250px] mt-1 text-center overflow-y-auto'>
                <ul>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#trabajoProvincia'>Trabajo por Provincia</a>
                  </li>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#trabajoCiudades'>Trabajo por Ciudades</a>
                  </li>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#construirBusqueda'>Teletrabajo</a>
                  </li>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#construirBusqueda'>Palabras Claves</a>
                  </li>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#construirBusqueda'>Construir Búsqueda</a>
                  </li>
                </ul>
              </div>
              <textarea className='w-full ml-3 bg-gray-300 border-2 border-black'></textarea>
            </div>
          </section>

          <section id='educacionporTrabajo' className='border border-gray-500 p-2 m-5 text-center rounded-lg'>
            <h1 className='font-bold text-2xl mb-4'>Educacion Por Trabajo</h1>
            <div className='flex items-center mb-4'>
              <div className='w-full'>
                <div className='flex items-center mb-3'>
                  <li className='bg-yellow-300 flex rounded-lg mr-2 p-1 cursor-pointer border'>
                    <p className='mx-2'>/GET</p>
                  </li>
                  <input
                    id='email-address'
                    name='busqueda'
                    type='text'
                    value={'https://api-infojobs.hop.sh/api-offers/desarrollo%20Web/1'}
                    required
                    className='w-full flex rounded-md border-2 px-3 py-1 shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6'
                    placeholder='Puesto, empresa o palabra clave'
                  />
                </div>
                <button
                  type='submit'
                  className='w-full rounded-md bg-[#2088c2] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#4993bc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2088c2]'
                >
                  Buscar
                </button>
              </div>
            </div>
            <div className='flex'>
              <div className='w-[20%] h-[250px] mt-1 text-center overflow-y-auto'>
                <ul>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#trabajoProvincia'>Trabajo por Provincia</a>
                  </li>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#trabajoCiudades'>Trabajo por Ciudades</a>
                  </li>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#construirBusqueda'>Teletrabajo</a>
                  </li>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#construirBusqueda'>Palabras Claves</a>
                  </li>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#construirBusqueda'>Construir Búsqueda</a>
                  </li>
                </ul>
              </div>
              <textarea className='w-full ml-3 bg-gray-300 border-2 border-black'></textarea>
            </div>
          </section>

          <section id='jornadaLavoral' className='border border-gray-500 p-2 m-5 text-center rounded-lg'>
            <h1 className='font-bold text-2xl mb-4'>Jornada Lavoral</h1>
            <div className='flex items-center mb-4'>
              <div className='w-full'>
                <div className='flex items-center mb-3'>
                  <li className='bg-yellow-300 flex rounded-lg mr-2 p-1 cursor-pointer border'>
                    <p className='mx-2'>/GET</p>
                  </li>
                  <input
                    id='email-address'
                    name='busqueda'
                    type='text'
                    value={'https://api-infojobs.hop.sh/api-offers/desarrollo%20Web/1'}
                    required
                    className='w-full flex rounded-md border-2 px-3 py-1 shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6'
                    placeholder='Puesto, empresa o palabra clave'
                  />
                </div>
                <button
                  type='submit'
                  className='w-full rounded-md bg-[#2088c2] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#4993bc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2088c2]'
                >
                  Buscar
                </button>
              </div>
            </div>
            <div className='flex'>
              <div className='w-[20%] h-[250px] mt-1 text-center overflow-y-auto'>
                <ul>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#trabajoProvincia'>Trabajo por Provincia</a>
                  </li>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#trabajoCiudades'>Trabajo por Ciudades</a>
                  </li>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#construirBusqueda'>Teletrabajo</a>
                  </li>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#construirBusqueda'>Palabras Claves</a>
                  </li>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#construirBusqueda'>Construir Búsqueda</a>
                  </li>
                </ul>
              </div>
              <textarea className='w-full ml-3 bg-gray-300 border-2 border-black'></textarea>
            </div>
          </section>

          <section id='tipoDeContrato' className='border border-gray-500 p-2 m-5 text-center rounded-lg'>
            <h1 className='font-bold text-2xl mb-4'>Tipo De Contrato</h1>
            <div className='flex items-center mb-4'>
              <div className='w-full'>
                <div className='flex items-center mb-3'>
                  <li className='bg-yellow-300 flex rounded-lg mr-2 p-1 cursor-pointer border'>
                    <p className='mx-2'>/GET</p>
                  </li>
                  <input
                    id='email-address'
                    name='busqueda'
                    type='text'
                    value={'https://api-infojobs.hop.sh/api-offers/desarrollo%20Web/1'}
                    required
                    className='w-full flex rounded-md border-2 px-3 py-1 shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6'
                    placeholder='Puesto, empresa o palabra clave'
                  />
                </div>
                <button
                  type='submit'
                  className='w-full rounded-md bg-[#2088c2] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#4993bc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2088c2]'
                >
                  Buscar
                </button>
              </div>
            </div>
            <div className='flex'>
              <div className='w-[20%] h-[250px] mt-1 text-center overflow-y-auto'>
                <ul>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#trabajoProvincia'>Trabajo por Provincia</a>
                  </li>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#trabajoCiudades'>Trabajo por Ciudades</a>
                  </li>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#construirBusqueda'>Teletrabajo</a>
                  </li>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#construirBusqueda'>Palabras Claves</a>
                  </li>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#construirBusqueda'>Construir Búsqueda</a>
                  </li>
                </ul>
              </div>
              <textarea className='w-full ml-3 bg-gray-300 border-2 border-black'></textarea>
            </div>
          </section>

          <section id='trabajoPorPaises' className='border border-gray-500 p-2 m-5 text-center rounded-lg'>
            <h1 className='font-bold text-2xl mb-4'>Trabajo Por Paises</h1>
            <div className='flex items-center mb-4'>
              <div className='w-full'>
                <div className='flex items-center mb-3'>
                  <li className='bg-yellow-300 flex rounded-lg mr-2 p-1 cursor-pointer border'>
                    <p className='mx-2'>/GET</p>
                  </li>
                  <input
                    id='email-address'
                    name='busqueda'
                    type='text'
                    value={'https://api-infojobs.hop.sh/api-offers/desarrollo%20Web/1'}
                    required
                    className='w-full flex rounded-md border-2 px-3 py-1 shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6'
                    placeholder='Puesto, empresa o palabra clave'
                  />
                </div>
                <button
                  type='submit'
                  className='w-full rounded-md bg-[#2088c2] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#4993bc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2088c2]'
                >
                  Buscar
                </button>
              </div>
            </div>
            <div className='flex'>
              <div className='w-[20%] h-[250px] mt-1 text-center overflow-y-auto'>
                <ul>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#trabajoProvincia'>Trabajo por Provincia</a>
                  </li>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#trabajoCiudades'>Trabajo por Ciudades</a>
                  </li>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#construirBusqueda'>Teletrabajo</a>
                  </li>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#construirBusqueda'>Palabras Claves</a>
                  </li>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#construirBusqueda'>Construir Búsqueda</a>
                  </li>
                </ul>
              </div>
              <textarea className='w-full ml-3 bg-gray-300 border-2 border-black'></textarea>
            </div>
          </section>

          <section id='palabrasClaves' className='border border-gray-500 p-2 m-5 text-center rounded-lg'>
            <h1 className='font-bold text-2xl mb-4'>Palabras Claves</h1>
            <div className='flex items-center mb-4'>
              <div className='w-full'>
                <div className='flex items-center mb-3'>
                  <li className='bg-yellow-300 flex rounded-lg mr-2 p-1 cursor-pointer border'>
                    <p className='mx-2'>/GET</p>
                  </li>
                  <input
                    id='email-address'
                    name='busqueda'
                    type='text'
                    value={'https://api-infojobs.hop.sh/api-offers/desarrollo%20Web/1'}
                    required
                    className='w-full flex rounded-md border-2 px-3 py-1 shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6'
                    placeholder='Puesto, empresa o palabra clave'
                  />
                </div>
                <button
                  type='submit'
                  className='w-full rounded-md bg-[#2088c2] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#4993bc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2088c2]'
                >
                  Buscar
                </button>
              </div>
            </div>
            <div className='flex'>
              <div className='w-[20%] h-[250px] mt-1 text-center overflow-y-auto'>
                <ul>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#trabajoProvincia'>Trabajo por Provincia</a>
                  </li>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#trabajoCiudades'>Trabajo por Ciudades</a>
                  </li>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#construirBusqueda'>Teletrabajo</a>
                  </li>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#construirBusqueda'>Palabras Claves</a>
                  </li>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#construirBusqueda'>Construir Búsqueda</a>
                  </li>
                </ul>
              </div>
              <textarea className='w-full ml-3 bg-gray-300 border-2 border-black'></textarea>
            </div>
          </section>

          <section id='construirBusqueda' className='border border-gray-500 p-2 m-5 text-center rounded-lg'>
            <h1 className='font-bold text-2xl mb-4'>Construir Busqueda</h1>
            <div className='flex items-center mb-4'>
              <div className='w-full'>
                <div className='flex items-center mb-3'>
                  <li className='bg-yellow-300 flex rounded-lg mr-2 p-1 cursor-pointer border'>
                    <p className='mx-2'>/GET</p>
                  </li>
                  <input
                    id='email-address'
                    name='busqueda'
                    type='text'
                    value={'https://api-infojobs.hop.sh/api-offers/desarrollo%20Web/1'}
                    required
                    className='w-full flex rounded-md border-2 px-3 py-1 shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6'
                    placeholder='Puesto, empresa o palabra clave'
                  />
                </div>
                <button
                  type='submit'
                  className='w-full rounded-md bg-[#2088c2] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#4993bc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2088c2]'
                >
                  Buscar
                </button>
              </div>
            </div>
            <div className='flex'>
              <div className='w-[20%] h-[250px] mt-1 text-center overflow-y-auto'>
                <ul>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#trabajoProvincia'>Trabajo por Provincia</a>
                  </li>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#trabajoCiudades'>Trabajo por Ciudades</a>
                  </li>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#construirBusqueda'>Teletrabajo</a>
                  </li>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#construirBusqueda'>Palabras Claves</a>
                  </li>
                  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-1 cursor-pointer border border-gray-400'>
                    <a href='#construirBusqueda'>Construir Búsqueda</a>
                  </li>
                </ul>
              </div>
              <textarea className='w-full ml-3 bg-gray-300 border-2 border-black'></textarea>
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