import React from 'react';
import Card from './card';

const Cards = ({data}) => {
    
    return (
        <div>
            <Card data={data}></Card>
        </div>
    );
};

export default Cards;