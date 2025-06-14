import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const Secondpart = () => {
  const [chat ,setChat]=useState()
  const handleClick=(e)=>{
    e.preventDefault()
    console.log('chat',chat);
    setChat('')
        
  }
  return (
    <>
    <section>
        <div className='bg-lightGrey text-white h-screen'>
            
            <form onSubmit={handleClick} className='input  items-center flex justify-center'>
                
                 <Box sx={{ width: 500, maxWidth: '100%' }} className="mt-96 ">
      <TextField fullWidth label="fullWidth" id="fullWidth" value={chat} type='chat' onChange={e=>setChat(e.target.value)}/>
<button className='ml-48 border-rounded rounded-md w-24 text-lg transition-all duration-300 m-5 border-none bg-grey hover:bg-black' type='submit'>submit </button>
    </Box>
            </form>

        </div>
    </section>
    </> 
  )
}

export default Secondpart