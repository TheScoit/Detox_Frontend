"use client";
import AuthContext from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'

const page = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {signup} = useContext(AuthContext);
    const router = useRouter();

    const handleSubmit = async(e)=>{
      e.preventDefault();
      try {
        await signup(email,password);
        router.push('/');
      } catch (error) {
        console.log('Signup Failed: ',error);
        
      }
    }
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100 text-black font-black'>
      <form className='bg-white p-6 rounded shadow-md' onSubmit={handleSubmit}>
        <h1 className='text-2xl mb-4'>Signup</h1>
        <div className='mb-4'>
          <label className='block mb-2' htmlFor="">Email</label>
          <input type="email" placeholder='Email' className='w-full p-2 border rounded' value={email} onChange={(e) => setEmail(e.target.value)} />
          
        </div>

        <div className='mb-4 '>
          <label className='block mb-2' htmlFor="">Password</label>
          <input type="password" placeholder='Password' className='w-full p-2 border rounded' value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button className='w-full bg-blue-600 text-white p-2 rounded'>Sign Up</button>
      </form>
    </div>
  )
}

export default page
