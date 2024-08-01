import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Technologies from './components/Technologies/Technologies'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AppLayout from '../AppLayout'

function App() {
  const routes=createBrowserRouter([
    { path:'/',element:<AppLayout/>,children:[
      {index:true,element:<Hero/>},
      {path:'projects',element:<Projects/>},
      {path:'technologies',element:<Technologies/>},
  
    ]}
  ])
  return (
    <>
    <div className='bg-[#030014]  bg-opacity-98 text-white font-myFont '>
    <RouterProvider router={routes}/>

      </div>
      
    </>
  )
}

export default App
