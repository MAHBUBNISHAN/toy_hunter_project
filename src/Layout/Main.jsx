import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/navbar/navbar';
import Footer from '../Pages/Footer/Footer';
import RegistationPage from '../Pages/Registation/Register';
import Login from '../Pages/Login/Login';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;