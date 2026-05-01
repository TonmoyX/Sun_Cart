import React from 'react';
import ProductsCards from '@/component/products/ProductsCards';
const ProductsPage = async () => {
  const res = await fetch(`${process.env.BETTER_AUTH_URL}/data.json`);
    const data = await res.json();
    return (
       <ProductsCards data={data}></ProductsCards>
    );
};

export default ProductsPage;