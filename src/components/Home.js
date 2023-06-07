import React, { useState } from 'react'
import { herobg } from './data';
import Cards from "./Cards";
import Summary from "./Summary"
import Card from './Card';
import {BrowserRouter , Route, Routes } from 'react-router-dom';

const Home = ({data}) => {

    const [summaryData,setsummaryData]=useState([]);
  return (
    <div className='relative '>

    <div id='bgimg' className='fixed'>
    <img alt='Not found'  src={herobg} className='w-[100vw] h-[100vh]' />

    </div>
{/* next */}
    <div id='bg'  className='fixed  bg-black w-[100vw] h-[100vh] opacity-80 z-10'>
  
     </div>

   
{/* next */}
<div className=' absolute top-[50px]  z-10' >

    <Routes>
<Route path="/"  element={<div className='top-[70px]'><Cards setsummaryData={setsummaryData} data={data} /></div>} />


<Route path='/summary'  element={<div className='w-full  ' ><Summary  summaryData={summaryData}  /></div>}/>



    </Routes>
     
    </div>
  
    
   


    </div>
  )
}

export default Home
