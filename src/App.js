import React from "react";
import {apiUrl,filterData} from "./data";
import Navbar from "./components/Navbar";
import Cards from "./components/Card";
import Filter from "./components/Filter";
const App = () => {
  return <div>
    <Navbar/>
    <Filter
    filterData= {filterData} 
    />
    <Cards/>

  </div>;
};

export default App;
