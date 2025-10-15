import React from 'react'

const topcollections = [
    {
        pic: "https://nobero.com/cdn/shop/files/Allinonefeatures3_0c35218c-323e-4262-b434-38fbbdfbe9c8.webp?v=1753676965&width=720",
        title: "Wanderer - Travel Joggers",
        price: (<><span>₹1,999 </span>
            <span className='line-through text-gray-600 font-normal'>₹2,999</span>
            <span className='text-green-600'> ₹1,000 OFF</span></>),
        desc: "Lowest price in last 30 days",
        review: "⭐️4.8 | 127",
        sale: (<><span className='py-0.5 px-1'>BESTSELLER</span></>),
    },
    {
        pic: "https://nobero.com/cdn/shop/files/Artboard1.jpg?v=1752389221&width=720",
        title: "Lunar Echo Oversized T-Shirt",
        price: (<><span>₹599 </span>
            <span className='line-through text-gray-600 font-normal'>₹999</span>
            <span className='text-green-600'> ₹400 OFF</span></>),
        desc: "Lowest price in last 30 days",
        review: "⭐️4.9 | 22",
        sale: (<><span className='py-0.5 px-1'>BESTSELLER</span></>),
    },
    {
        pic: "https://nobero.com/cdn/shop/products/never-say-no-to-adventure.jpg?v=1757683090&width=533",
        title: "Jasper Loose Fit Joggers",
        price: (<><span>₹1,199 </span>
            <span className='line-through text-gray-600 font-normal'>₹2,499</span>
            <span className='text-green-600'> ₹1,300 OFF</span></>),
        desc: "Lowest price in last 30 days",
        review: "⭐️4.9 | 22",
        sale: (<><span className='py-0.5 px-1'>BESTSELLER</span></>),
    },
    {
        pic: "https://nobero.com/cdn/shop/files/WhatsApp_Image_2024-06-24_at_1.13.26_PM_46ec842c-1be2-456d-86f9-80d4ebc6748b.jpg?v=1747846465&width=720",
        title: "Never Say No Classic Fit T-Shirt",
        price: (<><span>₹499 </span>
            <span className='line-through text-gray-600 font-normal'>₹999</span>
            <span className='text-green-600'> ₹500 OFF</span></>),
        desc: "Lowest price in last 30 days",
        review: "⭐️4.8 | 162",
        sale: (<><span className='py-0.5 px-1'>BESTSELLER</span></>),
    },
    {
        pic: "https://nobero.com/cdn/shop/files/sweatshirt.jpg?v=1734278710&width=360",
        title: "Oversized Hopper Co-ord-set",
        price: (<><span>₹1,599 </span>
            <span className='line-through text-gray-600 font-normal'>₹3,999</span>
            <span className='text-green-600'> ₹2,400 OFF</span></>),
        desc: "Lowest price in last 30 days",
        review: "⭐️4.8 | 64",
        sale: (<><span className='py-0.5 px-1'>BESTSELLER</span></>),
    },
    {
        pic: "https://nobero.com/cdn/shop/files/Allinonefeatures4_c7db2dd2-50d1-47c8-8995-d5e73be8f590.webp?v=1753676924&width=360",
        title: "Wanderer - Travel Joggers",
        price: (<><span>₹1,999 </span>
            <span className='line-through text-gray-600 font-normal'>₹2,999</span>
            <span className='text-green-600'> ₹1,000 OFF</span></>),
        desc: "Lowest price in last 30 days",
        review: "⭐️4.9 | 158",
        sale: (<><span className='py-0.5 px-1'>BESTSELLER</span></>),
    },
    {
        pic: "https://nobero.com/cdn/shop/files/AND-Olive_1.jpg?v=1758191054&width=360",
        title: "& Life Goes On Oversized Tee",
        price: (<><span>₹599 </span>
            <span className='line-through text-gray-600 font-normal'>₹999</span>
            <span className='text-green-600'> ₹400 OFF</span></>),
        desc: "Lowest price in last 30 days",
        review: "⭐️4.7 | 118",
        sale: (<><span className='py-0.5 px-1'>BESTSELLER</span></>),
    },
    {
        pic: "https://nobero.com/cdn/shop/articles/How_to_style_oversized_sweatshirt_ef2d6af6-29ba-4047-82e0-84ade1529879.jpg?v=1756185388&width=360",
        title: "Jasper Loose Fit T-Shirt",
        price: (<><span>₹2,599 </span>
            <span className='line-through text-gray-600 font-normal'>₹3,499</span>
            <span className='text-green-600'> ₹900 OFF</span></>),
        desc: "Lowest price in last 30 days",
        review: "⭐️4.7 | 29",
        sale: (<><span className='py-0.5 px-1'>BESTSELLER</span></>),
    },

]

const TopCollection = () => {
    return (
        <div className=' pt-6 pb-12'>
            <div className='text-center pt-8 pb-2'>
                <h2 className='text-xl font-semibold'>Our Bestsellers</h2>
                <p className='text-gray-600'>Don't miss out Top Selling Styles</p>
            </div>
            <div className='m-1 grid grid-cols-2 lg:grid-cols-4 items-center justify-center  md:mx-32 lg:mx-16'>
                {/* first 4 items always visible */}
                {topcollections.slice(0, 4).map((newcollection, index) => (
                    <div key={index} >
                        <div key={index} className='m-2 lg:mx-4 relative lg:hidden border-2'>
                            <div className='relative'>
                                <img src={newcollection.pic} alt="" className='w-full h-72 md:h-80' />
                                <div className='absolute bottom-1  left-1 bg-white/70 backdrop-blur-md'>
                                    <p className='text-sm p-1 text-gray-900 font-semibold'>{newcollection.review}</p>
                                </div>
                                <div className='absolute top-0.5 left-2 bg-yellow-300 '>
                                    <p className='text-xs font-mono text-gray-900 font-semibold'>{newcollection.sale}</p>
                                </div>
                            </div>

                            <div className='text-start px-2 py-2 text-xs md:text-sm'>
                                <p className='text-gray-700'>{newcollection.title}</p>
                                <p className='font-semibold text-xs md:text-sm'>{newcollection.price}</p>
                                <p className='text-purple-600 font-semibold text-xs'>{newcollection.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Next 4 items only visible on lg screen */}
                {topcollections.slice(0, 8).map((newcollection, index) => (
                    <div key={index} className="hidden lg:block">
                        <div key={index} className='m-1 relative border-2 '>
                            <div className='relative'>
                                <img src={newcollection.pic} alt="" className='w-full lg:h-[400px] ' />
                                <div className='absolute lg:bottom-1 left-1 bg-white/70 backdrop-blur-md'>
                                    <p className='text-sm p-1 text-gray-900 font-semibold'>{newcollection.review}</p>
                                </div>
                            </div>
                            <div className='text-start lg:px-4 py-2 lg:text-base'>
                                <p className='text-gray-700'>{newcollection.title}</p>
                                <p className='font-semibold lg:text-base'>{newcollection.price}</p>
                                <p className='text-purple-600 font-semibold text-sm'>{newcollection.desc}</p>
                            </div>
                            <div className='absolute top-0.5 left-2 bg-yellow-300 '>
                                <p className='text-xs font-mono text-gray-900 font-semibold'>{newcollection.sale}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex items-center justify-center pt-4'>
                <h4 className='text-pretty font-medium font-sans text-gray-700 border-[1px] 
                border-black px-12 md:px-16 lg:px-24 py-2'>Shop All Products</h4>
            </div>
        </div>
    )
}

export default TopCollection