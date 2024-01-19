import Contact from '@/components/Contact'
import Image from 'next/image'
import Link from 'next/link'
import { BsPlusCircleFill } from 'react-icons/bs'
import { FaCheck } from 'react-icons/fa'

const page = () => {

    const studentreport = [
        { name: "No Manual Calculations", content: "Automated performance reports, generated seamlessly and instantly from LMS data, efficiently save both time and effort, while eliminating potential human errors for teachers." },
        { name: "Identify Weak Students in the Class", content: "Teachmint's detailed student performance analysis swiftly identifies students needing extra help, enabling targeted and effective assistance to help them catch up with the class effectively." },
        { name: "Helpful in Parent-Teacher Meetings", content: "This performance module provides real-time access to class information for teachers and informs parents via the Parent App, ensuring stakeholders are prepared for parent-teacher meetings." },
        { name: "Assists in Continuous Tracking of Student Performance", content: "Use our Performance management module for continuous student progress monitoring. Track weekly attendance and address low scorers, ensuring timely intervention." },
    ];

    return (

        <>

            <div id='home' className={`md:h-screen md:bg-student_report bg-student_report_mobile backgroundPosition md:w-full h-[250px] bg-cover bg-center bg-no-repeat`} >
                <div className='md:max-w-[1240px] w-full mx-auto md:p-16 p-2 flex justify-start items-center'>
                    <div className='md:mt-24 mt-10'>

                        <div className='md:ml-10'>
                            <div className='md:mb-10'>
                                <h1 className='font-semibold md:text-6xl text-xl leading-none md:mb-2 mt-4 text-transparent bg-clip-text bg-gradient-to-r from-[#152C4E] to-[#75EAE4]'>
                                    {"Student Performance"}<br />{"Report"}
                                </h1>
                                <p className='md:block hidden md:max-w-[620px] py-1 text-[#202124] mx-auto font-inter md:font-semibold md:text-[14px] text-[12px]'>
                                    {"Create data-driven performance reports of individual students with respect to their homework submissions, test scores, and attendance!"}
                                </p>
                                <p className='md:hidden block md:max-w-[620px] py-1 text-[#202124] mx-auto font-inter md:font-semibold md:text-[14px] text-[12px]'>
                                    {"Create data-driven"} <br/>
                                    {"performance reports of"} <br/>
                                    {"individual students with"} <br/>
                                    {"respect to their homework"} <br/>
                                    {"submissions, test scores,"}<br/>
                                    {"and attendance!"}
                                </p>
                            </div>

                            <Link href="/pages/get-in-touch" className="md:ml-1 rounded-full hover:scale-105 ease-in duration-100 text-white items-start bg-[#152C4E] focus:ring-4 font-medium mb-2 capitalize dark:focus:ring-[#152C4E] md:px-6 md:py-2 px-4 py-2 md:text-[14px] text-[10px]">{"GET STARTED ->"} </Link>

                        </div>
                    </div>

                </div>
            </div>

            <section className="md:pb-12 lg:pt-[5px] lg:pb-[20px]">
                <div className="container mx-auto md:max-w-5xl">

                    <div className="w-full px-4 flex flex-wrap justify-center items-center">

                        <div className="mx-auto md:mb-12 mb-8 md:max-w-[100%] text-center lg:mb-10 mt-8">
                            <h2 className="font-bold text-center md:text-[20px] text-[16px] leading-[44px] md:leading-[52px] md:text-heading-3 md:ml-8 md:mb-[60px] lg:mb-[20px]">Overview</h2>
                            <p className='md:max-w-[1000px] md:text-center text-justify py-2 text-gray-600 text-sm md:mt-2'>
                                Make school fee management effective, efficient, and easy with Teachmint’s Fee Management Software. Automate and simplify the entire edifice of the fee management process.              </p>
                        </div>

                    </div>

                    <div className="md:-mx-4 grid md:grid-cols-3 grid-cols-1 px-4">

                        <div className="w-full px-4">
                            <div className="mb-8 rounded-[20px] bg-white">
                                <h4 className="text-dark mb-3 text-sm font-semibold">
                                    Subject wise & Student-wise Tracking </h4>
                                <p className="text-body-color text-xs">
                                    Track the progress of students in the classroom, subject wise on an individual basis </p>
                                <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-4">
                            <div className="mb-8 rounded-[20px] bg-white">
                                <h4 className="text-dark mb-3 text-sm font-semibold">
                                    Automated Generation of Analytics                </h4>
                                <p className="text-body-color text-xs">
                                    Get deep analytical insight into the classroom’s performance with automatic generation of reports                </p>
                                <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-4">
                            <div className="mb-8 rounded-[20px] bg-white">
                                <h4 className="text-dark mb-3 text-sm font-semibold">Track Trends in Performance</h4>
                                <p className="text-body-color text-xs">
                                    In-depth understanding of the classroom through analysis of homework submission rates, test scores, and class attendance                                </p>
                                <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <div id='about' className='md:p-4 w-full bg-gradient-to-r from-[#FFFFFF] from-15% via-[#FCFFFE80] via-20% to-[#75EAE440] to-100% text-center py-8' >

                <div className='container mx-auto md:max-w-[1000px] md:mb-10'>

                    <div className="mx-auto mb-12 max-w-[100%] text-center lg:mb-10 mt-2">
                        <h2 className="font-bold text-center md:text-[20px] text-[16px] leading-[44px] md:leading-[52px] md:text-heading-3 md:mb-[60px] lg:mb-[20px]">Benefits of Fee Management Software</h2>
                        <p className='md:max-w-[1000px] px-4 md:text-center text-justify py-2 text-gray-600 text-sm md:mt-2'>
                            Teachmint is the best fee management software solution out there in the market today and has several features that make it convenient for use among all the different stakeholders of the institution. Some of these are mentioned below -
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 grid-cols-1 gap-2 px-4">

                        {studentreport && studentreport.map((feeList, index) => (
                            <div key={feeList.name} className=" bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden hover:border-[#75EAE2] border-2">
                                <div className="p-4">
                                    <h4 className="text-dark mb-3 text-sm font-semibold text-left">
                                        {feeList.name}
                                    </h4>
                                    <p className="text-body-color text-xs text-left">
                                        {feeList.content}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </div>

            <Contact />
        </>

    )
}
export default page;