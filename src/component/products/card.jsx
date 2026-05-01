'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const Card = ({ data }) => {
    const userData = authClient.useSession();
    const user = userData.data?.user;
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mx-auto container'>
            {
                data.slice(0, 3).map(data => {
                    return (
                        <div key={data.id}>
                            <div className="card bg-base-100 w-full shadow-sm h-[400px]">
                                <figure className="px-10 pt-10">
                                    <Image
                                        width={360} height={260}
                                        src={data.image}
                                        alt="Shoes"
                                        className="rounded-xl p-8" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-xl">{data.name}</h2>
                                    <div className='flex gap-20 justify-between items-center mt-2'>
                                        <p className='text-xl font-extrabold'><span>Price: </span>${data.price}</p>
                                        <div className='flex gap-2 items-center'>
                                            <p className='text-orange-300 text-lg font-bold'><FaStar /></p>
                                            <p className='text-orange-300 text-lg font-bold'><FaStar /></p>
                                            <p className='text-orange-300 text-lg font-bold'><FaStar /></p>
                                            <p className=' text-lg font-bold'>{data.rating}</p>
                                        </div>
                                    </div>

                                    {
                                        user && <Link href={`/home/${data.id}`}><button className="btn bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold rounded-full mt-5">View Details</button></Link>
                                    }
                                    {
                                        !user && <Link href={'/signin'}><button className="btn w-full bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold rounded-full mt-5">View Details</button></Link>
                                    }                </div>
                            </div>
                        </div>

                    )
                })
            }
        </div>
    );
};

export default Card;