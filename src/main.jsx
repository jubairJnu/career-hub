import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Component/Layout/Layout.jsx';
import Statics from './Component/Statics/Statics.jsx';
import Home from './Component/Home/Home.jsx';
import Appliedjob from './Component/AppliedJob/Appliedjob.jsx';
import Blog from './Component/Blog/Blog.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout></Layout>,
    children:[
      {
        path:'statics',
        element:<Statics></Statics>
      },
      {
        path:'/',
        element:<Home></Home>,
        loader: () => fetch('jobs.json')
        
      },
      {
        path:'applied',
        element:<Appliedjob></Appliedjob>
      },
      {
        path:'blog',
        element:<Blog></Blog>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
