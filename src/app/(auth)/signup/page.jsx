import Link from 'next/link';
import React from 'react';

const SignUpPage = () => {
    return (
        <div className='container mx-auto justify-center mt-10'>
            <form className=''>
            <fieldset className="fieldset bg-base-200 border-base-300 mx-auto mb-15 rounded-box w-xs border p-4">
                <legend className="fieldset-legend text-lg">Login</legend>
 
                <label className="label">Name</label>
                <input type="email" name='name' className="input" placeholder="Name" />
 
                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" name='password' className="input" placeholder="Password" />

                <button className="btn btn-neutral mt-4">Login</button>
            <p className='text-center text-lg'>You have an account ? <Link href={'/signin'}><span className='text-blue-600'>SignIn</span></Link></p>
            </fieldset>
            </form>
        </div>
    );
};

export default SignUpPage;