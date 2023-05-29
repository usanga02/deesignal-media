import React from 'react'
import Navbar from '../components/basic/Navbar'

const SingleWork = () => {

  return (
    <section>
      <div className='h-screen bg-primary'>
        <Navbar />

        <div className="h-full w-full flex justify-center">
          <h2 className="text-light font-druk-wide mt-44 font-[700] leading-relaxed text-5xl text-center w-[1200px]">
            Explore Our Latest Works Around The Globe
          </h2>
        </div>
      </div>

    </section>

  )
};
   
export default SingleWork