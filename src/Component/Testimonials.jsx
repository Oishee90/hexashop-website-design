import  { useState } from 'react';

const testimonials = [
    {
      name: "Sophia Williams",
      title: "Fashion Enthusiast at TrendyThreads",
      img: "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80", // Woman
      text: "I love shopping here! The dress collections for women are amazing, and the jewelry selection adds the perfect finishing touch to every outfit."
    },
    {
      name: "Ethan Brown",
      title: "Lifestyle Blogger at StyleHaven",
      img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80", // Man
      text: "Their men’s fashion collection is top-notch! From casual wear to formal attire, I can find everything I need to elevate my wardrobe."
    },
    {
      name: "Olivia Johnson",
      title: "Mom & Fashion Lover",
      img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80", // Kid
      text: "The kids’ collection is adorable and practical! My children love the comfortable and stylish outfits, and I love how easy it is to shop for them here."
    }
  ];
const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    };
  
    const currentTestimonial = testimonials[currentIndex];
    return (
        <div className="bg-white dark:bg-gray-900 container mx-auto mt-10 rounded-t-2xl border-blue-500 border  shadow-xl shadow-slate-300">
        <div className="max-w-6xl px-6 py-10 mx-auto">
          <p className="text-xl text-center font-inter font-bold text-slate-800">Testimonials</p>
          <div className='border border-green-700 w-24 mt-2 mx-auto'></div>
          <h1 className="mt-2 text-center text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            What clients are saying
          </h1>
  
          <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div className="absolute w-full bg-slate-600 -z-10 md:h-96 rounded-2xl"></div>
  
            <div className="w-full p-6  bg-slate-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
              <img
                className="h-24 w-24 md:mx-6 border border-blue-800 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
                src={currentTestimonial.img}
                alt={currentTestimonial.name}
              />
  
              <div className="mt-2 md:mx-6">
                <div>
                  <p className="text-xl font-inter font-medium tracking-tight text-white">
                    {currentTestimonial.name}
                  </p>
                  <p className="text-slate-200 font-inter">{currentTestimonial.title}</p>
                </div>
  
                <p className="mt-4 text-lg font-inter leading-relaxed text-white md:text-xl">
                  {currentTestimonial.text}
                </p>
  
                <div className="flex items-center justify-between mt-6 md:justify-start">
                  <button
                    title="left arrow"
                    className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-slate-800"
                    onClick={handlePrev}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
  
                  <button
                    title="right arrow"
                    className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-slate-800"
                    onClick={handleNext}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
};

export default Testimonials;