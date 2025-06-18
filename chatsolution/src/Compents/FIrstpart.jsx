import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { HiLockClosed } from "react-icons/hi";
import { BsFillUnlockFill } from "react-icons/bs";
import Logout from '../pages/Logout';
const FIrstpart = () => {
  const [locked,setLocked]=useState(false)

  return (
<>
{ locked ?(
 
  <button className='m-2 text-xl  ' onClick={()=>setLocked(false)}>
<HiLockClosed  className='hover:text-darkCyan ' />
 </button>
):(
    <div className='  bg-black text-white h-screen ' >

      <div className='flex  justify-between'>

       <FaBars  className='m-2 font-semibold text-xl'/>
       <button className='m-2 text-xl 'onClick={()=>setLocked(true)}>

  <BsFillUnlockFill  className='hover:text-darkCyan'/>
       </button>
      </div>
      <div className='border-t border-1 border-rgba(0,0,0,0.1) mb-4'>

      <Logout className='text-whtie justify-end text-end'/>
      </div>
    </div>

  )}
</>
  )
}

export default FIrstpart