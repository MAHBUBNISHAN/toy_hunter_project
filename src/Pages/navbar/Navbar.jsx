import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../image/logo.webp'
import { AuthContext } from '../../Provider/AuthProvider';
import { getAuth, signOut } from 'firebase/auth';
import app from '../../firebase/firebase.config';


const Navbar = () => {
    const auth = getAuth(app);
    const { user } = useContext(AuthContext);

    const signout = () => {
        signOut(auth)
    }
    return (
        <div>

            <div className="navbar bg-neutral text-neutral-content flex justify-between ">
                <div className='flex flex-col'>

                    <a className="btn btn-ghost normal-case text-xl bg-green-400 mx-2">Toy Summation</a>
                    <img src={logo} alt="" className='h-10 w-20 m-2 rounded-md' />

                </div>
                <div className='mx-3'>

                    <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to="/allToy">All Toy </Link>


                    {
                        user?.accessToken ?
                            <>
                                <Link className="btn btn-ghost normal-case text-xl" to="/mytoys">My Toys </Link>
                                <Link className="btn btn-ghost normal-case text-xl" to="/add">Add a Toy</Link>
                                <button onClick={signout} className="btn btn-ghost normal-case text-xl">Logout</button>
                            </>
                            :
                            <>
                                <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
                                <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
                            </>

                    }

                    <Link className="btn btn-ghost normal-case text-xl" to="/blog">Blog</Link>

                </div>
            </div>
        </div>
    );
};

export default Navbar;