import Banner from '@/component/banner/banner';
import Brands from '@/component/brand/brand';
import Cards from '@/component/products/cards';
import SummerTips from '@/component/summerTips/tips';
import React from 'react';

const HomePage = async () => {
    const res = await fetch('http://localhost:3000/data.json');
    const data = await res.json();
    return (
        <div className=''>
            <Banner />
            <Cards data = {data}></Cards>
            <SummerTips></SummerTips>
            <Brands></Brands>
        </div>
    );
};

export default HomePage;