"use client";
import Image from 'next/image';
import React from 'react'

const ServiceComponent = () => {
    return (
        <>
            <section className="pt-10 pb-5 lg:pt-[20px] lg:pb-[40px] py-10">
                <div className="container">

                    <div className="md:grid grid-cols-3 gap-20">

                        <div className="">

                            <Image width={"1000"} height={"1000"} src={"../assets/images/home-banner/servicenew.png"} className='w-full object-cover' alt='/' />

                        </div>

                        <div className="md:col-span-2">
                            <div className="-mx-4 flex flex-wrap">
                                <div className="w-full px-4">

                                    <div className="mx-auto mb-12 max-w-[100%] text-center lg:mb-10 mt-2">
                                        <h2 className="font-bold md:text-[20px] text-[16px] leading-[44px] md:leading-[52px] md:text-heading-3 text-left ml-8 md:mb-[60px] lg:mb-[5px]">OUR SERVICES</h2>
                                        <h2 className="font-bold md:text-4xl text-2xl text-[#202124] mb-[50px] text-left ml-8">We Served as your wish for success
                                        </h2>
                                    </div>

                                </div>
                            </div>
                            <div className="-mx-4 grid grid-cols-3 px-4">

                                <div className="w-full px-4">
                                    <div className="mb-8 rounded-[20px] bg-white">
                                        <div className="bg-primary mb-1 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">

                                            <Image width={"1000"} height={"1000"} src={"../assets/images/servicen1.png"} className='object-cover w-32' alt='/' />

                                        </div>
                                        <h4 className="text-dark mb-3 text-sm font-semibold">
                                            Software Development
                                        </h4>
                                        <p className="text-body-color text-xs">
                                            Custom software solutions for seamless business operations.
                                        </p>
                                        <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full px-4">
                                    <div className="mb-8 rounded-[20px] bg-white">
                                        <div className="bg-primary mb-1 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">

                                            <Image width={"1000"} height={"1000"} src={"../assets/images/servicen2.png"} className='object-cover w-32' alt='/' />

                                        </div>
                                        <h4 className="text-dark mb-3 text-sm font-semibold">
                                            Web Development
                                        </h4>
                                        <p className="text-body-color text-xs">
                                            Crafting captivating and functional websites tailored to your brand.
                                        </p>
                                        <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full px-4">
                                    <div className="mb-8 rounded-[20px] bg-white">
                                        <div className="bg-primary mb-1 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">

                                            <Image width={"1000"} height={"1000"} src={"../assets/images/servicen3n.png"} className='object-cover w-32' alt='/' />

                                        </div>
                                        <h4 className="text-dark mb-3 text-sm font-semibold">Mobile App Development</h4>
                                        <p className="text-body-color text-xs">
                                            Creating innovative mobile applications that set your business apart.
                                        </p>
                                        <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full px-4">
                                    <div className="mb-8 rounded-[20px] bg-white">
                                        <div className="bg-primary mb-1 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">

                                            <Image width={"1000"} height={"1000"} src={"../assets/images/servicen3.png"} className='object-cover w-32' alt='/' />

                                        </div>
                                        <h4 className="text-dark mb-3 text-sm font-semibold">IT Staffing</h4>
                                        <p className="text-body-color text-xs">
                                            Crafting captivating and functional websites tailored to your brand.
                                        </p>
                                        <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full px-4">
                                    <div className="mb-8 rounded-[20px] bg-white">
                                        <div className="bg-primary mb-1 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">

                                            <Image width={"1000"} height={"1000"} src={"../assets/images/servicen5.png"} className='object-cover w-32' alt='/' />

                                        </div>
                                        <h4 className="text-dark mb-3 text-sm font-semibold">
                                            SAP Payroll Management Tool
                                        </h4>
                                        <p className="text-body-color text-xs">
                                            Crafting captivating and functional websites tailored to your brand.
                                        </p>
                                        <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full px-4">
                                    <div className="mb-8 rounded-[20px] bg-white">
                                        <div className="bg-primary mb-1 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">

                                            <Image width={"1000"} height={"1000"} src={"../assets/images/servicen6.png"} className='object-cover w-32' alt='/' />

                                        </div>
                                        <h4 className="text-dark mb-3 text-sm font-semibold">Digital Marketing Services</h4>
                                        <p className="text-body-color text-xs">
                                            Enhance your online presence and drive success through digital marketing strategies.
                                        </p>
                                        <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
                <div className='hidden md:block'>
            {/* <div className='mx-auto md:max-w-6xl md:w-full container mt-10'>
               <div className='md:grid grid-cols-2 md:my-20'>
                  <div className="rounded-lg">
                     <Image width={"1000"} height={"1000"} src={"/assets/images/sapsolution-circule.png"} className='' alt='slris' />
                  </div>

                  <div className='mb-8 px-12'>
                     <div className='content-start md:mt-24'>
                        <h2 className="font-bold md:text-2xl text-2xl text-black text-left py-4">{"Streamline your Workload"}</h2>
                        <p className='md:py-2 py-2 text-gray-600 text-justify md:text-sm'>
                           {`Our comprehensive solution is designed to streamline your workload effectively. With our
              services, you can effortlessly tackle payroll data conversion, ensuring a seamless transition.
              Importing legacy payroll results and year-end adjustments becomes a breeze, reducing
              complexity and saving valuable time. We simplify bonus payments and make it hassle-free.
              Exporting payroll master data is made efficient, and uploading benefits deductions is a
              straightforward process. Embrace our services to optimize your workflow and enhance
              productivity.`}
                        </p>
                     </div>
                  </div>
               </div>
            </div> */}

            <div className='mx-auto md:max-w-6xl md:w-full container'>
               <div className='md:grid grid-cols-2 md:my-10'>

                  <div className='mb-8 px-12'>
                     <div className='content-start md:mt-4'>
                        <h2 className="font-bold md:text-2xl text-2xl text-black text-left py-4">{"IT Consulting Services"}</h2>
                        <p className='md:py-2 py-2 text-gray-600 text-justify md:text-sm'>
                           {`Great Businesses set the vision for a better future and the right innovation partner will get you there. We are the experts in Technology and can collaborate with your business experts to develop a successful project plan. We help build the roadmap out a Business Strategy by analyzing their current state of IT, present IT trends, and help make decisions regarding their Technology needs and decision making. We will be available 24/7 if you want to try us to make that difference.`}
                        </p>
                     </div>
                  </div>

                  <div className="rounded-lg">
                     <Image width={"1000"} height={"1000"} src={"/assets/images/consultant.jpg"} className='' alt='slris' />
                  </div>

               </div>
            </div>

            <div className='mx-auto md:max-w-6xl md:w-full container mt-10'>
               <div className='md:grid grid-cols-2 md:my-20'>

                  <div className="rounded-lg flex justify-center">
                     <Image width={"1000"} height={"1000"} src={"/assets/images/stremming.png"} className='md:w-[400px]' alt='slris' />
                  </div>

                  <div className='mb-8 px-12'>
                     <div className='content-start md:mt-4'>
                        <h2 className="font-bold md:text-2xl text-2xl text-black text-left py-4 mt-10">{"Streamline School Management with Techno Trek Edumatic"}</h2>
                        <p className='md:py-2 py-2 text-gray-600 text-justify md:text-sm'>
                           {`Discover Techno Trek Edumatic's comprehensive suite of education management solutions,
designed to enhance school operations and elevate the learning experience. Our Learning
Management System (LMS) introduces interactivity and engagement to education, while our
robust Assessment tools provide real-time insights into student performance, empowering
informed decision-making.`}
                        </p>
                     </div>
                  </div>

               </div>
            </div>
         </div>
            </section>
        </>
    )
}
export default ServiceComponent;
