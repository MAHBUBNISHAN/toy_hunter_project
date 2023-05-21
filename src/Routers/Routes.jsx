import { createBrowserRouter } from "react-router-dom";


import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Registation/Register";
import Blog from "../Pages/Blog/Blog";
import AllToy from "../Pages/AllToy/AllToy";

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
         path:'/allToy',
         element:<AllToy></AllToy>
        }
      ]
    },
  ]);
  export default router;