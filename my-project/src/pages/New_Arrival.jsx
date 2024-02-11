import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { img1, img2, img3, membership } from '../assets'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../pages/arrival.css"
import { GiJerusalemCross } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from 'react-icons/hi2';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-red500`}
      onClick={onClick}
    >
      <HiOutlineArrowLongRight className='text-5xl text-gray-300 -mt-9 absolute left-2  md:block hidden' />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-red500`}
      onClick={onClick}
    >
      <HiOutlineArrowLongLeft className='text-5xl text-gray-300 -mt-9 absolute right-2  md:block hidden' />
    </div>
  );
}

const New_Arrival = () => {
  const slider = React.useRef(null);

  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 369,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  };

  return (
    <div>
      <Navbar />

      <section className='xl:px-28 lg:px-20 sm:px-10 px-5 md:pt-32 pt-20 pb-10 z-10'>
        <p className='text-4xl'>New Arrival</p>

        <div className='pt-3 flex sm:flex-row flex-col justify-between sm:items-center sm:gap-0 gap-8 '>
          <div className=' '>
            <p className='text-[10px] font-semibold z-4'>JOIN TODAY</p>
            <hr className='bg-black w-[21px] h-[2.5px]' />
          </div>
          <div>
            <h3 className='text-[#7dadb1] xl:text-[32px] slg:text-3xl vvsm:text-2xl text-xl 2xl:pr-40 pr-24 xlg:block hidden'>
              Unlock Premium Features Now
            </h3>
            <div className=' items-center gap-4 justify-center 2xl:pr-40 pr-24 xlg:flex hidden '>
              <hr className='bg-gray-200 w-6 h-[2px]' />
              <GiJerusalemCross className='text-gray-500 text-lg' />
              <hr className='bg-gray-200 w-6 h-[2px]' />
            </div>
          </div>
        </div>
        <div className=' flex xlg:flex-row flex-col xlg:gap-0 gap-10 items-center justify-between 2xl:px-16'>
          <div className='flex flex-col items-center justify-center'>
            <img className='xl:w-72 w-56  -mt-10' src={membership} alt="" />
            <div className='hover:scale-[1.01] '>
            <Link to='/exclusive-benifits'>
               <button className='text-sm py-0.5 w-56 text-[#387dba] outline-none font-medium tracking-widest bg-gradient-to-t  duration-150 from-[#d7d7d7] px-5 rounded-3xl border-2 border-[#c5c5c5]'>JOIN NOW</button>
            </Link>
            </div>
          </div>
          <div className='flex justify-center items-center  lg:pt-10 pt-5 '>
            <div className='flex flex-col gap-3'>
              <h3 className='text-[#7dadb1] xl:text-[32px] slg:text-3xl vvsm:text-2xl text-xl xlg:hidden '>
                Unlock Premium Features Now
              </h3>
              <div className=' flex items-center gap-4 justify-center xlg:hidden '>
                <hr className='bg-gray-200 w-6 h-[2px]' />
                <GiJerusalemCross className='text-gray-500 text-lg' />
                <hr className='bg-gray-200 w-6 h-[2px]' />
              </div>
            </div>
          </div>
          <div className='lg:w-[700px md:w-[700px] sm:w-[600px] xsm:w-[500px] ssm:w-[410px] bg-red500 vsm:w-[350px] vvsm:w-[380px] w-[300px] px-10 xl:pt-20 '>
            <div className=' '>
              <Slider ref={slider} {...settings} className='z-10'>
                <div className='rounded-xl border w-[190px border-[#3a7c72] overflow-hidden'>
                  <div className=''>
                    <img src={img2} alt="" />
                    <div className='w-full text-lg text-[#387dba] flex justify-center flex-col items-center h-[70px]'>
                      <p>Lower</p>
                      <p>Interest Rates</p>
                    </div>
                  </div>
                </div>
                <div className='rounded-xl border w-[190px border-[#3a7c72] overflow-hidden'>
                  <div className=''>
                    <img src={img3} alt="" />
                    <div className='w-full text-lg text-[#387dba] flex justify-center flex-col items-center h-[70px]'>
                      <p>Interest</p>
                      <p>Free Payments</p>
                    </div>
                  </div>
                </div>
                <div className='rounded-xl border w-[190px border-[#3a7c72] overflow-hidden'>
                  <div className=''>
                    <img src={img1} alt="" />
                    <div className='w-full text-lg text-[#387dba] flex justify-center flex-col items-center h-[70px]'>
                      <p>Discount on </p>
                      <p>Materials</p>
                    </div>
                  </div>
                </div>
                <div className='rounded-xl border w-[190px border-[#3a7c72] overflow-hidden'>
                  <div className=''>
                    <img src={img3} alt="" />
                    <div className='w-full text-lg text-[#387dba] flex justify-center flex-col items-center h-[70px]'>
                      <p>Lower</p>
                      <p>Interest Rates</p>
                    </div>
                  </div>
                </div>
                <div className='rounded-xl border w-[190px border-[#3a7c72] overflow-hidden'>
                  <div className=''>
                    <img src={img1} alt="" />
                    <div className='w-full text-lg text-[#387dba] flex justify-center flex-col items-center h-[70px]'>
                      <p>Lower</p>
                      <p>Interest Rates</p>
                    </div>
                  </div>
                </div>
              </Slider>
              <div className='flex flex-col items-center gap-2 pt-10'>
                <div className='hover:scale-[1.01] '>
                  <Link to='/exclusive-benifits'>
                    <button className='text-sm py-0.5 w-44  text-[#ffffff] outline-none font-medium tracking-widest bg-gradient-to-r from-[#2cb598] via-[#5fd8c4] to-[#2cb598] px-5 rounded-3xl border-2 border-[#c5c5c5]'>
                      UNLOCK NOW
                    </button>
                  </Link>
                </div>
                <div className='hover:scale-[1.01] '>
                  <Link to='/exclusive-benifits'>
                    <button className='text-sm py-0.5 px-10 text-[#ffffff] outline-none font-medium tracking-widest bg-gradient-to-r from-[#2cb598] via-[#5fd8c4] to-[#2cb598] rounded-3xl border-2 border-[#c5c5c5]'>
                      DETAILS
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default New_Arrival