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

const SapUi = ({ SapUiData }) => {


  return (
    <>
      <div id='sapui' className='w-full p-2 py-10 -mb-12 md:hidden lg:hidden block'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>

          <div className='grid grid-cols-1 gap-8'>

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

              {SapUiData && SapUiData.map((list, index) => (

                <SwiperSlide className='' key={index}>
                  <div className='p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className=''>
                      <div className='m-auto'>
                        <Image width={"1000"} height={"1000"} src={list.imageUrl} className='w-full' alt='/' />
                      </div>
                    </div>
                    <div className='flex flex-col items-center justify-center my-4'>
                      <h3>{list.title}</h3>
                      <p className='my-2 text-sm text-justify'>{list.short_description.substring(0, 300)}</p>
                    </div>
                  </div>
                </SwiperSlide>

              ))
              }
            </Swiper>
          </div>
        </div>
      </div>


    </>
  )
}
export default SapUi;
