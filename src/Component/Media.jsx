 import first from '../assets/1st.png'
 import second from '../assets/2nd.png'
 import third from '../assets/3rd.png'
 import fourth from '../assets/4th.png'
 import fifth from '../assets/5th.png'
 import six from '../assets/6th.png'

const Media = () => {
    return (
        <div className="container mx-auto mt-7 ">
            <div className="pl-10 pt-20 pr-10 pb-20">
               <h1 className="font-inter text-2xl font-bold">Social Media</h1> 
               <p className="mt-3 font-inter text-lg font-medium">Join our community and never miss out on special discounts, seasonal sales, and new arrivals.</p>
               <div className="mt-3 grid grid-cols-2 md:grid-cols-3  lg:grid-cols-6 gap-5">
                <div><img src={first} alt="" /></div>
                <div><img src={second} alt="" /></div>
                <div><img src={third} alt="" /></div>
                <div><img src={fourth} alt="" /></div>
                <div><img src={fifth} alt="" /></div>
                <div><img src={six} alt="" /></div>

               </div>
            </div>

        </div>
    );
};

export default Media;