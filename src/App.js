import React from 'react';
import logo from './logo.svg';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
function App() {

  const router= createBrowserRouter([
    {path:"/",element:<Home/>},
   
  ]);



  return (

    <RouterProvider router={router}/>
    
  );
}

export default App;
