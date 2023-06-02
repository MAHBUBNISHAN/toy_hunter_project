import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const BookService = () => {
    const {user}=useContext(AuthContext);
    const [bookings,setBookings]=useState([])
    const url=`https://toy-server-site-xi.vercel.app/bookings?email=${user.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setBookings(data))
    },[])
    return (

        <div>
           <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head*/}
    <thead>
      <tr>
        <th>id</th>
        <th>Name</th>
        <th>category</th>
        <th>price</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>{bookings.id}</th>
        <td>{bookings.name}</td>
        <td>{bookings.category}</td>
        <td>{bookings.price}</td>
      </tr>
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default BookService;