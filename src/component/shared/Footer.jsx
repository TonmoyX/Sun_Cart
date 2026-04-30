import React from 'react';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-gradient-to-r from-pink-800 to-purple-900'>
            <div className='pb-10 border-b-1 border-gray-500'>
                <h1 className='text-8xl text-center font-extrabold pt-5 bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text'>SunCart</h1>
                <p className='mt-4 text-center text-white text-xl font-semibold'>SunCart is an e-commerce platform dedicated to providing<br></br> safe and reliable summer products to valuable client</p>
                <p className='mt-4 text-center text-white text-3xl font-bold'>Social Link</p>
                <div className='flex gap-4 text-2xl text-white mx-auto justify-center mt-2'>
                    <p><FaFacebook /></p>
                    <p><FaSquareInstagram /></p>
                    <p><FaYoutube /></p>
                </div>
            </div>
            <div className='pt-10 w-300 pb-5 flex justify-between mx-auto'>
             <div>
                <h1 className='text-sm text-gray-300'>© 2026 SunCart | All rights reserved.</h1>
             </div>
             <div className='flex gap-3 text-gray-300 text-sm'>
                <p>Privacy & Policy</p>
                <p>Terms & Condition</p>
             </div>
            </div>
        </div>
    );
};

export default Footer;