import React from 'react'
import FIrstpart from '../Compents/FIrstpart'
import Secondpart from '../Compents/Secondpart'

const Home = () => {
  return (
 <>
 <div className='flex '>

 <section className='part-left w-1/4   '>

 <FIrstpart />
 </section>
 <section className='part-right w-3/4'>
    <Secondpart />

 </section>
 </div>
 </>
  )
}

export default Home