import React from 'react';
import Gallery from './Gallery';
import Banner from './Banner';
import Toy from '../Toy/Toy';

const Home = () => {
    return (
        <div>
       <h1 className=' text-5xl font-bold text-teal-800 text-center my-5'> Welcome to Toy Enterpot</h1>
       <Banner></Banner>
       <h3 className=' text-3xl font-bold text-purple-600 text-center my-3'> Gallery</h3>
       <Gallery></Gallery>
       <Toy></Toy>
        </div>
    );
};

export default Home;