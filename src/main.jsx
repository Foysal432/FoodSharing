import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Pages/Register/Register';
import Provider from './config/Provider';
import { Toaster } from 'react-hot-toast';
import AddFood from './Pages/AddFood/AddFood';
import PrivateRoute from './Private/PrivateRoute';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[{
      path:'/',
      element:<Home></Home>
    }]
  },
  {
    path:'login',
    element:<Login></Login>
  },
  {
    path:'register',
    element:<Register></Register>
  },
  {
    path:'/addfood',
    element:<PrivateRoute><AddFood></AddFood></PrivateRoute>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider>
   <RouterProvider router={router} />
   </Provider>
   <Toaster
/>
  </React.StrictMode>,
)
