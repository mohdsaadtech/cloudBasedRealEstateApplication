
import React, { useState } from 'react';
import{useForm} from 'react-hook-form';

function Addlisting() {
  const [Title,setTitle]=useState("");
  const[Address,setAddress]=useState("");
  const[Description,setDescription]=useState("");
  const{register, formState:{errors}, handleSubmit,}= useForm();
  const onSubmit =(data)=>console.log(data);
  async function submit(){
    let item={Title,Address,Description};
   let result = await fetch("http://localhost:5000/users/addUser",{
    method:'POST',
    headers :{
      "Content-Type":"application/x-www-form-urlencoded",
      "Accept":"application/x-www-form-urlencoded"
    },
    body: JSON.stringify(item)
   });
   result= await result.json();
   localStorage.setItem(JSON.stringify(result))
   
  }
  return<div className='relative w-full h-screen bg-zinc-900/80'>
    <div className=' flex justify-center items-center h-full bg-violet-600'>
  
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-[400px] w-full mx-auto bg-violet-50 p-8'>
    <h2 className='text-4xl font-bold text-center py-8'><span className='text-violet-800 font-semibold'>Add</span>listings.</h2>
     
     <div className='flex flex-col mb-4'>
       <label  className='font-semibold'>Title</label>
       <input className='border relative bg-white p-2' type ="text" {...register("title",{required:true})} onChange={(e)=>setTitle(e.target.value)}/>
       <error className='text-red-700'>
        {errors.title?.type === "required" &&"Title is required"}
       </error>
       </div>
       <div className='flex flex-col mb-4'>
         <label  className='font-semibold'>Address</label>
         <input className='border relative bg-white p-2' type="text"{...register("Address",{required:true})}onChange={(e)=>setAddress(e.target.value)}/>
         <error className='text-red-700'>
        {errors.Address?.type === "required" &&"Address is required"}
       </error>
       </div>
       <div className='flex flex-col mb-4'>
         <label  className='font-semibold'>Description</label>
         <textarea className='border border-gray-300 focus:border-violet-700 rounded w-full p-4 h-36 text-sm text-gray-400 outline-none resize-none' type="text"{...register("Description",{required:true})}onChange={(e)=>setDescription(e.target.value)}/>
         <error className='text-red-700'>
        {errors.Description?.type === "required" &&"Description is required"}
       </error>
       </div>
       <button onSubmit={submit} className='btn btn-primary w-full mt-8 py-3 bg-violet-800 hover:bg-violet-600 relative text-white'>submit</button>
    </form>
    </div>
  </div>
  
  
  
  
  
  
  
}

export default Addlisting;