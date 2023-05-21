import React from 'react';
import img1 from '../../image/photo1.jpg'
import img2 from '../../image/photo2.jpg'
import img3 from '../../image/photo3.jpg'
import img4 from '../../image/photo4.jpg'
import img5 from '../../image/photo5.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-2/3 mx-auto h-1/2 my-auto" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-2/3 mx-auto h-1/2 my-auto" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-2/3 mx-auto h-1/2 my-auto" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} className="w-2/3 mx-auto h-1/2 my-auto" />
    div 
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;
