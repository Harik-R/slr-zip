import Contact from '@/components/Contact'
import Image from 'next/image'
import Link from 'next/link'
import { BsPlusCircleFill } from 'react-icons/bs'
import { FaCheck } from 'react-icons/fa'

const page = () => {

    const communicationmodule = [
        { name: "Improves efficiency", content: "Teachmint improves the overall efficiency of schools and colleges. It enables the admins to see who has read their messages. Also, they can send specific messages to specific individuals." },
        { name: "Simple", content: "The communication module is a simple solution to streamline the processes within the organization. It helps admins to send crucial messages to teachers and students via push notifications." },
        { name: "Eliminate misinformation", content: "As administrators can promptly share precise information, it effectively minimizes the possibilities of miscommunication and misinformation, enhancing overall communication within the school." },
        { name: "Better decisions", content: "As the communication module improves transparency and ensures a smooth flow of information, it helps in better decision-making at higher levels." },
        { name: "Better management", content: "Teachmint's online practice platform is designed to empower students in overcoming exam anxiety and building confidence through regular exposure and practice sessions." },

    ];

    return (

        <>

            <div id='home' className={`md:h-screen md:bg-communication_module bg-communication_module_mobile backgroundPosition md:w-full h-[260px] bg-cover bg-center bg-no-repeat`} >
                <div className='md:max-w-[1240px] w-full mx-auto md:p-16 p-2 flex justify-start items-center'>
                    <div className='md:mt-24 mt-10'>

                        <div className='md:ml-10'>
                            <div className='md:mb-10'>
                                <h1 className='font-semibold md:text-6xl text-xl leading-none md:mb-2 mt-4 text-transparent bg-clip-text bg-gradient-to-r from-[#152C4E] to-[#75EAE4]'>
                                    {"Communication"}<br />{"Module"}
                                </h1>
                                <p className='md:block hidden md:max-w-[620px] py-1 text-[#202124] mx-auto font-inter md:font-semibold md:text-[14px] text-[12px]'>
                                    {"Providing accurate information to every stakeholder is critical to run an institute perfectly. Every educational organization processes a lot of information to provide accurate details to all stakeholders."}
                                </p>
                                <p className='md:hidden block md:max-w-[620px] py-1 text-[#202124] mx-auto font-inter md:font-semibold md:text-[14px] text-[12px]'>
                                    {"Providing accurate information"} <br />
                                    {"to every stakeholder is critical"} <br />
                                    {"to run an institute perfectly."} <br />
                                    {"Every educational organization"} <br />
                                    {"processes a lot of information"} <br />
                                    {"to provide accurate details to all stakeholders."}
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
                                {"Teachmint makes communication effortless for all the stakeholders. The main features of our communication module are:"} </p>
                        </div>

                    </div>

                    <div className="md:-mx-4 grid md:grid-cols-3 grid-cols-1 px-4">

                        <div className="w-full px-4">
                            <div className="mb-8 rounded-[20px] bg-white">
                                <h4 className="text-dark mb-3 text-sm font-semibold">
                                    Polls and Surveys</h4>
                                <p className="text-body-color text-xs">
                                    {"Admins can effectively use Teachmint for conducting polls and surveys to gather stakeholder views and enhance decision-making."}</p>
                                <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-4">
                            <div className="mb-8 rounded-[20px] bg-white">
                                <h4 className="text-dark mb-3 text-sm font-semibold">
                                    Announcements</h4>
                                <p className="text-body-color text-xs">
                                    {"Admins can send announcements to teachers and students via push notifications, with a dashboard displaying the message timeline."}</p>
                                <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-4">
                            <div className="mb-8 rounded-[20px] bg-white">
                                <h4 className="text-dark mb-3 text-sm font-semibold">Stay Connected with Parents</h4>
                                <p className="text-body-color text-xs">
                                    {"Teachmint enables school admins to quickly share vital updates with parents, keeping them informed about school activities."}</p>
                                <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-4">
                            <div className="mb-8 rounded-[20px] bg-white">
                                <h4 className="text-dark mb-3 text-sm font-semibold">Seen and Unseen</h4>
                                <p className="text-body-color text-xs">
                                    {"Admins can monitor message efficiency through seen and unseen messages, ensuring seamless communication via Teachmint."}</p>
                                <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-4">
                            <div className="mb-8 rounded-[20px] bg-white">
                                <h4 className="text-dark mb-3 text-sm font-semibold">Simple Format</h4>
                                <p className="text-body-color text-xs">
                                    {"Administrators can efficiently send messages with titles, detailed content, and file attachments in various formats through user-friendly interface."}</p>
                                <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-4">
                            <div className="mb-8 rounded-[20px] bg-white">
                                <h4 className="text-dark mb-3 text-sm font-semibold">Easy Segmentation</h4>
                                <p className="text-body-color text-xs">
                                    {"Admins can communicate with specific recipients efficiently using Teachmint's user-friendly interface, ensuring targeted messaging."}</p>
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
                            {"Teachmint is the best fee management software solution out there in the market today and has several features that make it convenient for use among all the different stakeholders of the institution. Some of these are mentioned below -"}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 grid-cols-1 gap-2 px-4">

                        {communicationmodule && communicationmodule.map((feeList, index) => (
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