import { useEffect, useState } from 'react';
import './App.css';
import Summary from "./components/Summary";
import Navbar from "./components/Navbar";
import Spinner from './components/Spinner'
import Home from "./components/Home";
function App() {

  const [data,setData] = useState([]);


  const [isloading,setisLoading]=useState(true);
   async  function  fetchData()
   { 
     
       try{
         
            const res=await fetch(`https://api.tvmaze.com/search/shows?q=all`);
            
            const data = await res.json();
              setData(data);
            

           
             console.log(data);
          setisLoading(false);
       }
       catch(error){

           console.error("error is in fetch data");
       }
       
         
   }


   useEffect(()=>
   {
        
       
       fetchData();
        console.log(data);
        


   },[2]);




  return (

    <div className="App">
    {
      isloading?<div className='w-[100vw] h-[100vh] flex justify-center items-center'><Spinner/></div>:<div>
        <Navbar/>
      <Home data={data}/>
    </div>
    }
    
  
    </div>
  );
}

export default App;