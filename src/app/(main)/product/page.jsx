import React from 'react';
import ProductsCards from '@/component/products/ProductsCards';
const ProductsPage = async () => {
  const res = await fetch('http://localhost:3000/data.json');
    const data = await res.json();
    return (
       <ProductsCards data={data}></ProductsCards>
    );
};

export default ProductsPage;