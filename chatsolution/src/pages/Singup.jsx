import React, { useState } from 'react';
import { BsEye } from 'react-icons/bs';
import { IoMdEyeOff } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Singup = () => {
    // Correct way to destructure useState: [stateVariable, setStateFunction]
    const [email, setEmail] = useState(''); // Initialize with an empty string
    const [password, setPassword] = useState(''); // Initialize with an empty string
    const [lineeye, setLineEye]=useState(false)

    const hanldeeye=()=>{
      setLineEye()
    }

    const handleSingup = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior (page reload)

        console.log('Email:', email);
        console.log('Password:', password);

        // In a real application, you would send this data to your backend here
        // e.g., axios.post('/api/login', { email, password });
    };

    return (
        <>
            <section>
                <div className='singup bg-black h-screen text-white flex flex-col items-center  justify-center p-4  '> {/* Added flex-col and padding */}
                  <div className='border-4  border-rgba(0,0,0,0.1) p-4 size-96 rounded-lg  shadow-xl text-balce bg-white text-black'>

                    <h1 className='text-3xl font-semibold mb-6 text-black text-center'>Singup</h1> {/* Adjusted text size and margin */}
                    <form onSubmit={handleSingup} className='flex flex-col gap-4 w-full max-w-sm  relative'> {/* Added flex-col, gap, and max-width */}
                         <input
                            type="text"
                            placeholder='fullname'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className='text-black p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' // Improved styling
                        />
                        <input
                            type="email"
                            placeholder='Email'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className='text-black p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' // Improved styling
                        />
                        <input
                            type={lineeye ? 'text':'password'}
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            onClick={()=>hanldeeye(!lineeye)}
                            className='text-black p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' // Improved styling
                        />
                        <div  className= ' absolute right-3 top-20 transform  -translate-y-1/4 text-xl text-gray-600  cursor-pointer' onClick={()=>setLineEye(!lineeye)}>

                            {lineeye ? <IoMdEyeOff /> :<BsEye />}
                        </div>
                            
                        <button
                            className='bg-black text-white py-3 rounded hover:bg-blue-700 transition duration-300 ease-in-out hover:bg-darkCyan ' // Improved button styling
                            type='submit' // Use 'submit' type for form submission
                        >
                            Singup
                        </button>
                        <p className='text-xl '>yor are login <span className='text-darkCyan'>  <Link to="/login">Longin ?</Link> </span></p>
                    </form>
                  </div>
                </div>
            </section>
        </>
    );
};

export default Singup;