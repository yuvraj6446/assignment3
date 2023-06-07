import React from 'react'
import { herobg } from './data';
import Cards from "./Cards";
// import Summary from "./Summary"
// import Card from './Card';
// import {BrowserRouter , Outlet, Route, Routes } from 'react-router-dom';

const Home = ({data,setsummaryData}) => {

  

    
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

   <Cards setsummaryData={setsummaryData} data={data} />





     
    </div>
  
    
   

    </div>
  )
}





export default Home;
