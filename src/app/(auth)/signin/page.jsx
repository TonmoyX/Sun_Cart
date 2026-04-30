'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { RedirectType, redirect } from 'next/navigation';
import React from 'react';
import { IoLogoGoogle } from 'react-icons/io';
import { toast } from 'react-toastify';

const SignInPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
            callbackURL: '/home'
        });
       
    }
     const handleGoogleSignIn = async () => {
            const data = await authClient.signIn.social({
                provider: "google",
            });
        }

    return (
        <div className='container mx-auto justify-center mt-10'>
            <form onSubmit={onSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 mx-auto mb-15 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend text-lg">Login</legend>

                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />

                    <button className="btn btn-neutral mt-4">Login</button>
                    <p className="text-center">or</p>
                    <button onClick={handleGoogleSignIn} className="btn btn-primary text-white"><IoLogoGoogle /> Signin with google</button>
                    <p className='text-center text-lg'>You have no account ? <Link href={'/signup'}><span className='text-blue-600'>SignUp</span></Link></p>
                </fieldset>
            </form>
        </div>
    );
};

export default SignInPage;