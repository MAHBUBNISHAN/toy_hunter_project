import React, { useEffect, useState } from 'react';

const AllToy = () => {
    const [toys,setToys]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/catagories')
        .then(res=>res.json())
        .then(data =>setToys(data))
        .catch(error =>console.error(error))
    },[])
    return (
        <div>
          <h3 className='text-4xl text-center my-6 font-bold text-lime-500'>All Catagories</h3>
          {
            toys.map(toy=>
                <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head*/}
    <thead>
      <tr className=' font-bold text-center'>
        <th className=' text-red-500'>Id</th>
        <th className=' text-yellow-400'> Name</th>
        <th className=' text-teal-600'>Job</th>
        <th className=' text-emerald-600'>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
    
    
      {/* row 3 */}
      <tr className=' text-center text-indigo-950'>
        <th className=' text-purple-900'>{toy.id}</th>
        <td className=' text-purple-900'>{toy.category}</td>
        <td className=' text-purple-900'>{toy.seller}</td>
        <td className=' text-purple-900'>{toy.price}</td>
      </tr>
    </tbody>
  </table>
</div>
                )
          }
        </div>
    );
};

export default AllToy;