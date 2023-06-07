import React from 'react'
import Card from "./Card"
const Cards = ({data,setsummaryData,handleCardClick}) => {
    
  return (
    <div className='flex flex-wrap justify-center items-center gap-[3%] '>

    {
       data.map((card)=>
     
        <div key={card?.show?.id} >
     
            {
              <Card setsummaryData={setsummaryData} cardData={card} />
            }
        </div>
       )
    }
      
     

    </div>
  )
}

export default Cards
