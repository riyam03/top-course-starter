import React, { useState,useEffect } from 'react';
import { apiUrl, filterData } from './data';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Filter from './components/Filter';
import Spinner from "./components/Spinner";
import { toast } from 'react-toastify';


const App = () => {
  const [courses,setCourses] = useState(null);
  const [loading,setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title);
  async function fetchData(){
      setLoading(true);
      try{
        let response = await fetch(apiUrl);
        let output = await response.json();
        //output-->
        setCourses(output.data);
      }
      catch(error){
        toast.error("something went wrong");

      }
      setLoading(false);
    }
     useEffect(()=>{
      fetchData();
     },[])

  return (
    <div>
      <div>
      <Navbar />
      </div>

      <div>
      <Filter filterData={filterData}
      category={category}
      setCategory={setCategory} />
      
      </div>

      <div>
      {
          loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
        }
      </div>
      
        
    </div>
  );
};

export default App;
