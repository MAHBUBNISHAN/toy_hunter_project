import { createBrowserRouter } from "react-router-dom";


import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Registation/Register";
import Blog from "../Pages/Blog/Blog";
import AllToy from "../Pages/AllToy/AllToy";
import Bookings from "../Pages/Bookings/Bookings";
import CheckOut from "../Pages/Checkout/CheckOut";
import BookService from "../Pages/BookService/BookService";
import RequireAuth from "../components/RequireAuth";
import Test from "../Pages/Test/Test";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import AddToy from "../Pages/AddToy/AddToy";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main> ,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/mytoys',
          element:<RequireAuth><MyToys/></RequireAuth>,
         
        },
        {
          path:'/toy/update/:id',
          element:<RequireAuth><UpdateToy/></RequireAuth>,
         
        },
      
        {
          path:'/checkout/:id',
          element:<CheckOut></CheckOut>,
          loader:({params})=> fetch(`https://toy-server-site-xi.vercel.app/categories/${params.id}`)
        },
        {
         path:'/allToy',
         element:<AllToy/>
        },
        {
         path:'/add',
         element:<RequireAuth><AddToy/></RequireAuth>
        },
        {
          path:'/toy/:id',
          element:<RequireAuth><ToyDetails/></RequireAuth>
        }
      ]
    },
  ]);
  export default router;