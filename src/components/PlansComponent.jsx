"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import Image from 'next/image';
// import required modules
import { Autoplay, Grid, Pagination } from 'swiper/modules';
import { TiTick } from 'react-icons/ti';

const PlansComponent = () => {


  return (
    <>

      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 1,
          },
          639: {
            slidesPerView: 1,
          },
          865: {
            slidesPerView: 1
          },
          1000: {
            slidesPerView: 1
          },
          1500: {
            slidesPerView: 1
          },
          1700: {
            slidesPerView: 1
          }
        }}
        slidesPerView={10}
        spaceBetween={20}
        grid={{
          rows: 0,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Grid]}
        className="mySwiper"
      >

        <div className='px-4'>
          <SwiperSlide className='px-2'>
            <div className='p-4 rounded-2xl hover:scale-105 ease-in duration-300 flex flex-col hover:border-[#75EAE2] border-2'>
              <div className='md:border-b-[1px] md:w-full'>
                <h3 className='md:text-lg'>Basic</h3>
              </div>

              <div className='m-auto md:p-2 md:my-6 my-4 flex-1'>
                <ul class="list-disc-none">
                  <li className='md:flex flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs text-xs'>{`Student Information System - SIS`}</span></li>
                  <li className='md:flex flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs text-xs'>{`Teachers and Student app`}</span></li>
                  <li className='md:flex flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs text-xs'>{`Classroom management`}</span></li>
                  <li className='md:flex flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs text-xs'>{`Unlimited two-way live class and recording`}</span></li>
                  <li className='md:flex flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs text-xs'>{`Communication`}</span></li>
                  <li className='md:flex flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs text-xs'>{`Assessments`}</span></li>
                  <li className='md:flex flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs text-xs'>{`Homework`}</span></li>
                  <li className='md:flex flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs text-xs'>{`Study materials`}</span></li>
                  <li className='md:flex flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs text-xs'>{`Teacher-Student chat`}</span></li>
                  <li className='md:flex flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs text-xs'>{`Admin dashboard -Single access`}</span></li>
                </ul>
              </div>

              <button type="button" className="md:w-full hover:scale-105 ease-in duration-100 text-white items-start bg-[#152C4E] focus:ring-4 font-medium mb-2 capitalize dark:focus:ring-[#152C4E] px-6 py-2 text-[14px]">{"GET STARTED ->"} </button>

            </div>
          </SwiperSlide>

          <SwiperSlide className='px-2'>
            <div className='hover:border-[#75EAE2] border-2 flex flex-col p-4 rounded-2xl hover:scale-105 ease-in duration-300 bg-gradient-to-r from-[#FFFFFF] from-15% to-[#75EAE2] to-100%'>
              <div className='md:border-b-[1px] md:w-full'>
                <h3 className='md:text-lg'>Advanced</h3>
              </div>

              <div className='m-auto md:p-2 md:my-6 my-4 flex-1'>
                <ul class="list-disc-none">
                  <li className='md:flex flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs text-xs'>{`Fee management`}</span></li>
                  <li className='md:flex flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs text-xs'>{`Customer fee reports`}</span></li>
                  <li className='md:flex flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs text-xs'>{`Expense management`}</span></li>
                  <li className='md:flex flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs text-xs'>{`Admission management`}</span></li>
                  <li className='md:flex flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs text-xs'>{`ID card`}</span></li>
                  <li className='md:flex flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs text-xs'>{`Website buidler`}</span></li>
                  <li className='md:flex flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs text-xs'>{`Student & Staff attendance tracking`}</span></li>
                  <li className='md:flex flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs text-xs'>{`Certificate generator`}</span></li>
                  <li className='md:flex flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs text-xs'>{`Transport management`}</span></li>
                  <li className='md:flex flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs text-xs'>{`Library management`}</span></li>
                  <li className='md:flex flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs text-xs'>{`Website buidler`}</span></li>
                  <li className='md:flex flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs text-xs'>{`Hostel management`}</span></li>
                  <li className='md:flex flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs text-xs'>{`Inventory management`}</span></li>
                  <li className='md:flex flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs text-xs'>{`Yearly calendar`}</span></li>
                  <li className='md:flex flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs text-xs'>{`Admit card`}</span></li>
                </ul>
              </div>

              <button type="button" className="md:w-full hover:scale-105 ease-in duration-100 text-white items-start bg-[#152C4E] focus:ring-4 font-medium mb-2 capitalize dark:focus:ring-[#152C4E] px-6 py-2 text-[14px]">{"GET STARTED ->"} </button>

            </div>
          </SwiperSlide>

          <SwiperSlide className='px-2'>
            <div className='p-4  rounded-2xl hover:scale-105 ease-in duration-300 flex flex-col hover:border-[#75EAE2] border-2 '>
              <div className='md:border-b-[1px] md:w-full'>
                <h3 className='md:text-lg'>Pro</h3>
              </div>

              <div className='m-auto md:p-2 md:my-6 my-4 flex-1'>
                <ul class="list-disc-none">
                  <li className='md:flex flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs text-xs'>{`Everything in the advanced plan`}</span></li>
                  <li className='md:flex flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs text-xs'>{`Automated timetable`}</span></li>
                  <li className='md:flex flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs text-xs'>{`Report card`}</span></li>
                </ul>
              </div>

              <button type="button" className="md:w-full hover:scale-105 ease-in duration-100 text-white items-start bg-[#152C4E] focus:ring-4 font-medium mb-2 capitalize dark:focus:ring-[#152C4E] px-6 py-2 text-[14px]">{"GET STARTED ->"} </button>

            </div>
          </SwiperSlide>
        </div>

      </Swiper>


    </>
  )
}
export default PlansComponent;
