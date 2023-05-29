import React, { useState, useEffect } from 'react';
import { Menu, Transition } from '@headlessui/react'
import { RiNotification3Fill } from 'react-icons/ri';
import { fetchData, fetchDataJobs } from '../data/fetchData'
import { useRouter } from 'next/router';
import Link from 'next/link'


const Headers = () => {

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [searchData, setSearchData] = useState(null);

  const router = useRouter();

  const data = async (type) => {
    if (type.length > 0) {
      const apiData = await fetchData(type);
      const newSuggestions = apiData.map((e) => e.value);
      setSuggestions(newSuggestions);
    }
  }

  const suggestedText = (value) => {
    //console.log(value);
    setSearchValue(value);
    setSuggestions([])
  }

  const search = async () => {
    const formattedSearchValue = searchValue.replace(/ /g, "%20");
    const searchData = await fetchDataJobs(formattedSearchValue);
    setSearchData(searchData);

    const queryParams = new URLSearchParams();
    queryParams.append('searchData', JSON.stringify(searchData));

    const url = new URL('/JobOffers', window.location.href);
    url.search = queryParams.toString();

    router.push(url.toString());
  };


  const renderSuggestions = () => {

    if (searchValue == "") {
      return null
    }

    if (suggestions.length === 0 && searchValue !== "") {
      return null
    }

    return (
      <div className="relative mt-2 ">
        <ul id='items' className="overflow-y-auto h-[150px] absolute left-0 w-full bg-white rounded-md border border-gray-300 divide-y divide-gray-200 cursor-pointer">
          {suggestions.map((item) => (
            <li key={item} onClick={() => suggestedText(item)} className="px-4 py-2 hover:bg-gray-100">
              <button >{item}</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (

    <div className="flex flex-col md:flex-row bg-gray-100 justify-between px-4 pt-2">
      <div className="w-full md:w-[50%]">
        <div className="my-3 h-[90px] ">
          <img className="w-full h-full" src="https://tpc.googlesyndication.com/simgad/9279042036256268657" alt="" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full md:w-[30%] bg-white rounded-lg my-3 items-center justify-between">
        <div className="ml-2 flex-wrap w-full md:max-w-md mr-2">
          <label className="text-sm flex-1 ml-2">Busco ofertas de...</label>

          <div className="flex flex-wrap items-center w-full max-w-md gap-x-2">
            {/* Input field */}
            <input
              autoComplete="off"
              id="busqueda"
              type="text"
              required
              value={searchValue}
              className="min-w-0 flex-1 rounded-md border-2 px-3.5 py-1 shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6"
              placeholder="Puesto, empresa o palabra clave"
              onChange={(event) => {
                data(event.target.value);
                setSearchValue(event.target.value);
              }}
            />

            {/* Search button */}
            <button
              type="submit"
              className="flex-none rounded-md bg-[#2088c2] px-5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-[#4993bc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2088c2] flex-shrink-0"
              onClick={() => {
                search();
              }}
            >
              Buscar
            </button>
          </div>

          {renderSuggestions()}
        </div>
      </div>


      <div className="flex bg-white rounded-lg my-3 p-2 items-center justify-center">
        <div className="flex items-center">
          <RiNotification3Fill className="h-7 w-7 ml-1 text-gray-300" aria-hidden="true" />
        </div>

        <div className="flex items-center ml-2">
          {/* User menu */}
          <Menu as="div" className="relative">
            <div>
              <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://avatars.githubusercontent.com/u/54044345?v=4"
                  alt=""
                />
              </Menu.Button>
            </div>

            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <Link href="/profile">
                      <p className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                        Tu Perfil
                      </p>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      Cerrar Sesión
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>


  )
}

export default Headers;
