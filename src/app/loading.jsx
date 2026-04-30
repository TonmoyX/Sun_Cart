import React from 'react';
import { HashLoader } from 'react-spinners';
const loading = () => {
    return (
        <div className='mt-20 mb-20'>
            <h1 className='text-center'><HashLoader className='flex mx-auto'/></h1>
        </div>
    );
};

export default loading;