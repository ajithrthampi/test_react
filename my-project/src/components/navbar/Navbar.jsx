import React, { useState } from 'react'
import { real_estate_house } from '../../assets'
import { HiMiniUser } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { motion, useAnimation } from 'framer-motion';
import { useLocation } from 'react-router-dom';


const Navbar = () => {
    const [open, setOpen] = useState(false)
    const location = useLocation()

    const OpenSlideNav = () => {
        setOpen(!open)
    }
    const menuSlide = {
        initial: { x: "100%" },
        enter: { x: "0", transition: { duration: 0.2, ease: [0.76, 0, 0.24, 1] } },

    }

    return (
        <nav className='bg-[#ececec] h-14 w-full lg:px-36 md:px-10 fixed top-0 z-50 '>
            <section className='flex items-center lg:justify-start justify-between h-full'>
                <div className='lg:w-[50%] '>
                    <img className='w-28' src={real_estate_house} alt="" />
                </div>
                <div className='lg:w-[60%] md:pr-0 vsm:pr- pr-5 flex items-center gap-3'>
                    <p className='font-medium md:text-base text-sm'>XYZ SYSTEMS LLP.</p>
                    {
                        location.pathname === "/" && <RxHamburgerMenu className='md:hidden cursor-pointer' size={21} onClick={OpenSlideNav} />
                    }
                   
                </div>
            </section>
            {
                location.pathname === "/" &&

                <div className='bg-white'> 
                    <section className=' relative md:block hidden'>
                        <ol className='flex sm:gap-8 gap-5 sm:text-sm text-xs font-medium justify-center pt-4'>
                            <li>Home</li>
                            <li>Dashboard</li>
                            <li>Products</li>
                            <li>Transactions</li>
                            <li>Journal</li>
                        </ol>

                        <div className='absolute right-0 flex flex-col justify-center items-center'>
                            <HiMiniUser className='text-[#8ccbe9]' size={34} />
                            <p className='text-sm font-medium'>Joseph Iazar</p>
                        </div>
                    </section>
                    {
                        open && <motion.div
                            variants={menuSlide}
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            className=' fixed  md:hidden text-white z-50 top-0 right-0  pt-20  md:w-[577px] sm:w-[calc(100vw-100px)] w-[calc(100vw-30px)] h-screen bg-[#ffffff] drop-shadow-md flex flex-col caret-transparent '>
                            <div className='flex flex-col justify-cente  h-full md:gap-14 sm:gap-10 vsm:gap-12 gap-10 '>
                                <div className='text-black absolute  right-5 top-5 cursor-pointer' onClick={() => setOpen(false)}>
                                    <IoMdClose size={28} />
                                </div>
                                <div className=' flex flex-col justify-center items-center'>
                                    <HiMiniUser className='text-[#8ccbe9]' size={34} />
                                    <p className='text-sm font-medium text-black'>Joseph Iazar</p>
                                </div>
                                <div className=' px-10'>

                                    <ul className="flex flex-col gap-3   font-medium  text-[#5d5c5d] ">
                                        <hr className='bg-gray-500 hpx' />
                                        <li>
                                            <a href="#" className="   fontProximanova_Bold text-xl " >Home</a>
                                        </li>
                                        <hr className='bg-gray-500 hpx' />
                                        <li>
                                            <a href="#" className="  fontProximanova_Bold text-xl">Dashboard</a>
                                        </li>
                                        <hr className='bg-gray-500 hpx' />
                                        <li>
                                            <a href="#" className="  fontProximanova_Bold text-xl">Products</a>
                                        </li>
                                        <hr className='bg-gray-500 hpx' />
                                        <li>
                                            <a href="#" className="  fontProximanova_Bold text-xl">Transactions</a>
                                        </li>
                                        <hr className='bg-gray-500 hpx' />
                                        <li>
                                            <a href="#" className="  fontProximanova_Bold text-xl">Journal</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    }
                </div>
            }




        </nav>
    )
}

export default Navbar