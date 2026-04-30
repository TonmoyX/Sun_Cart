import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductDetails = async ({ params }) => {
    const { id } = await params;

    const res = await fetch('http://localhost:3000/data.json');
    const data = await res.json();

    const product = data.filter(item => item.id == id)
    // console.log(product)
    return (
        <div className='flex flex-col mx-auto mt-20 mb-15'>
            {
                product.map(pro => {
                    return (
                        <div key={pro.id}>
                            <div className="card flex flex-col md:flex-row h-100 lg:w-300 bg-base-100 shadow-sm">
                                <figure>
                                    <Image
                                        width={660} height={560}
                                        src={pro.image}
                                        alt="Shoes"
                                        className="rounded-xl" />
                                </figure>
                                <div className="card-body w-full">
                                    <h2 className="card text-5xl mb-4 font-bold">{pro.name}</h2>
                                    <h2 className="card-title text-3xl font-bold">Brand: {pro.brand}</h2>
                                    <p className='mt-4 text-xl text-gray-600'>Description: {pro.description}</p>
                                    <p className='mt-4 text-gray-600 font-extrabold'>Price: ${pro.price}</p>
                                    <p className='mt-4 text-gray-600 font-bold'>Rating: {pro.rating}</p>
                                    <div className="card-actions justify-end">
                                        <Link href={'/'}><button className="btn btn-primary">Back</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })

            }
        </div>
    );
};

export default ProductDetails;