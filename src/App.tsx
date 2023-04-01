import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Cuisine, ErrorPage, Home, Recipe, Searched } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
    // children: [
    //   {
    //     path: '/cuisine/:id',
    //     element: <Cuisine />
    //   },
    //   {
    //     path: '/searched/:search',
    //     element: <Searched />
    //   },
    //   {
    //     path: '/recipe/:name',
    //     element: <Recipe />
    //   }
    // ]
  },
  {
    path: '/cuisine/:id',
    element: <Cuisine />,
    errorElement: <ErrorPage />
  },
  {
    path: '/searched/:search',
    element: <Searched />,
    errorElement: <ErrorPage />
  },
  {
    path: '/recipe/:name',
    element: <Recipe />,
    errorElement: <ErrorPage />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
