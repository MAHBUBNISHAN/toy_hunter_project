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
          path:'/bookings:id',
          element:<Bookings></Bookings>,
         
        },
      
        {
          path:'/checkout/:id',
          element:<CheckOut></CheckOut>,
          loader:({params})=> fetch(`http://localhost:5000/categories/${params.id}`)
        },
        {
         path:'/allToy',
         element:<AllToy></AllToy>
        }
      ]
    },
  ]);
  export default router;