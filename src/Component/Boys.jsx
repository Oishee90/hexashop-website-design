
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import man1 from '../assets/Man1.png'
import star from '../assets/rename.png'
import love from '../assets/love.png'
import shop from '../assets/shop.png'
import man2 from '../assets/man2.png'
import man3 from '../assets/man3.png'
import boys4 from '../assets/boys4.png'
const Boys = () => {
   
    return (
        <div className="container mx-auto mt-7  " id="mens">
          <div className='mt-7 mb-2 pt-5 pb-5'>
               <h1 className='font-inter text-2xl md:text-4xl text-black mx-auto text-center font-extrabold  '>Unleash Your Style</h1>
                <div className='border border-green-700 w-24 mt-2 mx-auto'></div>
            </div>
            <div className="md:pl-10 p-4 pt-20 md:pr-10 pb-20">
               <h1 className="font-inter md:text-4xl text-2xl font-bold   text-slate-800 "> Men’s Latest Fashion</h1> 
               <div className='border-2 border-slate-800 w-28 rounded-xl  mt-2 '></div>
               <p className="mt-3 font-inter text-lg font-medium  cursor-pointer ">Explore the freshest trends and elevate your wardrobe with our newest arrivals. From sleek, tailored suits to casual, laid-back outfits, our collection offers versatile styles for every occasion. </p>
              <div className='pl-4 pr-4 mt-4'>
              <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
       
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mt-5"
      >
        <SwiperSlide  className='mb-8'>
        <div className="w-full text-slate-800 overflow-hidden border border-blue-200 transition ease-in-out duration-300 hover:border-blue-800 hover:shadow-white hover:cursor-pointer hover:shadow-lg bg-white rounded-lg shadow-lg dark:bg-gray-800 ">
      <img
        className="object-cover w-full h-full"
        src={man1}
        alt="man1"
      />

      <div className="py-5 md:px-5 px-2">
        <div className='flex flex-col-reverse md:flex-row justify-between md:items-center '>
          <h1 className='font-inter md:text-2xl text-xs md:font-bold'>Classic Spring</h1>
          <div className='mb-2'><img src={star} alt="" /></div>
        </div>
        <div className='flex flex-col md:flex-row justify-between md:items-center mt-5 '>
          <h1 className='font-inter md:text-xl text-xs md:font-medium'>$120.00</h1>
          <div className='flex items-center gap-3 md:gap-5 mt-2 md:mt-0 '>
            <img src={love} className='md:w-6 w-3 h-full' alt="" />
            <img src={shop} className='md:w-6 w-3 h-full mt-2 md:mt-2' alt="" />
            </div>
        </div>
      </div>
    </div>
        </SwiperSlide>
        <SwiperSlide  className='mb-8'>
        <div className="w-full text-slate-800 overflow-hidden border border-blue-200 transition ease-in-out duration-300 hover:border-blue-800  hover:shadow-white hover:cursor-pointer hover:shadow-lg bg-white rounded-lg shadow-lg dark:bg-gray-800 ">
      <img
        className="object-cover w-full h-full"
        src={man2}
        alt="man2"
      />

      <div className="py-5 md:px-5 px-2">
        <div className='flex flex-col-reverse md:flex-row justify-between md:items-center '>
          <h1 className='font-inter md:text-2xl text-xs md:font-bold'>Classic Spring</h1>
          <div className='mb-2'><img src={star} alt="" /></div>
        </div>
        <div className='flex flex-col md:flex-row justify-between md:items-center mt-5 '>
          <h1 className='font-inter md:text-xl text-xs md:font-medium'>$120.00</h1>
          <div className='flex items-center gap-3 md:gap-5 mt-2 md:mt-0 '>
            <img src={love} className='md:w-6 w-3 h-full' alt="" />
            <img src={shop} className='md:w-6 w-3 h-full mt-2 md:mt-2' alt="" />
            </div>
        </div>
      </div>
    </div>
        </SwiperSlide>
        <SwiperSlide  className='mb-8'>
        <div className="w-full text-slate-800 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800  border border-blue-200 transition ease-in-out duration-300 hover:border-blue-800  hover:shadow-white hover:cursor-pointer hover:shadow-lg">
      <img
        className="object-cover w-full h-full"
        src={man3}
        alt="man3"
      />

      <div className="py-5 md:px-5 px-2">
        <div className='flex flex-col-reverse md:flex-row justify-between md:items-center '>
          <h1 className='font-inter md:text-2xl text-xs md:font-bold'>Classic Spring</h1>
          <div className='mb-2'><img src={star} alt="" /></div>
        </div>
        <div className='flex flex-col md:flex-row justify-between md:items-center mt-5 '>
          <h1 className='font-inter md:text-xl text-xs md:font-medium'>$120.00</h1>
          <div className='flex items-center gap-3 md:gap-5 mt-2 md:mt-0 '>
            <img src={love} className='md:w-6 w-3 h-full' alt="" />
            <img src={shop} className='md:w-6 w-3 h-full mt-2 md:mt-2' alt="" />
            </div>
        </div>
      </div>
    </div>
        </SwiperSlide>
        <SwiperSlide  className='mb-8'>
        <div className="w-full text-slate-800 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 border border-blue-200 transition ease-in-out duration-300 hover:border-blue-800  hover:shadow-white hover:cursor-pointer hover:shadow-lg">
      <img
        className="object-cover w-full h-full"
        src={boys4}
        alt="boys4"
      />

      <div className="py-5 md:px-5 px-2">
        <div className='flex flex-col-reverse md:flex-row justify-between md:items-center '>
          <h1 className='font-inter md:text-2xl text-xs md:font-bold'>Classic Spring</h1>
          <div className='mb-2'><img src={star} alt="" /></div>
        </div>
        <div className='flex flex-col md:flex-row justify-between md:items-center mt-5 '>
          <h1 className='font-inter md:text-xl text-xs md:font-medium'>$120.00</h1>
          <div className='flex items-center gap-3 md:gap-5 mt-2 md:mt-0 '>
            <img src={love} className='md:w-6 w-3 h-full' alt="" />
            <img src={shop} className='md:w-6 w-3 h-full mt-2 md:mt-2' alt="" />
            </div>
        </div>
      </div>
    </div>
        </SwiperSlide>
      </Swiper>
              </div>
            </div>
        </div>
    );
};

export default Boys;