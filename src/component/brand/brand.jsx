import React from 'react';
import { SiAdidas, SiNike, SiPuma } from 'react-icons/si';
import Marquee from 'react-fast-marquee';
const Brands = () => {
    return (
        <div className='mb-8 md:px-20 lg:px-50'>
            <h1 className='mb-10 text-2xl text-4xl lg:text-6xl font-extrabold text-pink-400 text-center mt-6'>Top <span className='text-purple-500'>Brands</span></h1>
            <Marquee pauseOnHover='true' className='gap-2'> <div className='container mx-auto grid grid-cols-3 gap-4'>
                <div className="card bg-gradient-to-r from-pink-400 to-purple-500 text-white w-full shadow-sm">
                    <div className="card-body">
                        <h1 className='text-5xl rounded-full'><SiNike /></h1>
                        <h2 className="text-4xl mb-2 font-bold">Nike</h2>
                        <h2 className="text-2xl text-gray-700 mb-2 font-bold">Just Do It.</h2>
                        <p className='text-sm text-shadow-indigo-200'>Global leader in sportswear and innovation, built for athletes who push limits.</p>
                        <p className='text-orange-950'>Rating : 4.8</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
                <div className="card bg-gradient-to-r from-pink-400 to-purple-500 text-white w-full shadow-sm">
                    <div className="card-body">
                        <h1 className='text-5xl rounded-full'><SiAdidas /></h1>
                        <h2 className="text-4xl mb-2 font-bold">Adidas</h2>
                        <h2 className="text-2xl text-gray-700 mb-2 font-bold">Impossible is Nothing.</h2>
                        <p className='text-sm text-shadow-indigo-200'>A blend of performance and street style trusted by athletes worldwide.</p>
                        <p className='text-orange-950'>Rating : 4.6</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
                <div className="card bg-gradient-to-r from-pink-400 to-purple-500 text-white w-full shadow-sm">
                    <div className="card-body">
                        <h1 className='text-5xl rounded-full'><SiPuma /></h1>
                        <h2 className="text-4xl mb-2 font-bold">Puma</h2>
                        <h2 className="text-2xl text-gray-700 mb-2 font-bold">Forever Faster.</h2>
                        <p className='text-sm text-shadow-indigo-200'>Sporty, bold, and fast — designed for performance and lifestyle fashion.</p>
                        <p className='text-orange-950'>Rating : 4.4</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
            </div></Marquee>
        </div>
    );
};

export default Brands;