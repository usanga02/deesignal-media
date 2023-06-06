import React from 'react'

type Props = {};

let myArray = Array.from({ length: 9 }, (_, index) => index + 1);

const WorkGallery = (props: Props) => {
  return (
    <div className='grid grid-cols-3 gap-3'>
      {myArray.map((image, i) => (
        <img src={require(`../../assets/img/wedding/wedding_${i + 1}.png`)} className='w-full' key={i} alt='' />
      ))}
    </div>
  )
}

export default WorkGallery