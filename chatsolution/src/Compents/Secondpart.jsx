import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ChatAI from '../Zustand/ChatAI';
import axios from 'axios';

const Secondpart = () => {
  const [chat, setChat] = useState('');
  const {questionList, setQuestion}=ChatAI()


  const handleClick = async(e) => {
    e.preventDefault();
    console.log('chat:', chat);
try {
  const res=await axios.post('http://localhost:5000/api/v1/message',{question:chat},{
    withCredentials:true
    
  })
  const answer=res.data.answer
setQuestion({question:chat,answer})
  setChat('');
} catch (error) {
  
}





  };

  return (
    <>
      <section className="h-screen overflow-y-auto bg-white text-black">
        <h1 className='flex  items-center justify-center m-5 text-2xl font-special t' >ChatSolution</h1>
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
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
           <div className="space-y-4">
        {questionList.map((chat, index) => (
          <div key={index} className="bg-gray-100 p-3 rounded">
            <p><strong>Q:</strong> {chat.question}</p>
            <p><strong>A:</strong> {chat.answer}</p>
          </div>
           ))}
           </div>
        </div>
      </section>
    </>
  );
};

export default Secondpart;
