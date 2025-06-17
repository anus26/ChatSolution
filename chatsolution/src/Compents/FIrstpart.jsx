import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { HiLockClosed } from "react-icons/hi";
import { BsFillUnlockFill } from "react-icons/bs";
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
      
    </div>

  )}
</>
  )
}

export default FIrstpart