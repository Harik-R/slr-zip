"use client";
"use client";
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import NavLogo from '/public/assets/images/logo.png'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { MdAddLocationAlt } from 'react-icons/md';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';

const Footer = () => {
    return (
        <>
            <div className='w-full bg-white text-gray-900 px-2 border-t-[1px] border-gray-400'>
                <div className='md:max-w-[1240px] mx-auto md:grid md:grid-cols-2 grid-cols-1 justify-between mt-10'>

                    <div className='mt-5'>
                        <Link href='/'>
                            <Image
                                src={NavLogo}
                                width='1000'
                                height='1000'
                                alt='/'
                                className='cursor-pointer w-44 mb-5'
                            />
                        </Link>

                        <h6 className='font-bold uppercase mb-1'>{"USA"}</h6>

                        <div className='md:mt-2'>
                            <div className='flex'>
                                <MdAddLocationAlt />
                                <p className='text-[12px] md:ml-1'>535 E.Fernhurst Dr, Katy, TX 77450, USA </p>
                            </div>
                            <div className='flex md:mt-1'>
                                <BiSolidPhoneCall />
                                <p className='text-[12px] md:ml-1'>+1 (281) 940-4627  </p>
                            </div>
                        </div>


                        <h6 className='font-bold uppercase md:mt-4 mb-1 mt-5'>{"INDIA"}</h6>

                        <div className='md:mt-2'>
                            <div className='flex'>
                                <MdAddLocationAlt />
                                <p className='text-[12px] md:ml-1'>Techno Trek Pvt Ltd Hyderabad, India</p>
                            </div>
                            <div className='flex md:mt-1'>
                                <AiOutlineMail />
                                <p className='text-[12px] md:ml-1'>sales.in@technotrek.com </p>
                            </div>
                        </div>

                    </div>

                    <div className='md:mt-3 mt-4'>
                        <h6 className='font-bold uppercase text-center md:mb-2'>{"Quick Links"}</h6>
                        <div className='flex justify-between mx-2'>
                            <div className=''>
                                <ul className='text-[12px]'>
                                    <li className='py-2'>
                                        <Link href="/" >
                                            {"Home"}
                                        </Link>
                                    </li>
                                    <li className='py-1'>
                                        <Link href="/pages/about-us" >
                                            {"About"}
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className=''>
                                <ul className='text-[12px]'>
                                    <li className='py-2'>
                                        <Link href="/pages/services/digital-marketing" >
                                            {"Digital Marketing"}
                                        </Link>
                                    </li>
                                    <li className='py-1'>
                                        <Link href="/pages/services/web-mobile-app" >
                                            {"Web and App Development"}
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className=''>
                                <ul className='text-[12px]'>
                                    <li className='py-2'>
                                        <Link href="/pages/products" >
                                            {"SAP Tool"}
                                        </Link>
                                    </li>
                                    <li className='py-1'>
                                        <Link href="/pages/products/integrated-school" >
                                            {"Edumatic"}
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>

                </div>

                <div className='flex justify-end'>
                    <Link href='/'>
                        <div className='rounded-full shadow-lg bg-gray-900 shadow-gray-900 p-2 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp
                                className='text-white'
                                size={20}
                            />
                        </div>
                    </Link>
                </div>

                <div className='flex flex-col max-w-[1240px] px-2 mb-2 mx-auto justify-between sm:flex-row text-center border-t-[1px] border-gray-400 text-gray-500'>
                    <p className='py-4 text-[12px]'>&copy; Copyright 2024 Techno Treck, All Rights Reserved</p>
                    <div className='flex justify-between pt-4 text-[12px] gap-4'>
                        <p>Terms and Conditions </p>
                        <p>Privacy Policy </p>
                        <p>Refund Policy </p>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Footer;
