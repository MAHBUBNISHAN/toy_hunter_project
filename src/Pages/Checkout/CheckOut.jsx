import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const CheckOut = () => {
    const services =useLoaderData();
    
    const {_id,category,price,img,}=services;
    const {user}=useContext(AuthContext)

    const handleCheckout=event=>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName: name, 
            email, 
            date, 
            img,
            category,
            service_id: _id, 
            price: price
        }

       

        fetch('http://localhost:5000/bookings', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('service book successfully')
            }
        })
    }
    return (
        <div>
            <h2>Books are:{category}</h2>
    <form onSubmit={handleCheckout}>
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input type="text" name="name" placeholder="name" defaultValue={user?.displayname} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">E-mail</span>
          </label>
          <input type="text" placeholder="email" defaultValue={user?.email} className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" name='price' placeholder="price" className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name='date' className="input input-bordered" />
          
        </div>
       <button className='btn btn-success my-6'>Order Confirm</button>
      </div>
    </div>
  </div>
</div>
    </form>
        </div>
    );
};

export default CheckOut;