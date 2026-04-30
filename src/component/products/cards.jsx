import React from 'react';
import Card from './card';
import ProductsPage from '@/app/(main)/product/page';

const Cards = ({data}) => {
    
    return (
        <div>
            <Card data={data}></Card>
        </div>
    );
};

export default Cards;