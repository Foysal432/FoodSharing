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
import ShowAll from './Pages/ShowAll/ShowAll';
import SingleFood from './Components/SingleFood/SingleFood';
import Error from './Components/Error';
import ManageFood from './Pages/ManageFood/ManageFood';
import Update from './Pages/Update/Update';
import AvailavbleFood from './Pages/AvailableFood/AvailavbleFood';
const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Error></Error>,
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
    element:<PrivateRoute><AddFood></AddFood></PrivateRoute>,
   
  },
  {
    path:'/showall',
    element:<ShowAll></ShowAll>
    // element:<AvailavbleFood></AvailavbleFood>
  },
  {
    path:'/addfoods/:id',
    element:<PrivateRoute><SingleFood></SingleFood></PrivateRoute>, 
    loader:({params})=>fetch(`https://foodsharing-delta.vercel.app/addfoods/${params.id}`)
  },
  {
    path:'/managefood',
    element:<PrivateRoute><ManageFood></ManageFood></PrivateRoute>,
    loader:()=>fetch('https://foodsharing-delta.vercel.app/addfoods')
  },
  {
    path:'/update/:id',
    element:<Update></Update>,
    loader:({params})=>fetch(`https://foodsharing-delta.vercel.app/addfoods/${params.id}`)
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
