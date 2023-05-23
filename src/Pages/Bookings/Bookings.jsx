import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Bookings = () => {
    const services =useLoaderData();
    console.log(categorys)
    const {_id,category,price}=services;
    return (
        <div>
            <h3> Book Service:{category}</h3>
        </div>
    );
};

export default Bookings;
