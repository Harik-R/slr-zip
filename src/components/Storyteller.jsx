"use client";
import Image from 'next/image';
import React from 'react';
import NavLogo from '/public/assets/images/logo.png'

const Storyteller = () => {
  return (
    <>

<div className='hidden md:block'>
            <div className='mx-auto md:max-w-6xl md:w-full container mt-10'>
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
            </div>

            <div className='mx-auto md:max-w-6xl md:w-full container'>
               <div className='md:grid grid-cols-2 md:my-20'>

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

            <div className='mx-auto md:max-w-6xl md:w-full container mt-20'>
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

      
      <div id='about' className='mx-auto md:p-4 w-full bg-no-repeat bg-cover text-center md:bg-[#a3f1ee] md:my-20 my-10 px-4'>
       
        <div className='md:grid md:grid-cols-3 grid-cols-1'>

          <div className="rounded-lg flex justify-center">
            <Image width={"1000"} height={"1000"} src={NavLogo} className='md:w-[50%] md:h-[30%] w-full object-fill md:mt-16' alt='/' />
          </div>

          <div className='md:max-w-[500px]'>
            <h2 className="font-bold md:text-2xl text-2xl text-black text-left py-4">Why Clients Trust Our Expertise and
              Choose to Partner with Us</h2>
            <h6 className='mb-2 text-[#000000] text-justify'>
              {`Techno Trek - Where Trust and Partnership Meet Excellence`}
            </h6>
            <p className='text-[#152C4E] text-justify text-[12px] md:text-[14px] mb-2'>
              {`Embrace the confidence in our proven
                expertise as we turn your vision into reality.
                Our comprehensive range of services paves
                the way for your business's unparalleled
                success. Join our esteemed clients who
                have unlocked their potential and
                partnered with excellence.`}
            </p>
            {/* <button type="button" className="float-left hover:scale-105 ease-in duration-100 text-white bg-[#152C4E] focus:ring-4 font-medium mb-2 capitalize dark:focus:ring-[#152C4E] px-6 py-2 text-[14px]">Get started</button> */}
          </div>

          <div className="rounded-lg flex justify-center">
            <Image width={"1000"} height={"1000"} src={"/assets/images/sap-partner.png"} className='md:w-[50%] md:h-[50%] w-full object-fill md:mt-10' alt='/' />
          </div>

       </div>

      </div>
    </>
  );
};

export default Storyteller;
