
import bag from '../assets/Rectangle 98.png'
import jewellary from '../assets/Jewllary.png'
import girl from '../assets/girlBag.png'
import different from '../assets/shirtPant.png'

const Explore = () => {
    return (
        <div className="container mx-auto mt-10  bg-white shadow-xl pb-5 ">
            <div className='mt-7 mb-7 pt-5 pb-5'>
               <h1 className='font-inter text-4xl text-black mx-auto text-center font-extrabold '>Our Products</h1>
               <div className='border border-green-800 w-24 mt-2 mx-auto'></div>
            </div>
           <div className="flex flex-col md:flex-row items-center gap-7 md:px-5">
            
            {/* 1st */}
            <div className='w-1/2 '>
                <h1 className=" text-2xl font-bold text-slate-800 font-inter mb-5"> Explore Our Products</h1>

              <div className="text-base font-inter flex flex-col  gap-7">
                <p> Welcome to HexaShop, your ultimate destination for a wide range of carefully curated products designed to cater to every aspect of your lifestyle. Our diverse collection includes everything from fashion-forward clothing, stylish accessories, cutting-edge electronics, and home essentials. Each product in our store is meticulously selected, ensuring that you receive only the best in terms of quality, style, and functionality. Whether you're looking to update your wardrobe, elevate your tech game, or add that perfect finishing touch to your home, we have something special for everyone. Our team at HexaShop is committed to bringing you the latest trends and timeless classics, ensuring that whatever you choose, you’ll make a statement.

                </p>
                <p>
                At HexaShop, we believe that shopping should be a seamless and enjoyable experience. That’s why we offer a user-friendly platform that allows you to browse and discover products with ease. Our fashion section features a variety of styles for men, women, and kids, blending comfort with trendsetting designs that suit every occasion. Our electronics collection boasts the latest innovations, ensuring you stay ahead in technology, while our home and office essentials offer both style and functionality, creating spaces that inspire. With a focus on high-quality materials, sustainable practices, and thoughtful design, we aim to provide products that not only meet your needs but also exceed your expectations.
           </p>
           <p>
      Our commitment to excellence goes beyond just offering great products. At HexaShop, customer satisfaction is our top priority, and we work tirelessly to ensure that every shopping experience is smooth, secure, and enjoyable. From detailed product descriptions and customer reviews to flexible payment options and fast, reliable delivery, we strive to make your time with us as convenient as possible. Additionally, we are constantly expanding our product range, listening to customer feedback, and staying on top of industry trends to bring you the very best. Explore HexaShop today, and discover a world of possibilities where style meets convenience, and quality is guaranteed.
    </p>
              </div>
            </div>
            {/* 2nd */}
            <div className='grid lg:grid-cols-2 gap-5 grid-cols-1 '>
    {/* 1 */}
 <div className='relative hover:shadow-2xl hover:shadow-gray-500 border border-blue-300 '>
  <img src={bag} alt="" className='w-full h-auto' />
  
  <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-center '>
    <h1 className='  text-4xl font-extrabold font-inter mb-3'></h1>
  
  
  </div>
</div>

{/* 2 */}
<div className='relative hover:shadow-2xl hover:shadow-gray-500 border border-blue-300'>
  <img src={jewellary} alt="" className='w-full h-auto' />

  <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-center '>
    <h1 className='   text-4xl font-extrabold font-inter mb-3'></h1>
   
 
  </div>
</div>
{/* 3 */}
<div className='relative hover:shadow-2xl hover:shadow-gray-500 border border-blue-300'>
  <img src={girl} alt="" className='w-full h-auto' />

  <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2text-black text-center '>
  
    
   
  </div>
</div>
{/* 4 */}
<div className='relative hover:shadow-2xl hover:shadow-gray-500 border border-blue-300'>
  <img src={different} alt="" className='w-full h-auto' />

  <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-center '>
    <h1 className='  text-4xl font-extrabold font-inter mb-3'></h1>
   
    
  </div>
</div>
            
            </div>

            </div> 
        </div>
    );
};

export default Explore;