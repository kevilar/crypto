import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home';
import About from './About';

function App() {


  return (
    <>
    {/* Router */}
      <ToastContainer />
      {/* <button onClick={() =>toast('relax')}>
        click
      </button> */}
      <Home/>
      <About/>



      </> 
  )
}
  

export default App
