import React from 'react'

type Props = {};

const WorkInfo = (props: Props) => {
  return (
    <div className='bg-[#16213A] p-16 text-white'>

      <div className='flex justify-between'>
        
        <div className='mt-28 w-4/12'>
          <h1 className='text-sm'>PHOTOGRAHPY BY.</h1>
          <h1>DEESIGNAL MEDIA</h1>
        </div>

        <div className='w-4/12 flex justify-center mt-10'>
          <div className='border h-[200px] border-gray-600 w-[1px]'></div>
        </div>

        <div className='w-4/12'>
          <h1 className='text-lg'>COUPLES NOTE.</h1>

          <p className='mb-2 text-sm text-gray-300 mt-4'>Lorem ipsum dolor sit amet, consectetuer Pipiscing elenean mmodo ligulaet olor.
            Aenean massAenean massa. rem ipsum dolor sIsectetiodipiscing elit.iian modoamet,
            consectetiodipiscing elit.AenodoLorem ipsum dolor sit amet, consectetuer adipiscineneanii
            mmodo ligulaet olor. Aenean massa.</p>

          <p className='text-sm text-gray-300'>
            Lorem ipsum dolor sit amet, consectetuer Pipiscing elenean mmodo ligulaet olor.
            Aenean massAenean massa. rem ipsum dolor sIsectetiodipiscing elit.iian modoamet,
            consectetiodipiscing elit.AenodoLorem ipsum dolor sit amet, consectetuer adipiscineneanii
            mmodo ligulaet olor. Aenean massa.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WorkInfo