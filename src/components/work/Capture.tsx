import React from 'react'
import Button from '../variants/Button'

const Capture = () => {
  return (
    <div className='bg-[#000] p-16 text-[#fff]'>
      <p className='text-center font-druk-wide font-[700] leading-relaxed text-xl'>Want to capture the action? <br />
        Lets Shoot.</p>

      <div className='flex justify-center mt-5'>
        <Button label='Book Us' extraClass='px-10' />
      </div>
    </div>
  )
}

export default Capture