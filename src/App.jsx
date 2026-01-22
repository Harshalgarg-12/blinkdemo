import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MainLayout from './page/MainLayout.jsx'
import Home from './page/Home.jsx'
import AddTocart from './page/AddTocart.jsx'
import Dairypage from './page/Dairypage.jsx'

export default function App() {
  const routers = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: 'cart',
          element: <AddTocart />
        },
        {
          path: 'dairy',
          element: <Dairypage />
        }
      ]
    }
  ])

  return <RouterProvider router={routers} />
}
