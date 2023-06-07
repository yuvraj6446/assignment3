import { useEffect, useState } from 'react';
import './App.css';
import Summary from "./components/Summary";
import Navbar from "./components/Navbar";
import Spinner from './components/Spinner'
import Home from "./components/Home";
import { BrowserRouter ,Routes} from 'react-router-dom';
import Cards from './components/Cards';
function App() {

  const [data,setData] = useState([]);


  const [isloading,setisLoading]=useState(false);
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

          //  console.error("error is in fetch data");
       }
       
         
   }


   useEffect(()=>
   {
        
       if(data.length==0)
       {
        fetchData();
       }
        
     
       
        console.log(data);
        


   },[data]);




  return (

    <BrowserRouter className="App">
{    console.log("great")
}    {

      isloading?<div className='w-[100vw] h-[100vh] flex justify-center items-center'><Spinner/></div>:<div>
       
       
          <Navbar/>

         
      
        
      <Home data={data}/>
    </div>
    }
    
  
    </BrowserRouter>
  );
}

export default App;
