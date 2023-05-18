import React from 'react'
import { BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs';
import { Menu, Transition } from '@headlessui/react'
import { RiNotification3Fill } from 'react-icons/ri';
import Link from 'next/link'
const Headers = () => {

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (

    <div className='flex bg-gray-100 justify-between px-4 pt-2'>
      <div className='my-3 w-[50%] h-[90px] '>
        <img className='w-full h-full' src="https://tpc.googlesyndication.com/simgad/9279042036256268657" alt="" />
      </div>

      <li className='flex w-[35%] bg-white rounded-lg my-3 items-center justify-between'>
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
              className="flex-none rounded-md bg-[#2088c2] px-5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-[#4993bc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2088c2]"
            >
              Buscar
            </button>
          </div>
        </div>
      </li>

      <li className='flex bg-white rounded-lg my-3 p-2 items-center justify-center'>
        <div className="flex items-center ">
          <RiNotification3Fill className="h-7 w-7 ml-1 text-gray-300 " aria-hidden="true" />
        </div>

        <div className="flex items-center  justify-between">
          <Menu as="div" className="relative ml-5">
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
                      <p className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')} >
                        Tu Perfil
                      </p>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link href="/settings">
                      <p className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                        Configuraciones
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
                      Sign out
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </li>


    </div>
  )
}


export default Headers