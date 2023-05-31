import React from 'react'


type Props = {
  heading: string;
  description: string;
};

const Category = ({ heading, description }: Props) => {
  return (
    <div className='flex gap-10 items-center'>
      <img src={require("../../assets/img/right1.png")} alt="" />

      <div>
        <h1 className='font-druk-wide text-[#00000099] text-2xl'>{heading}</h1>

        <p className='mt-10 text-[#000000cc]'>{description}</p>
      </div>
    </div>
  )
}

export default Category