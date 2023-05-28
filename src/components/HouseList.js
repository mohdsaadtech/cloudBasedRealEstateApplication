import React, { useContext, useState, useEffect } from 'react';


import { HouseContext } from './HouseContext';

import House from './House';

import { Link } from 'react-router-dom';

import { ImSpinner2 } from 'react-icons/im';

import axios from "axios";
import Sidebar from './Sidebar';


const HouseList = () => {
const [workData,setWorkData] = useState();

const [houseData, setHouse] = useState(null);

useEffect(() => {
  axios.get("http://localhost:5000/listings").then((response) => {
    
    console.log('house1 ' + JSON.stringify(response.data));
    setHouse(response.data);
  });
}, []);



  const { houses, loading } = useContext(HouseContext);

  if (loading) {
    return (
      <ImSpinner2 className='mx-auto animate-spin text-violet-700 text-4xl mt-[200px]' />
    );
  }

  if (houses.length < 1) {
    return (
      <div className='text-center text-3xl text-gray-400 mt-48'>
        Sorry, nothing was found.
      </div>
    );
  }

  return (
    <section className='mb-20'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
          {houseData && houseData.map((house, index) => {
            return (
              <Link to={`/Property/${house._id}`} key={index}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
      </div>
      
    </section>
  );
};

export default HouseList;
