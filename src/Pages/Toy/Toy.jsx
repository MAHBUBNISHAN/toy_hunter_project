import React, { useEffect, useState } from 'react';

const Toy = () => {
    const [kits,setKits]=useState([]);
    useEffect( ()=>{
        fetch('http://localhost:5000/toy')
        .then(res=>res.json())
        .then(data =>setKits(data))
        .catch(error =>console.error(error))
    },[])
    return (
        <div>
            <h2 className='text-2xl text-center underline text-red-300'> Our Product </h2>
            <div className='grid grid-cols-3 gap-5'>
            {
                kits.map(kit=>
                    <div className='flex flex-row align-middle justify-center border-2 border-slate-800 m-4 p-2 rounded-lg'>
                        <div>
                        <img src={kit.img} alt=""  className='h-40 w-2/3 rounded-md ' />
                        <h3 className='text-xl my-2 font-bold text-red-400'>Type: {kit.category}</h3>
                        </div>
                        <div className='my-auto'>

                        <h4>price: ${kit.price}</h4>
                        <h2>Seller: {kit.seller}</h2>
                        </div>
                        

                    </div>
            )
            }
            </div>
        </div>
    );
};

export default Toy;