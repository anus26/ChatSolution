import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import ChatAI from '../Zustand/ChatAI';

// import { Link } from 'react-router-dom';

const Secondpart = () => {
  const [chat, setChat] = useState('');
  const {questionList, addQuestion}=ChatAI()


  const handleClick = async(e) => {
    e.preventDefault();
    console.log('chat:', chat);
try {
  const res=await axios.post('https://chatsolution-backendd-production.up.railway.app/api/v1/message',{question:chat},{
    withCredentials:true
    
  })
  const answer=res.data.answer
addQuestion( prev =>[...prev,{question:chat,message:answer}])
  setChat('');
} catch (error) {
  
}





  };

  return (
    <>
      <section className="h-screen overflow-y-auto bg-white text-black">
        {/* <div className='flex items-end justify-end'>

       <button  className='rounded-md  mt-2  w-24 hover:bg-darkCyan text-black bg-light hover:text-black py-2 transition-all duration-300'><Link to='/login'>Login</Link></button>
              <button  className='rounded-md  mt-2  w-24 hover:bg-darkCyan text-black bg-light hover:text-black py-2 transition-all duration-300'><Link to='/Singup'>Singup</Link></button>
        </div>  */}
        <h1 className='flex  items-center justify-center m-5 text-2xl font-special t' >
          
          ChatSolution</h1>
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
             <div className="space-y-4">
        {Array.isArray(questionList) && questionList.slice(-1).map((chat, index) => (
          <div key={index} className="bg-gray-100 p-3 rounded">
            <p><strong>Q:</strong> {chat.question}</p>
            <p><strong>A:</strong> {chat.message}</p>
          </div>
           ))}
           </div>
          <form onSubmit={handleClick} className="w-full max-w-md">
            <Box sx={{ width: '100%' }}>
              <TextField
                fullWidth
                label="Enter your message"
                id="fullWidth"
                value={chat}
                onChange={(e) => setChat(e.target.value)}
              />
              <button
                type="submit"
                className="mt-4 w-full py-2 bg-black text-white hover:bg-darkCyan hover:text-white rounded-md transition-all duration-300"
              >
                Submit
              </button>
            </Box>
          </form>
           {/* <div className="space-y-4">
        {questionList.map((chat, index) => (
          <div key={index} className="bg-gray-100 p-3 rounded">
            <p><strong>Q:</strong> {chat.question}</p>
            <p><strong>A:</strong> {chat.answer}</p>
          </div>
           ))}
           </div> */}
        </div>
      </section>
    </>
  );
};

export default Secondpart;