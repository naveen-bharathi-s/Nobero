import React from 'react'

const Review = () => {
  return (
    <div>
    <div className='text-center font-semibold text-2xl py-2'>Review</div>
    <div className='grid grid-rows md:grid-cols-2 items-center justify-center pt-4 pb-16 md:px-16 lg:px-40 mx-auto'> 
        <img src="https://cdn.shopify.com/s/files/1/0337/9413/0052/files/01_34f6f3a4-99c5-4046-a1c5-5c0a02cc251e.jpg?v=1672818862" alt="" className='w-96 md:w-[500px] lg:w-[600px]  md:h-[400px] lg:h-[500px]' />
        <img src="https://cdn.shopify.com/s/files/1/0337/9413/0052/files/02.jpg?v=1672811128" alt="" className='w-96 md:w-[500px] lg:w-[600px]  md:h-[400px] lg:h-[500px]' />
        <img src="https://cdn.shopify.com/s/files/1/0337/9413/0052/files/03.jpg?v=1672811128" alt="" className='w-96 md:w-[500px] lg:w-[600px]  md:h-[400px] lg:h-[500px]' />
        <img src="https://cdn.shopify.com/s/files/1/0337/9413/0052/files/04.jpg?v=1672811128" alt="" className='w-96 md:w-[500px] lg:w-[600px]  md:h-[400px] lg:h-[500px]' />
    </div>
    </div>
  )
}

export default Review