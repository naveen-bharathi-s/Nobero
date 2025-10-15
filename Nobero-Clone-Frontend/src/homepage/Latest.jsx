import React from 'react'
import { Link } from 'react-router-dom'

const latestcollections = [
    {
        link: "/joggers",
        pic: "https://nobero.com/cdn/shop/files/unnamed.png?v=1757921709",
        title: "Jasper Loose Fit Joggers",
        price: (<><span className='font-semibold text-xs md:text-sm lg:text-lg'>₹1,199 </span>
            <span className='line-through text-xs md:text-sm lg:text-lg'>₹2,499</span>
            <span className='text-green-600 font-semibold text-xs md:text-sm lg:text-lg'> ₹1,300 OFF</span></>),
        desc: "Lowest price in last 30 days",
        review: "⭐️4.0 | 10",
    },
    {
        link: "/joggers",
        pic: "https://nobero.com/cdn/shop/files/50WebImages3.webp?v=1748349795&width=533",
        title: "Olive Piping Joggers",
        price: (<><span className='font-semibold md:text-sm lg:text-lg'>₹1,199 </span>
            <span className='line-through md:text-sm lg:text-lg'>₹2,499</span>
            <span className='text-green-600 font-semibold md:text-sm lg:text-lg'> ₹1,300 OFF</span></>),
        desc: "Lowest price in last 30 days",
        review: "⭐️4.8 | 23",
        sale: (<><span className='py-0.5 px-1'>BESTSELLER</span></>),
    },
    {
        link: "/joggers",
        pic: "https://nobero.com/cdn/shop/files/ChasetheSunset.jpg?v=1754981956&width=720",
        title: "Chase The Sunset Joggers",
        price: (<><span className='font-semibold md:text-sm lg:text-lg'>₹999 </span>
            <span className='line-through md:text-sm lg:text-lg'>₹2,599</span>
            <span className='text-green-600 font-semibold md:text-sm lg:text-lg'> ₹1,600 OFF</span></>),
        desc: "Lowest price in last 30 days",
        review: "⭐️5.0 | 4",

    },
    {
        link: "/joggers",
        pic: "https://nobero.com/cdn/shop/files/MenJoggersMockups2.jpg?v=1751968958&width=720",
        title: "Oversized Winston Joggers",
        price: (<><span className='font-semibold md:text-sm lg:text-lg'>₹999 </span>
            <span className='line-through md:text-sm lg:text-lg'>₹2,399</span>
            <span className='text-green-600 font-semibold md:text-sm lg:text-lg'> ₹1,400 OFF</span></>),
        desc: "Lowest price in last 30 days",
        review: "⭐️4.8 | 8",

    },
    {
        link: "/joggers",
        pic: "https://nobero.com/cdn/shop/files/7_53865e2e-1886-4ff3-a64f-fd4c241c71e5.jpg?v=1749195346&width=533",
        title: "Restless Explorer Oversized",
        price: (<><span className='font-semibold md:text-sm lg:text-lg'>₹1,299 </span>
            <span className='line-through md:text-sm lg:text-lg'>₹1,699</span>
            <span className='text-green-600 font-semibold md:text-sm lg:text-lg'> ₹400 OFF</span></>),
        desc: "Lowest price in last 30 days",
    },
    {
        link: "/joggers",
        pic: "https://nobero.com/cdn/shop/files/MenJoggersMockups4.jpg?v=1751968937&width=533",
        title: "Adam Joggers",
        price: (<><span className='font-semibold md:text-sm lg:text-lg'>₹999 </span>
            <span className='line-through md:text-sm lg:text-lg'>₹2,299</span>
            <span className='text-green-600 font-semibold md:text-sm lg:text-lg'> ₹1,300 OFF</span></>),
        desc: "Lowest price in last 30 days",
        review: "⭐️4.8 | 32",
        sale: (<><span className='py-0.5 px-1'>BESTSELLER</span></>),
    },
    {
        link: "/joggers",
        pic: "https://nobero.com/cdn/shop/files/Style1Web5.webp?v=1750307500&width=720",
        title: "Oversized Side Striped Joggers",
        price: (<><span className='font-semibold md:text-sm lg:text-lg'>₹999 </span>
            <span className='line-through md:text-sm lg:text-lg'>₹2,399</span>
            <span className='text-green-600 font-semibold md:text-sm lg:text-lg'> ₹1,400 OFF</span></>),
        desc: "Lowest price in last 30 days",
        review: "⭐️4.9 | 28",

    },
    {
        link: "/joggers",
        pic: "https://nobero.com/cdn/shop/files/WebImages441.webp?v=1733728880&width=720",
        title: "Norwich Loose Fit Joggers",
        price: (<><span className='font-semibold md:text-sm lg:text-lg'>₹999 </span>
            <span className='line-through md:text-sm lg:text-lg'>₹2,499</span>
            <span className='text-green-600 font-semibold md:text-sm lg:text-lg'> ₹1,500 OFF</span></>),
        desc: "Lowest price in last 30 days",
        review: "⭐️4.0 | 2",
        sale: (<><span className='py-0.5 px-1'>BESTSELLER</span></>),
    },
]


const Latest = () => {
    return (
        <div className='pt-12'>
            <div className='text-center pb-8'>
                <h2 className='text-xl font-semibold'>See the latest</h2>
                <p className='text-gray-600'>Handpicked for you</p>
            </div>
            <div className='flex overflow-x-auto scrollbar-hide'>
                {latestcollections.map((newcollection, index) => (
                    <Link
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }}
                        to={newcollection.link}
                        key={index}
                        className='flex-shrink-0'>
                        <div key={index} className=' m-2 md:m-3.5 pb-2 relative' >
                            <img src={newcollection.pic} alt="" className='w-[195px] md:w-[225px] lg:w-72 h-72 md:h-80 lg:h-96 ' />
                            <div className='text-start border-x-2 border-b-2 px-2 lg:px-4 py-2 text-xs md:text-sm lg:text-lg'>
                                <p className='text-gray-700'>{newcollection.title}</p>
                                <p >{newcollection.price}</p>
                                <p className='text-purple-600 font-semibold'>{newcollection.desc}</p>
                            </div>
                            <div className='absolute bottom-[78px] md:bottom-[90px] lg:bottom-[112px] left-1 bg-white/70 backdrop-blur-md'>
                                <p className='text-sm p-1 text-gray-900 font-semibold'>{newcollection.review}</p>
                            </div>
                            <div className='absolute top-0.5 left-2 bg-yellow-300 '>
                                <p className='text-xs font-mono text-gray-900 font-semibold'>{newcollection.sale}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className='flex items-center justify-center pt-4'>
                <h4 className='text-pretty font-medium font-sans text-gray-700 border-[1px] border-black px-12 md:px-16 lg:px-24 py-2'>Shop All Products</h4>
            </div>
            <div className='mt-6 pt-6'>
                <div>
                    <img src="https://nobero.com/cdn/shop/files/Travel_Jogger_Home_Page_Image_Mob_1_copy_29e5b158-370f-4093-9e91-433872b82d5f.jpg?v=1738323121"
                        alt="" className='lg:hidden w-screen' />
                    <img src="https://nobero.com/cdn/shop/files/Travel_Jogger_Home_Page_Image_Mob_2_copy_f2149a8e-dabb-4fee-8941-05cd5347eb73.png?v=1738323120"
                        alt="" className='lg:hidden w-screen py-12 px-3 bg-gray-200' />
                    <div className='lg:hidden bg-gray-200 flex flex-col justify-center items-center gap-4 pb-16'>
                        <div>
                            <p className='text-xl font-semibold'>₹1,999.00<span className='text-green-500 text-lg font-normal'>₹1,000 OFF</span></p>
                            <p className='text-gray-500'>MRP <span className='line-through'>₹2,999.00</span><span className='text-xs'> Inclusive of all taxes</span></p>
                        </div>
                        <h2 className='bg-blue-950 py-3 px-32 text-white'>Explore more</h2>
                    </div>
                </div>
                <div>
                    <img src="https://nobero.com/cdn/shop/files/Travel_Jogger_Home_Page_Image_1_copy_d8419a25-f731-44ef-a852-afec626ceb14.jpg?v=1738323121&width=1780"
                        alt="" className='hidden lg:flex' />
                    <img src="https://nobero.com/cdn/shop/files/Travel_Jogger_Home_Page_Image_2_copy_2af40579-aef7-416d-82f0-414717f4578a.png?v=1738323120&width=1780"
                        alt="" className='hidden lg:flex pt-12 px-48 bg-gray-200' />
                    <div className='hidden bg-gray-200 lg:flex justify-center items-center gap-10 pb-16'>
                        <h2 className='bg-blue-950 py-3 px-24 text-white'>Explore more</h2>
                        <div>
                            <p className='text-xl font-semibold'>₹1,999.00<span className='text-green-500 text-lg font-normal'>₹1,000 OFF</span></p>
                            <p className='text-gray-500'>MRP <span className='line-through'>₹2,999.00</span><span className='text-xs'> Inclusive of all taxes</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Latest