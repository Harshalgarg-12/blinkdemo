import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './page/MainLayout'
import Home from './page/Home'
import AddTocart from './page/AddTocart'
import Dairypage from './page/Dairypage'

export default function App() {
    const routers = createBrowserRouter(
    [
    {
      path:'/',
      element:<MainLayout/>,
      children:[
        { 
          path:'',
          element:<Home/>
        },
        { 
          path:'cart', 
          element:<AddTocart/>
    },
    {
      path:'dairy',
      element:<Dairypage/>
    }
  ]
}
    ]
) 
  return (
    <RouterProvider router={routers} />
  )
}
