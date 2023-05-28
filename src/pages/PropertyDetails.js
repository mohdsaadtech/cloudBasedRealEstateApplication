import React, { useContext, useState, useEffect } from 'react';

// import houseData
import { housesData } from '../data';
//  useParams
import { useParams } from 'react-router-dom';
// import icons
import { BiBed, BiBath, BiArea, BiPhone } from 'react-icons/bi';
// import link
import { Link } from 'react-router-dom';

import axios from "axios";

const PropertyDetails = () => {

  const { id } = useParams();

  const [houseData, setHouse] = useState(null);

useEffect(() => {
  axios.get("http://localhost:5000/listing/" + id).then((response) => {
    setHouse(response.data);
  });
}, []);


  return (
    <>
    {houseData &&
    <div className='container mx-auto min-h-[800px] mb-14'>
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
        <div>
          <h2 className='text-2xl font-semibold'>{houseData.title}</h2>
          <h3 className='text-lg mb-4'>{houseData.address}</h3>
        </div>
        <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
          <div className='bg-green-500 py-2 text-white px-3 inline-block'>
          {houseData.type}
          </div>
          <div className='bg-violet-500 py-2 text-white px-3 inline-block'>
          {houseData.area_name}
          </div>
        </div>
        <div className='text-3xl font-semibold text-violet-600'>
          INR {houseData.rent}
        </div>
      </div>
      <div className='flex flex-col items-start gap-8 lg:flex-row'>
        <div className='max-w-[768px]'>
          <div className='mb-8'>
            <img src={houseData.image_url} alt='' />
          </div>
          <div className='flex gap-x-6 text-violet-700 mb-6'>
            <div className='flex gap-x-2 items-center'>
              <BiBed className='text-2xl' />
              <div className='text-lg font-medium'>{houseData.bedroom_count}</div>
            </div>
            <div className='flex gap-x-2 items-center'>
              <BiBath className='text-2xl' />
              <div className='text-lg font-medium'>{houseData.bathroom_count}</div>
            </div>
            <div className='flex gap-x-2 items-center'>
              <BiArea className='text-2xl' />
              <div className='text-lg font-medium'>{houseData.area} sq ft</div>
            </div>
          </div>
          <p>{houseData.description}</p>
        </div>
        <div className='flex-1 w-full mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8'>
          <div className='flex items-center gap-x-4 mb-8'>

         
          </div>
          <form className='flex flex-col gap-y-4'>
            <input
              className='border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none'
              type='text'
              placeholder='Name*'
            />
            <input
              className='border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none'
              type='text'
              placeholder='Email*'
            />
            <input
              className='border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none'
              type='text'
              placeholder='Phone*'
            />
            <textarea
              className='border border-gray-300 focus:border-violet-700 rounded w-full p-4 h-36 text-sm text-gray-400 outline-none resize-none'
              type='text'
              placeholder='Message*'
              defaultValue='Hello, I am interested in [Modern apartment]'
            />
            <div className='flex gap-x-2'>
              <button
                className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition'
                type='submit'
              >
                Send message
              </button>
              <button className='border border-violet-700 text-violet-700 hover:border-purple-600 hover:text-purple-600 rounded p-4 text-sm w-full transition'>
                Call
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
}
    </>
  );
};

export default PropertyDetails;
