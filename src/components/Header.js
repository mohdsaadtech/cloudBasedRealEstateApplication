import React from 'react';
import { RxDashboard } from 'react-icons/rx';

// import link
import { Link } from 'react-router-dom';
// import logo
import Logo from '../assets/img/logo.svg';
const Header = () => {
  return (
    <header className='py-6  border-b'>
      <div className='container mx-auto flex justify-between items-center'>
      <div className=' float-left'>
        
        <Link to='/' class="text-2xl py-25">
        <h2 className='bg-violet-600 text-white '>CloudRealEstate</h2>
        </Link>
        </div>
        <div className='flex items-center gap-6 '>
          <Link className='hover:text-violet-900 transition' to='/login'>
            Log in
          </Link>
          <Link
            className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition'
            to='/signup'
          >
            Sign up
          </Link>
          <Link to ='About'>

          </Link>
          <Link to ='Contact'>

          </Link>
          <Link to ='Dashboard'>
            <RxDashboard size={30} className='cursor-pointer'/>  
          </Link>
        
        </div>
      </div>
    </header>
  );
};

export default Header;
