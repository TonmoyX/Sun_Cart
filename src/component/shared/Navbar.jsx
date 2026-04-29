import React from 'react';
import NavLink from './NavLink';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className=''>
            <div className="navbar shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu gap-4  menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {/* link */}
                            <li><NavLink href='/'>Home</NavLink></li>
                            <li><NavLink href='product '>Product</NavLink></li>
                            <li><NavLink href='/na'>My Profile</NavLink></li>
                        </ul>
                    </div>
                    <Link href={'/'} className=" text-xl font-extrabold text-pink-400">Sun<span className='text-purple-500 font-extrabold'>Cart</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu gap-4 menu-horizontal px-1">
                        <li><NavLink href='/'>Home</NavLink></li>
                        <li><NavLink href='/product'>Product</NavLink></li>
                        <li><NavLink href='/na'>My Profile</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link href={'/signin'} className="btn bg-gradient-to-r from-pink-400 to-purple-500 text-white font-bold">SignIn</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;