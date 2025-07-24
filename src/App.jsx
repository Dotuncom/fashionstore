import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Button from './components/Button'

const App = () => {
  return (
    <section className='h-screen bg-Hero bg-cover md:bg-top bg-center'> 
    <Navbar/>
        <div className='flex flex-col justify-center text-center items-center h-full'>
           <h2 className='text-white  text-2xl font-medium'>Fashion Tips</h2>
           <h1 className='md:text-5xl text-2xl text-white font-semibold py-5'>
          Items every woman should have
           </h1>
           <div>
                          <Button/>

           </div>
        </div>
    </section>
  )
}

export default App