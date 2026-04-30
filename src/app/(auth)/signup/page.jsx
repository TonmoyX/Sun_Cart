'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { RedirectType, redirect } from 'next/navigation';
import React from 'react';
import { IoLogoGoogle } from 'react-icons/io';
import { toast } from 'react-toastify';

const SignUpPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

         const {data, error} = await authClient.signUp.email({
          name : userData.name,
          image : userData.image,      
          email : userData.email,
          password : userData.password,
        });
        if(data?.user){
            toast.success("SignUp Successfully..!!!")
            redirect(`/home`, RedirectType.push)
        }
    }
      const handleGoogleSignUp = async () => {
                const data = await authClient.signIn.social({
                    provider: "google",
                });
            }
    return (
        <div className='container mx-auto justify-center mt-10'>
            <form onSubmit={onSubmit}>
            <fieldset className="fieldset bg-base-200 border-base-300 mx-auto mb-15 rounded-box w-xs border p-4">
                <legend className="fieldset-legend text-lg">SignUp</legend>
 
                <label className="label">Name</label>
                <input type="text" name='name' className="input" placeholder="Name" />
                
                <label className="label">Image URL</label>
                <input type="text" name='image' className="input" placeholder="Image URL" />
 
                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" name='password' className="input" placeholder="Password" />

                <button className="btn btn-neutral mt-4">SignUp</button>
                <p className="text-center">or</p>
                                    <button onClick={handleGoogleSignUp} className="btn btn-primary text-white"><IoLogoGoogle /> SignUp with google</button>
            <p className='text-center text-lg'>You have an account ? <Link href={'/signin'}><span className='text-blue-600'>SignIn</span></Link></p>
            </fieldset>
            </form>
        </div>
    );
};

export default SignUpPage;