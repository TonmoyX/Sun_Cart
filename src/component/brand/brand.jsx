import React from 'react';

const Brands = () => {
    return (
        <div>
            <h1 className='mb-10 text-6xl font-extrabold text-pink-400 text-center mt-6'>Summer <span className='bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text'>Care</span><span className='text-purple-600'> Tips</span></h1>
           <div className='grid grid-cols-3 gap-4'>
            <div className="card bg-gradient-to-r from-pink-400 to-purple-500 text-white w-96 shadow-sm">
                <div className="card-body">
                    <h2 className="text-4xl mb-2 font-bold">Hydration 💧</h2>
                    <p className='text-sm text-shadow-indigo-200'>Drink 2–3 liters of water daily. Add fruits like lemon or cucumber for better hydration.</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
                </div>
                </div>
        </div>
    );
};

export default Brands;