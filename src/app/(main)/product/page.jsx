import React from 'react';
import ProductsCards from '@/component/products/ProductsCards';
const ProductsPage = async () => {
  // const res = await fetch(`http://localhost:3000/data.json`);
  const res = await fetch(`${process.env.BETTER_AUTH_URL}/data.json`,{
    cache:`no-store`
  });
  const data = await res.json();
  return (
    <div className='flex flex-col mx-atuo'>
      <h1 className='text-center text-4xl my-10 font-bold text-pink-400'>All <span className='text-purple-500'>Products</span></h1>
      <ProductsCards data={data}></ProductsCards>
    </div>
  );
};

export default ProductsPage;