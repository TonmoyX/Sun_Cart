'use client'
import React from 'react';
import NavLink from './NavLink';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';

const Navbar = () => {
    const userData = authClient.useSession()
    const user = userData.data?.user
    console.log(user)

    const handleSignOut = async () => {
        await authClient.signOut();
    }

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
                            <li className='font-semibold'><NavLink href='/'>Home</NavLink></li>
                            <li className='font-semibold'><NavLink href='product '>Products</NavLink></li>
                            {!user && <li className='font-semibold '><NavLink href='/signin'>My Profile</NavLink></li>}
                            {user && <li className='font-semibold'><NavLink href='/profile'>My Profile</NavLink></li>}
                        </ul>
                    </div>
                    <Link href={'/'} className=" text-xl font-extrabold text-pink-400">Sun<span className='text-purple-500 font-extrabold'>Cart</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu gap-4 menu-horizontal px-1">
                        <li className='font-semibold'><NavLink href='/'>Home</NavLink></li>
                        <li className='font-semibold'><NavLink href='/product'>Products</NavLink></li>
                        {!user && <li className='font-semibold'><NavLink href='/signin'>My Profile</NavLink></li>}
                        {user && <li className='font-semibold'><NavLink href='/profile'>My Profile</NavLink></li>}
                    </ul>
                </div>
                {!user && <div className="navbar-end">
                    <Link href={'/signin'} className="btn bg-gradient-to-r from-pink-400 to-purple-500 text-white font-bold">SignIn</Link>
                </div>
                }
                {user && <div className="navbar-end gap-4">
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <Image src={user?.image} alt={'avatar'} width={5} height={5} />
                        </div>
                    </div>
                    <Link href={'/'} onClick={handleSignOut} className="btn bg-gradient-to-r from-pink-400 to-purple-500 text-white font-bold">SignOut</Link>
                </div>
                }
            </div>
        </div>
    );
};

export default Navbar;