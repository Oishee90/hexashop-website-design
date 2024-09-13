import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import girls1 from '../assets/girls1.png'
import star from '../assets/rename.png'
import love from '../assets/love.png'
import shop from '../assets/shop.png'
import girls2 from '../assets/girls2.png'
import girls3 from '../assets/girls3.png'
import girls4 from '../assets/girls4.png'

const Girls = () => {
    return (
        <div className="container mx-auto " id='womens'>
        <div className="md:pl-10 p-4 pt-20 md:pr-10 pb-20">
           <h1 className="font-inter text-2xl md:text-4xl font-bold text-slate-800 cursor-pointer "> Women's Fashion</h1> 
           <div className='border-2 border-slate-800 w-28 rounded-xl  mt-2 '></div>
           <p className="mt-3 font-inter text-lg font-medium  cursor-pointer ">Celebrate your individuality with our modern women's fashion collection. Designed for the contemporary woman, these outfits combine comfort with style, perfect for transitioning from day to night with ease</p>
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
    <div className="w-full overflow-hidden bg-white text-slate-800 rounded-lg shadow-lg dark:bg-gray-800 border border-blue-200 transition ease-in-out duration-300 hover:border-blue-800  hover:shadow-white hover:cursor-pointer hover:shadow-lg">
  <img
    className="object-cover w-full h-full"
    src={girls1}
    alt="girls1"
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
    src={girls2}
    alt="girls2"
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
    src={girls3}
    alt="girls3"
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
    src={girls4}
    alt="girls4"
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

export default Girls;