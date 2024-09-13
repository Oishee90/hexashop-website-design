import firstImage from '../assets/images.png'
import women from '../assets/women.png'
import men from '../assets/men.png'
import Kids from '../assets/kids.png'
import accessories from '../assets/accessories.png'
const Banner = () => {
    return (
        <div className="container mx-auto  bg-white shadow-xl pt-5 pb-5 pl-4 pr-4">
           <div className='grid grid-cols-1 md:grid-cols-2 gap-5' >
            {/* 1st */}
            <div className='relative'>
  <img src={firstImage} alt="" className='w-full h-auto' />
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80"></div>
  <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center'>
    <h1 className='md:text-2xl  text-xl font-bold font-inter mb-3 md:mb-0'>We are HexaShop</h1>
    <p className='mt-2 mb-3  text-base font-inter'>
    Discover the latest trends and exclusive collections from top brands.
    </p>
    <button type="button" className="p-[0.5rem] mt-5  font-inter transition ease-in-out duration-300 hover:border-blue-600 hover:bg-slate-800 hover:shadow-lg md:text-2xl text-xl font-bold border rounded border-white dark:border-gray-800 text-white dark:text-gray-800">Purchase Now</button>
  </div>
</div>
 {/* 2nd */}
 <div className='grid md:grid-cols-2 gap-5 grid-cols-1'>
    {/* 1 */}
 <div className='relative'>
  <img src={women} alt="" className='w-full h-auto' />
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80"></div>
  <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center '>
    <h1 className='text-xl mb-3 md:mb-0 md:text-lg font-bold  font-inter'>Women</h1>
    <p className=' mb-3 md:mb-2 text-lg md:text-xs font-inter '>
   
Fashion styles for every occasion
    </p>
    <button type="button" className="p-[0.5rem]  transition ease-in-out duration-300 hover:border-blue-600 hover:bg-slate-800 hover:shadow-lg  font-inter text-lg md:text-base font-semibold border rounded border-white dark:border-gray-800 text-white dark:text-gray-800">Discover More</button>
 
  </div>
</div>

{/* 2 */}
<div className='relative'>
  <img src={men} alt="" className='w-full h-auto' />
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80"></div>
  <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center '>
    <h1 className=' text-xl mb-3 md:mb-0 md:text-lg font-bold  font-inter'>Men</h1>
    <p className='mb-3 md:mb-2 text-lg md:text-xs font-inter'>
    Stay stylish with men's latest fashion
    </p>
    <button type="button" className="p-[0.5rem]   transition ease-in-out duration-300 hover:border-blue-600 hover:bg-slate-800 hover:shadow-lg  font-inter text-lg md:text-base font-semibold border rounded border-white dark:border-gray-800 text-white dark:text-gray-800">Discover More</button>
 
  </div>
</div>
{/* 3 */}
<div className='relative'>
  <img src={Kids} alt="" className='w-full h-auto' />
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80"></div>
  <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center '>
    <h1 className='text-xl mb-3 md:mb-0 md:text-lg font-bold  font-inter'>Kids</h1>
    <p className='mb-3 md:mb-2 text-lg md:text-xs font-inter'>
 
Comfy outfits for your little ones
    </p>
    <button type="button" className="p-[0.5rem]   transition ease-in-out duration-300 hover:border-blue-600 hover:bg-slate-800 hover:shadow-lg  font-inter text-lg md:text-base font-semibold border rounded border-white dark:border-gray-800 text-white dark:text-gray-800">Discover More</button>
 
  </div>
</div>
{/* 4 */}
<div className='relative'>
  <img src={accessories} alt="" className='w-full h-auto' />
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80"></div>
  <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center '>
    <h1 className='text-xl mb-3 md:mb-0 md:text-lg font-bold  font-inter'>Accessories</h1>
    <p className='mb-3 md:mb-2 text-lg md:text-xs font-inter'>
    Complete your look with stylish accessories
    </p>
    <button type="button" className="p-[0.5rem]  transition ease-in-out duration-300 hover:border-blue-600 hover:bg-slate-800 hover:shadow-lg  font-inter text-lg md:text-base font-semibold border rounded border-white dark:border-gray-800 text-white dark:text-gray-800">Discover More</button>
 
  </div>
</div>
            
            </div>
            </div> 
        </div>
    );
};

export default Banner;