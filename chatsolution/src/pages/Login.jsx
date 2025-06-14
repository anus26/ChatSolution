import React, { useState } from 'react'

const Login = () => {
    const {email,setEmail}=useState()
    const {password ,setPassword}=useState()
    const handleLogin=(e)=>{
        e.preventDefault()
        console.log('Email',email);
        console.log('Password',password);
        
        
    }
  return (
<>
<section>
    <div className='login bg-black h-screen text-white flex flex-wrap items-center justify-center'>
       <h1 className='text-xl font-semi-bold '>Login</h1>
       <form onSubmit={handleLogin}>
        <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} value={email} />
        <input type="password"  placeholder='Password'  onChange={(e)=>setPassword(e.target.value)} value={password}/>
        <button className='bg-black text-white border-none w-24 hover:bg-black' type='login'>Login</button>
       </form>
    </div>
</section>
</>
  )
}

export default Login