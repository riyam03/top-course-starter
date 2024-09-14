import React from 'react';
import { apiUrl, filterData } from './data';
import Navbar from './components/Navbar';
import Cards from './components/Card';
import Filter from './components/Filter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div>
      <Navbar />
      <Filter filterData={filterData} />
      <Cards />
      <ToastContainer />
    </div>
  );
};

export default App;
