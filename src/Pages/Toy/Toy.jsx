import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Toy = () => {
    const [kits, setKits] = useState([]);
    useEffect(() => {
       const fetchToys = async ()=>{
        
        const res = await fetch('https://toy-server-site-xi.vercel.app/categories');
        const data = await res.json();
        setKits(data);
        // fetch()
        // .then(res => res.json())
        // .then(data => setKits(data))
        // .catch(error => console.error(error))
       }
       fetchToys()
    }, [])
    // console.log(kits)
    return (
        <div className='my-10'>
            <h2 className='text-3xl text-center underline text-green-600'> Our Product </h2>
            <div className='grid grid-cols-3 gap-5'>
                {
                    kits.map(kit =>
                        <div key={kit._id} className='flex flex-row items-center align-middle justify-center border-2 border-slate-800 m-4 p-2 rounded-lg'>
                            <div>
                                <img src={kit.img} alt="" className='h-40 w-2/3 rounded-md ' />
                            
                                <div className="flex justify-end gap-2 mt-5">
                                    {/* <Link to={`/checkout/${kit._id}`}>
                                        <button className='btn btn-secondary'>Book Now</button>
                                    </Link> */}
                                    <Link to={`/toy/${kit._id}`}>
                                        <button className='btn btn-primary'>Details</button>
                                    </Link>
                                </div>

                            </div>
                            <div className='my-auto'>
                            <h3 className='text-xl my-2 font-bold text-red-400'>Name: {kit.name}</h3>
                                <h4>Category: {kit.category}</h4>
                                <h4>price: ${kit.price}</h4>
                                <h2>Seller Name: {kit.sellerName}</h2>
                            </div>


                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Toy;