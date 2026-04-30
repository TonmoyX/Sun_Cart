import React from 'react';
import banner from '@/assets/banner.jpg'
import Image from 'next/image';
const Banner = () => {
    return (
        <div className='animate__animated animate__fadeInUp container  mx-auto mt-5  '>
             <Image src={banner} height={800} width={1000} alt='banner image' className='flex mx-auto w-300 rounded-xl'></Image>
             <h1 className='text-2xl md:text-4xl lg:text-6xl font-extrabold text-pink-400 text-center mt-6'>Populer <span className='text-purple-600'>Products</span></h1>
        </div>
    );
};

export default Banner;