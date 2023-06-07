import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Form from './Form';
const Summary = ({summaryData}) => {
    const [isformOpen,setisformopen]=useState(false);
  return (
    <div className='  relative h-[91vh]  items-center w-[100vw]   flex justify-center text-white' >

{/* bg */}

           
           <div className='absolute flex top-[0px] ' >
{/* img */}
<div className='w-[50%] h-[90vh]   flex  justify-center items-center '>


    <img alt="d" className='h-[90%] w-[85%] outline rounded-[5px] outline-blue-900 ' src={summaryData?.show?.image?.original} />

  </div>

  <div className='gap-[1rem] w-[50%] flex flex-col justify-center items-center '>
    {/* name */}
  
    <p className='font-bold text-[40px] text-yellow-400'>
            {summaryData?.show?.name}
        </p>
    

    {/*  */}

 {/* rating , language,  */}
 <div className='flex gap-5'>
        <p className='font-bold'>
            Rating : <span className='text-green-500'>{summaryData?.show?.rating?.average}</span>
        </p>

        <p className='font-bold'>
            Language : <span className='text-red-500'>{summaryData?.show?.language}</span>
        </p>
 </div>

        <p>
        <a href={summaryData?.show?.url}>Link: <button className='bg-blue-800 px-[20px] rounded-[5px] font-bold' >Click Here....</button></a>
            
        </p>
    

     {/* summmsry */}

     <div className='w-[80%] text-[18px]'>

        <p>{summaryData?.show?.summary}</p>
     </div>





<div className='flex flex-col w-[50%] gap-[10px] '>


           <Link  to='/' className='text-white font-bold py-1 bg-red-500  hover:outline hover:scale-[110%] duration-200 rounded-[5px]' >
            Back
           </Link>

           <button className='text-white font-bold py-1 bg-green-500 hover:outline hover:scale-[110%] duration-200 rounded-[5px]' onClick={()=>{setisformopen(true)}} >Book</button>

         
    </div>  

   

    </div>     

           </div>
{/* form */}
{isformOpen&&
<div className='absolute rounded-[5px] flex justify-center items-center  outline bg-black bg-opacity-70 h-[450px] w-[80%] sm:w-[30%]' >


           {isformOpen?(<div className='absolute z-30 flex justify-center items-center flex-col' >
            
           <div className='flex justify-center items-center flex-col'>
           <div className='flex justify-center items-center flex-col'>
           <img className='w-[120px] h-[100px]' alt="d" src={summaryData?.show?.image?.original} />

            <span className='font-bold text-[25px]' >{summaryData?.show?.name}</span>
            <div className='flex justify-center items-center gap-2'>
        <p>
            Rating : <span className='text-green-700' >{summaryData?.show?.rating?.average}</span>
        </p>

        <p>
            Language : <span className='text-yellow-700' >{summaryData?.show?.language}</span>
        </p>
        
         </div>
        <p>
        schedule : <span>{summaryData?.show?.schedule?.time} hrs  </span>
        on <span>{summaryData?.show?.schedule?.days?.[0]}</span>
        </p>
   
           </div>

            <Form/>

           </div>

           <div>
            <button className='bg-red-600 px-2 py-1 rounded-[3px] mt-[10px] font-bold hover:outline' onClick={()=>{setisformopen(false)}} >Cancel</button>
           </div>



            
          </div>):(<div>
          

          </div>)

          }


       </div>   
          
   }        
          

           {isformOpen&&<div className='w-[100vw] opacity-80 z-10 absolute bg-black h-[91vh]  ' >

</div>}
    </div>
  )
}

export default Summary
