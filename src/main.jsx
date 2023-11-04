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
