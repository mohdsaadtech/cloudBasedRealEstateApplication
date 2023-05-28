import React from 'react';

// import components
import HouseList from '../components/HouseList';
import Banner from '../components/Banner';
import House from '../components/House';
import Sidebar from '../components/Sidebar';


const Home = () => {
  return (
    <div className='min-h-[2900px]'>
      
      <Banner />
      <HouseList />
      
    </div>
  );
};

export default Home;
