import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';
import { BiLogOutCircle } from "react-icons/bi";
const Logout = () => {
  const handlelogout=async()=>{
    try {
      const response=await axios.post('http://localhost:5000/api/v1/logout')
      localStorage.removeItem('ChatAI')
      console.log(response);


  toast.success("logout successfully")
  window.location.reload()
    } catch (error) {
      console.error("Error:",error);
      
    }
  }
  return (
<>
<button className='m-3 hover:text-darkCyan font-special text-xl'> <BiLogOutCircle  onClick={handlelogout}/></button>
</>
)
}

export default Logout