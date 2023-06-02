import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllToy = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch('https://toy-server-site-xi.vercel.app/categories')
      .then(res => res.json())
      .then(data => setToys(data))
      .catch(error => console.error(error))
  }, [])
  //     return (
  //         <div>
  //           <h3 className='text-4xl text-center my-6 font-bold text-lime-500'>All Catagories</h3>
  //           {
  //             toys.map(toy=>
  //                 <div className="overflow-x-auto">
  //   <table className="table w-full">
  //     {/* head*/}
  //     <thead>
  //       <tr className=' font-bold text-center'>
  //         <th className=' text-red-500'>Id</th>
  //         <th className=' text-yellow-400'> Category</th>
  //         <th className=' text-teal-600'> Seller</th>
  //         <th className=' text-emerald-600'>Price</th>
  //       </tr>
  //     </thead>
  //     <tbody>


  //       {/* row 3 */}
  //       <tr className=' text-center text-indigo-950'>
  //         <th className=' text-purple-900'>{toy._id}</th>
  //         <td className=' text-purple-900'>{toy.category}</td>
  //         <td className=' text-purple-900'>{toy.seller}</td>
  //         <td className=' text-purple-900'>{toy.price}</td>
  //       </tr>
  //     </tbody>
  //   </table>
  // </div>
  //                 )
  //           }
  //         </div>
  //     );

  if(!toys.length) return (<div  className="text-center min-h-screen items-center justify-center text-2xl text-red-500 flex ">Loading...</div>
  )
  return (
    <div className="container mx-auto py-5">
      <table className="min-w-full divide-y divide-gray-200 border p-5 bg-white">
        <thead className="bg-white">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Seller Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Toy Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Available Quantity
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {toys.map((toy) => (
            <tr key={toy._id}>
              <td className="px-6 py-4 whitespace-nowrap">
                {toy.sellerName ? toy.sellerEmail : '-'}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{toy?.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{toy?.category}</td>
              <td className="px-6 py-4 whitespace-nowrap">${toy?.price}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {toy?.quantity}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link to={`/toy/${toy?._id}`} className="px-4 py-2 bg-blue-500 text-white rounded-md">
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};

export default AllToy;