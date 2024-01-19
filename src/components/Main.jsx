"use client";
import Link from 'next/link';
import React from 'react';
import AdvertiseLogo from "/public/assets/images/home-banner/advertising.png";
import Image from 'next/image';

const Main = ({ bannerBg, bgTitle, bgTitle1, bgTitle2, content, type, className, buttonContent }) => {
  return (

    <>

      <div id='home' className={`w-full md:bg-no-repeat bg-cover text-center ` + className} >
        <div className='md:max-w-[1240px] w-full mx-auto md:p-16 p-2 pt-8 flex justify-start items-center'>
          <div className='md:mt-24 mt-8'>
            {/* <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p> */}
            {type && type == 1 || type == 2 ?
            
            <div className='md:ml-10'>
                <div className='md:mt-2 mt-5 text-left md:text-center'>
                  <h2 className='text-[#152C4E] md:text-4xl text-[16px]'>
                    {"Development,"} <span className='text-[#152C4E]'> {"Staffing"} </span>
                  </h2>
                  <h2 className='md:py-2 text-[#152C4E] md:ml-48 md:text-4xl -mt-3 md:mt-2 text-[16px]'>{"and Marketing"}</h2>
                  <p className='md:hidden block md:py-4 text-[#202124] sm:max-w-[70%] mx-auto md:font-semibold text-xs md:text-[14px]'>
                    Transform Your Vision into <br /> Reality with Our Expertise <br/> and Exceptional Services
                  </p>
                  <p className='md:block hidden md:py-4 text-[#202124] sm:max-w-[70%] mx-auto md:font-semibold text-xs md:text-[14px]'>
                    Transform Your Vision into Reality with Our Expertise and Exceptional Services
                  </p>
                </div>

                {type && type == 1 &&
                  <div className="hidden md:flex items-center justify-between md:mt-40 max-w-[330px] m-auto py-2 bg-white shadow md:ml-[80px]">
                    <Image src={AdvertiseLogo} className="object-cover md:h-20 h-20 md:w-32 md:rounded-none ml-2" alt='/' />
                    <div className="flex flex-col justify-between leading-normal">
                      
                      <h5 className="text-[14px] tracking-tight text-gray-900 dark:text-white">Accelerated SAP Payroll Solutions</h5>
                      <p className="mt-2 text-[12px] font-normal text-gray-700 dark:text-gray-400">Simplify and streamline your payroll Processes</p>
                    </div>
                  </div>
                }
            </div>

           :"" }

          </div>

        </div>
      </div>

    </>
  );
};

export default Main;
