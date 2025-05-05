import React, { useMemo } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { AuthLayout, Login, Register } from './pages'

function App() {

  const router = useMemo(()=> createBrowserRouter([
    {
      path: '/',
      element: <AuthLayout/>,
      children: [
        {index: true, element:<Login/>},
        {path: "register", element:<Register/>},
      ]
    },
    {path: '*', element: <Navigate to={'/'} replace/>}
  ]),[])

  return (
    <RouterProvider router={router}/>
  )
}

export default App