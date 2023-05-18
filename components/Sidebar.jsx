import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { RxBarChart } from 'react-icons/rx'
import { AiFillApi, AiOutlineMail, AiOutlineEye  } from "react-icons/ai";
import { FaSearchengin } from "react-icons/fa";
import { BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs';

const Sidebar = ({ children }) => {

    return (
        <div className='flex  '>
            <div className='fixed w-20 h-screen-4 p-4 h-full bg-white border-r-[1px] flex flex-col justify-between'>
                <div className='flex flex-col items-center '>
                    <Link href='/'>
                        <div className='p-3 rounded-lg inline-block svg-container'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 138 137" style={{ width: '40px', height: '40px' }}>
                                <path
                                    d="M138 112.968c0 12.75-10.335 23.086-23.085 23.086h-91.83C10.336 136.054 0 125.719 0 112.968V23.086C0 10.336 10.336 0 23.085 0h91.83C127.665 0 138 10.336 138 23.086v89.882z"
                                    style={{ fill: '#2088c2' }}
                                ></path>
                                <path d="M57.905 89.323c-.083.749-.748 1.247-1.493 1.247H45.344c-.664 0-1.251-.416-1.251-1.082l.082-.166 7.052-59.253c.085-.666.217-1.004.968-1.087h12.098c.581 0 .914.415.914.997v.166l-7.302 59.178zM86.169 91.298c-1.58 12.898-9.654 15.892-19.39 15.892-5.741 0-6.491-.249-7.988-.415-.748-.085-1.497-.167-1.497-1.332v-.415l.582-4.825c.166-1.415.748-1.662 1.996-1.662 1.165-.083 2.748-.083 4.493-.167 4.325-.248 7.323-.582 8.072-6.743l7.569-61.603c.086-.665.668-1.081 1.416-1.163l11.314.119h.168c.664 0 1.001.415 1.001.998"
                                    style={{ fill: '#ffffff' }}
                                ></path>
                            </svg>
                        </div>
                    </Link>
                    <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
                    <Link href="/anality">
                        <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                            <RxBarChart size={20} />
                        </div>
                    </Link>
                    <Link href="/JobOffers">
                        <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                            <FaSearchengin size={20} />
                        </div>
                    </Link>
                    <Link href="/application">
                        <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                            <AiOutlineMail size={20} />
                        </div>
                    </Link>
                    <Link href="/viewProfile">
                        <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                            <AiOutlineEye size={20} />
                        </div>
                    </Link>
                    <Link href="/urlApi">
                        <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                            <AiFillApi size={20} />
                        </div>
                    </Link>
                </div>
                <li className='flex rounded-lg items-center justify-center'>
                    <div className="justify-center">
                        <h2> 
                            <p className='flex'> <BsFacebook className=' text-blue-600' /> <BsTwitter className='ml-2 text-blue-400' /> <BsYoutube className='ml-2 text-red-500' /></p></h2>
                    </div>
                </li>
            </div>
            <main className='ml-20 w-full'>{children} </main>
        </div>
    )
}

export default Sidebar