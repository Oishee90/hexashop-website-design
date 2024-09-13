import about from '../assets/happy-young-business-woman-holding-shopping-bags.jpg'
import large from '../assets/large.jpg'

const About = () => {
    return (
        <div className='container mx-auto ' id='about'>
             <div className='mt-7 mb-7 pt-5 pb-5'>
               <h1 className='font-inter text-4xl text-black mx-auto text-center font-extrabold '>About Us</h1>
               <div className='border border-green-800 w-24 mt-2 mx-auto'></div>
            </div>
               <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg p-4 mt-7">
            <h1 className="text-3xl font-semibold tracking-wide font-inter text-white dark:text-white lg:text-4xl">
            At <span className="text-slate-800">HexaShop</span>, we are passionate about bringing you the latest in fashion and style. 
            </h1>

            <div className="mt-8 space-y-5">
              <p className="flex items-center -mx-2 text-white font-inter dark:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="mx-2">Curated Collections</span>
              </p>

              <p className="flex items-center -mx-2 text-white font-inter0 dark:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="mx-2">Commitment to Quality</span>
              </p>
              <p className="flex items-center -mx-2 text-white font-inter dark:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="mx-2">Customer-Centric Approach</span>
              </p>
              <p className="flex items-center -mx-2 text-white font-inter dark:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="mx-2">Sustainable Practices</span>
              </p>
              <p className="flex items-center -mx-2 text-white font-inter dark:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="mx-2">Customer-Centric Approach</span>
              </p>
              <p className="flex items-center -mx-2 text-white font-inter dark:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="mx-2"> Exclusive Offers</span>
              </p>
            </div>
          </div>
        </div>

        <section className="relative flex items-center justify-center w-full h-96 lg:w-1/2">
  
    <img
        className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
        src={large}
        alt="Large Image"
    />

    <img
        className="absolute lg:block hidden w-[22rem] h-[13rem] top-[55%] left-[-16%] object-cover border-  rounded-md"
        src={about}
        alt="Overlay Image"
    />
</section>



      </div>
        </div>
    );
};

export default About;