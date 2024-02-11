import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { celeb, celeb1 } from '../assets'

const Exclusive_Benifits = () => {
    return (
        <div>
            <Navbar />
            <div className='pt-20 flex md:flex-row flex-col justify-between h-screen items-center xl:px-32 lg:px-24 sm:px-16 px-5 gap-10'>
                <div className=' md:w-[50%] w-full'>
                    <h1 className='text-[#62baf5] xl:text-5xl  xlg:text-4xl slg:text-4xl md: text-2xl font-normal'>Unlock Exclusive Benifits</h1>
                    <div className='pt-6  '>
                        <label className='text-base text-black font-medium' htmlFor="">PHONE NUMBER</label>
                        <div className='flex lg:flex-row flex-col lg:gap-2 gap-8 pt-1 xl:w-[410px] lg:w-[400px] '>
                            <div className='relative w-full'>
                                <input
                                    type="number"
                                    placeholder='+91 India'
                                    className='border-2 outline-none py-1 w-full text-sm rounded-3xl border-[#9c9c9c] placeholder:text-xs  placeholder:text-gray-500 placeholder:font-medium px-2'
                                />
                                <hr className='w-4 h-[1px] absolute bg-gray-700 top-[14px] right-10 rotate-90' />
                            </div>
                            <input
                                type="number"
                                className='border-2 w-full py-0.5 rounded-3xl px-2 border-[#9c9c9c] outline-none'
                            />
                        </div>
                        <div className='pt-4'>
                            <label className='text-base text-black font-medium ' htmlFor="">NAME</label>
                            <div className='flex gap-2 pt-1 xl:w-[410px] lg:w-[400px]'>
                                <input
                                    type="text"
                                    className='border-2 w-full py-1 rounded-3xl px-2 border-[#9c9c9c] outline-none text-sm'
                                />
                            </div>
                        </div>
                        <div className='pt-4'>
                            <label className='text-base text-black font-medium ' htmlFor="">EMAIL [OPTIONAL]</label>
                            <div className='flex gap-2 pt-1 xl:w-[410px] lg:w-[400px]'>
                                <input
                                    type="email"
                                    className='border-2 w-full py-1 rounded-3xl px-2 border-[#9c9c9c] outline-none text-sm'
                                />
                            </div>
                        </div>
                        <div className='pt-12'>
                            <button className='text-lg  md:w-[64.5%] w-full  text-[#ffffff] outline-none font-medium tracking-widest bg-[#61baf5] px-5 rounded-3xl border-2 border-[#9c9c9c]'>
                                CONTINUE
                            </button>
                        </div>
                    </div>
                </div>
                <div className='xl:w-[500px] w-[400px] md:block hidden'>
                    <img className='' src={celeb1} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Exclusive_Benifits