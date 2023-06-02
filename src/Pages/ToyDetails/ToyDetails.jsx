import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ToyDetails = () => {
    const { id } = useParams();
    const [toy, setToy] = useState({});

    useEffect(() => {
        fetch(`https://toy-server-site-xi.vercel.app/categories/${id}`)
            .then(res => res.json())
            .then(data => setToy(data))
            .catch(error => console.error(error))
    }, [id]);
    // console.log(toy)
    return (
        <div className="container mx-auto min-h-[550px]">
            <div className="flex flex-wrap items-center">
                <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                    <img src={toy?.img} alt={toy?.category} className="w-full" />
                </div>
                <div className="w-full md:w-1/2 lg:w-2/3 p-4">
                    <h1 className="text-2xl font-bold mb-2">{toy?.name}</h1>
                    <p className="text-lg mb-2">Seller: {toy?.sellerName}</p>
                    <p className="text-gray-500 mb-4">Seller Email : {toy?.sellerEmail}</p>
                    <p className="text-lg mb-2">${toy?.price}</p>
                    <div className="flex items-center mb-4">
                        <span className="text-yellow-500">{toy?.rating} stars</span>
                        <svg
                            className="w-4 h-4 text-yellow-500 ml-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 2.5l2.5 5.153 5.549.806-4 3.898.947 5.503L10 16.65l-4.995 2.71.947-5.503-4-3.898 5.548-.805L10 2.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <p className="text-lg mb-2">Available Quantity: {toy?.quantity}</p>
                    <p className="mb-4">{toy?.description}</p>
                    {/* Add any other components or sections as needed */}
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;