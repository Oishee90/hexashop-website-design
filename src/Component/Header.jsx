import { useState } from 'react';
import logo from '../assets/Group 201.png'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navlinks = <>
        <a className="my-2 font-inter font-medium lg:text-base  text-xs text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#home">
        Home
      </a>
      <a className="my-2 font-inter font-medium lg:text-base  text-xs  text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#mens">
      Man's
      </a>
      <a className="my-2 font-inter font-medium lg:text-base text-xs text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#womens">
      Women's
      </a>
      <a className="my-2 font-inter font-medium lg:text-base  text-xs  text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#kids">
       Kid's
      </a>
      <a className="my-2 font-inter font-medium lg:text-base text-xs text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#about">
        About Us
      </a>
      </>
 

    return (
        <div className="container mx-auto" id='home'>
             <nav className="relative bg-[#D9D9D9] shadow dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <a href="#" className='flex items-center gap-2 '>
            <img className="w-auto h-6 sm:h-7" src={logo} alt="Logo" /> <span className='gap-0 font-extrabold  text-xl  font-inter'>HexaShop</span>
          </a>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              {!isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
            isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
          }`}
        >
          <div className="flex flex-col md:flex-row md:mx-6">
        
            {
            navlinks
           } 
 
          </div>

          <div className="flex  justify-around md:justify-center gap-3">
          <button className="self-center bg-gray-400 rounded-xl px-2 py-2 lg:p-4 font-inter font-medium  transition ease-in-out duration-300  text-base md:text-xs lg:text-base text-white hover:bg-gray-500">Log in</button>
			<button className="self-center px-2 py-2 lg:p-4 text-white bg-slate-700 md:text-xs lg:text-base hover:bg-slate-800 transition ease-in-out duration-300 text-base font-semibold rounded-xl dark:bg-violet-600 dark:text-white">Sign up</button>
	
          </div>
        </div>
      </div>
    </nav>
        </div>
    );
};

export default Header;