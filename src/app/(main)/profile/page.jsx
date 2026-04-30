'use client'
import UpdateUserModal from '@/component/UpdateUserModal/userProfilemodal';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';
const ProfilePage = () => {
    const userData = authClient.useSession()
    const user = userData.data?.user;

    return (
        <div className='mx-auto justify-center flex flex-col mt-10 mb-10 '>
            <div className='card bg-base-100 w-96 shadow-sm py-10'>
            <div className="avatar mx-auto ">
                <div className="w-20 rounded-full">
                    <Image src={user?.image} alt={'avatar'} width={5} height={5} />
                </div>
            </div>
            <h1 className='text-center text-2xl font-bold mt-2'>{user?.name}</h1>
            <h1 className='text-center text-xl text-gray-400 font-bold mt-2'>{user?.email}</h1>
            {/* <button className='btn w-60 flex mx-auto mt-4 btn-primary rounded-full'><FaEdit /> Update Profile</button> */}
            <div className='flex mx-auto justify-center mt-4'><UpdateUserModal/></div>
            </div>
        </div>
    );
};

export default ProfilePage;