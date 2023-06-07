import React, { useState } from 'react'
// import { useHistory } from "react-router-dom";

import { Link } from 'react-router-dom';
const Card = ({setsummaryData,cardData}) => {
    const [showless,setShowless]=useState(true);
    
    // const history = useHistory();






  return (
    <div className='flex justify-center  mt-[25px] bg-black bg-opacity-[50%] rounded-[5px] w-[250px] hover:scale-105 duration-100 pb-4  flex-col ' >
      

      {/* img */}


<div className='w-[100%] flex justify-center items-center'>
<img alt='I' className=' w-[100%] rounded-[5px] max-h-[340px]' src={cardData?.show?.image?.original} />

</div>
     

     {/* name */}

  
        <p className='font-bold justify-center flex text-yellow-400 '>
            {cardData?.show?.name}
        </p>
     

     {/* rating , language,  */}
     <div className='flex justify-center items-center px-2 flex-col'>
        <p className='text-white '>
            Rating : <span className='text-green-400'>{cardData?.show?.rating?.average}</span>
        </p>

        <p className='text-white'>
            Language : <span className='text-blue-500'>{cardData?.show?.language}</span>
        </p>
     </div>


     {/* summary */}
     <div className='text-white px-2' >
        <div>
            {
                showless?(<div >
                  {
                    cardData?.show?.summary.substr(0,80)
                  }
                </div>):
                (<div>
                    {cardData?.show?.summary.substr(0,150)}
                </div>)
            }

        </div>
        <button className='text-blue-300 font-bold' onClick={()=>setShowless(!showless)}>
        {
             showless?"Show More...":"show Less!"
        }
        </button>
     </div>


     {/* summary button */}

     <div>
       
       <button className='w-[80%] rounded-[5px] bg-green-500 hover:scale-105 duration-100 '  onClick={()=>setsummaryData(cardData)} >
       <Link to='/summary' >
        <p className='font-bold text-violet-900'>Summary</p>
       </Link>
        
       </button>

        
     </div>


    </div>
  )
}

export default Card
