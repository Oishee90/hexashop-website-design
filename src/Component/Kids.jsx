import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import kids1 from '../assets/kids1.png'
import star from '../assets/rename.png'
import love from '../assets/love.png'
import shop from '../assets/shop.png'
import kids2 from '../assets/kids2.png'
import kids3 from '../assets/kids3.png'
import kids4 from '../assets/kids4.png'

const Kids = () => {
    return (
        <div className="container mx-auto " id='kids'>
        <div className="pl-10 pt-20 pr-10 pb-20">
           <h1 className="font-inter text-2xl md:text-4xl font-bold text-slate-800 cursor-pointer "> Kid's Latest Fashion</h1> 
           <div className='border-2 border-slate-800 w-28 rounded-xl  mt-2 '></div>
           <p className="mt-3 font-inter text-lg font-medium  cursor-pointer "> Our kids’ collection combines style and comfort with playful patterns and bold colors, perfect for sparking imagination and showcasing their unique personalities.</p>
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
    <SwiperSlide  className='  '>
    <div className="w-full text-slate-800 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 border border-blue-200 transition ease-in-out duration-300 hover:border-blue-800  hover:shadow-white hover:cursor-pointer hover:shadow-lg">
  <img
    className="object-cover w-full h-full"
    src={kids1}
    alt="kids1"
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
    <div className="w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 border border-blue-200 transition ease-in-out duration-300 hover:border-blue-800 text-slate-800 hover:shadow-white hover:cursor-pointer hover:shadow-lg ">
  <img
    className="object-cover w-full h-full"
    src={kids2}
    alt="kids2"
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
    <div className="w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 border border-blue-200 transition ease-in-out duration-300 text-slate-800 hover:border-blue-800  hover:shadow-white hover:cursor-pointer hover:shadow-lg">
  <img
    className="object-cover w-full h-full"
    src={kids3}
    alt="kids3"
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
    <div className="w-full overflow-hidden text-slate-800 bg-white rounded-lg shadow-lg dark:bg-gray-800 border border-blue-200 transition ease-in-out duration-300 hover:border-blue-800  hover:shadow-white hover:cursor-pointer hover:shadow-lg">
  <img
    className="object-cover w-full h-full"
    src={kids4}
    alt="kids4"
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

export default Kids;