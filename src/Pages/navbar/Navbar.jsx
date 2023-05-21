import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            
        <div className="navbar bg-neutral text-neutral-content flex justify-between ">
            <div>

    <a className="btn btn-ghost normal-case text-xl bg-fuchsia-300 mx-2">Toy Summation</a>
    <img src="" alt="" />
            </div>
<div className='mx-3'>
    
<Link className="btn btn-ghost normal-case text-xl"  to="/">Home</Link>
<Link className="btn btn-ghost normal-case text-xl"  to="/allToy">All Toy </Link>
<Link className="btn btn-ghost normal-case text-xl"  to="/">My Toy </Link>
<Link className="btn btn-ghost normal-case text-xl"  to="/">Add a Toy</Link>
<Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
<Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
<Link className="btn btn-ghost normal-case text-xl" to="/blog">Blog</Link>

</div>
</div>
    </div>
    );
};

export default Navbar;