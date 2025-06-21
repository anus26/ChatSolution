import React from 'react'
import FirstPart from '../Components/Firstpart'
import Secondpart from '../Components/Secondpart'


const Home = () => {
  return (
 <>
 <div className='flex '>

 <section className='part-left w-1/4   '>

 <FirstPart />
 </section>
 <section className='part-right w-3/4'>
    <Secondpart />

 </section>

 </div>
 </>
  )
}

export default Home