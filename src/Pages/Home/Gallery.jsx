import React from 'react';
import img1 from '../../image/photo1.jpg';
import img2 from '../../image/photo2.jpg';
import img3 from '../../image/photo3.jpg';
import img4 from '../../image/photo4.jpg';
import img5 from '../../image/photo5.jpg';
import img6 from '../../image/photo6.jpg';
import img7 from '../../image/photo7.webp';
import img8 from '../../image/photo8.jpeg';
import img9 from '../../image/photo9.jpeg';

const Gallery = () => {
    return (
        <div className=' border-2 p-8 grid grid-cols-3 gap-3 align-middle  justify-center'>
            <img src={img1} alt="" className='h-100 w-1/3 rounded-lg mx-auto' />
            <img src={img2} alt=""  className='h-100 w-1/3 rounded-lg mx-auto' />
            <img src={img3} alt=""  className='h-100 w-1/3 rounded-lg mx-auto'/>
            <img src={img4} alt="" className='h-100 w-1/3 rounded-lg mx-auto'/>
            <img src={img5} alt="" className='h-100 w-1/3 rounded-lg mx-auto' />
            <img src={img6} alt="" className='h-100 w-1/3 rounded-lg mx-auto'/>
            <img src={img7} alt="" className='h-100 w-1/3 rounded-lg mx-auto'/>
            <img src={img8} alt="" className='h-100 w-1/3 rounded-lg mx-auto'/>
            <img src={img9} alt="" className='h-100 w-1/3 rounded-lg mx-auto'/>

        </div>
    );
};

export default Gallery;