import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MainLayout from './page/MainLayout.jsx'
import Home from './page/Home.jsx'
import AddTocart from './page/AddTocart.jsx'
import Dairypage from './page/Dairypage.jsx'
import Tobaccopage from './page/Tobaccopage.jsx'
import Munchiespage from './page/Munchiespage.jsx'
import Mouthfreshnerpage from './page/Mouthfreshnerpage.jsx'
import Coldrinkpage from './page/Coldrinkpage.jsx'
import Candiespage from './page/Candiespage.jsx'
import Hookahpage from './page/Hookahpage.jsx'

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
        },
        {
          path: 'tobacco',
          element:<Tobaccopage/>
        },
        {
          path:'munchies',
          element:<Munchiespage/>
        },
        {
          path:"mouthfreshner",
          element:<Mouthfreshnerpage/>
        },
        {
          path:'colddrinks',
          element:<Coldrinkpage/>
        },
        {
          path:'candies',
          element:<Candiespage/>
        },
        {
          path:'hookah',
          element:<Hookahpage/>
        }
      ]
    }
  ])

  return <RouterProvider router={routers} />
}
