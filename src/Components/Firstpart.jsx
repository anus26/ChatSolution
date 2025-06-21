import React, { useEffect, useState } from 'react';
import { FaBars } from "react-icons/fa";
import { HiLockClosed } from "react-icons/hi";
import { BsFillUnlockFill } from "react-icons/bs";
import axios from 'axios';
import Logout from './Logout';
import ChatAI from '../Zustand/ChatAI';

const FirstPart = () => {
  const [locked, setLocked] = useState(false);
  const {questionList,setQuestion}=ChatAI()
  

  useEffect(()=>{
const fetchMessages=async()=>{
  try {
    const response=await axios.get('https://chatsolution-backendd-production.up.railway.app/api/v1/allmessages',{
      withCredentials:true,
    })
    setQuestion(response.data.messages)
    console.log(response.data.messages);
    
  } catch (error) {
    console.error("Error:",error);
    
  }
}
fetchMessages()
},[])
  return (
    <>
      {locked ? (
        <button
          className='m-2 text-xl flex-start'
          onClick={() => setLocked(false)}
        >
          <HiLockClosed className='hover:text-darkCyan' />
        </button>
      ) : (
        <div className='bg-black text-white h-screen flex flex-col justify-between'>
          <div className='flex justify-between items-center px-4 py-2'>
            <FaBars className='text-xl font-semibold' />
            <button onClick={() => setLocked(true)}>
              <BsFillUnlockFill className='text-xl hover:text-darkCyan' />
            </button>
          </div>
{/* Get all messages */}
          <div className='border-t border-gray-500 scroll-m-3  overflow-auto touch-auto'>
                    <div className="space-y-4 overflow-hidden">
        {questionList.map((messages ,index) => (
          <div key={index} className="bg-gray-100 p-3 rounded">
            <p>  <strong>Q:</strong>{messages.question}</p>
            <p><strong>A:</strong>{messages.message}</p>
              
          </div>
           ))}
           </div>
          </div>

          <div className='border-t border-gray-600 mt-4 pt-4 px-4  '>
            <Logout/>
          </div>
        </div>
      )}
    </>
  );
};

export default FirstPart;