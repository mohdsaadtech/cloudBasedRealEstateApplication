import React from 'react';
  import{useForm} from 'react-hook-form';
  
  function Contact() {
    const{register, formState:{errors}, handleSubmit,}= useForm();
    const onSubmit =(data)=>console.log(data);
    return<div className= 'relative w-full h-screen bg-zinc-900/80'>
       <div className=' flex justify-center items-center h-full'>
      <form onSubmit={handleSubmit(onSubmit)} className='max-w-[400px] w-full mx-auto bg-violet-50 p-8'>
      <h2 className='text-4xl font-bold text-center py-8'><span className='text-violet-800 font-semibold'>Contact</span>Us.</h2>
       
       <div className='flex flex-col mb-4'>
         <label className='font-semibold'>Name</label>
         <input className='border relative bg-white p-2' type ="text" {...register("name",{required:true})}/>
         <error className='text-red-700'>
          {errors.name?.type === "required" &&"Name is required"}
         </error>
         </div>
         <div className='flex flex-col mb-4'>
           <label  className='font-semibold'>Email</label>
           <input className='border relative bg-white p-2' type="text"{...register("Email",{required:true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i})}/>
           <error className='text-red-700'>
          {errors.Email?.type === "required" &&"Email is required"}
          {errors.Email?.type === "pattern" &&"Entered email is in wrong format"}
         </error>
         </div>
         <div className='flex flex-col mb-4'>
           <label  className='font-semibold'>Write here:</label>
           <textarea className='border border-gray-300 focus:border-violet-700 rounded w-full p-4 h-36 text-sm text-gray-400 outline-none resize-none' type="text"{...register("Description",{required:true})}/>
           <error className='text-red-700'>
          {errors.Description?.type === "required" &&"Description is required"}
         </error>
         </div>
         <button className=' w-full mt-8 py-3 bg-violet-800 hover:bg-violet-600 relative text-white'>Submit</button>
      </form>
      </div>
    </div>
  }

export default Contact;