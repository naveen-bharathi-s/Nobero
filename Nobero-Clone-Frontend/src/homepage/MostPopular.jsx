import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const mostpopular = [
    {
        img: "https://nobero.com/cdn/shop/files/Most_Popular-5.jpg?v=1758653966&width=533",
        link: "/printed-t-shirts",
    },
    {
        img: "https://nobero.com/cdn/shop/files/128.jpg?v=1757670074&width=533",
        link: "/printed-t-shirts",
    },
    {
        img: "https://nobero.com/cdn/shop/files/129_ce526dc4-b6b1-4dd7-bbcf-25c1d1a8f43c.jpg?v=1757684376&width=533",
        link: "/printed-t-shirts",
    },
    {
        img: "https://nobero.com/cdn/shop/files/130_42aece6b-e2fe-45bf-bafc-86d1914bde55.jpg?v=1757684401&width=533",
        link: "/joggers",
    },

]

const MostPopular = () => {
    return (
        <div className='my-10'>
            <div className='text-center'>
                <h1 className='text-2xl font-semibold'>Most Popular</h1>
                <div className='flex items-center justify-center text-sm'>
                    <p className='text-gray-400 '>Check this out</p>
                    <IoIosArrowRoundForward className='text-gray-900 mt-1 w-6 h-6' />
                </div>
            </div>
            <div className='flex lg:items-center lg:justify-center overflow-x-auto scrollbar-hide'>
                {mostpopular.map((popular, index) => (
                    <Link
                       key={index}
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }}
                        to={popular.link} 
                        className='flex-shrink-0'>
                        <img
                            key={index}
                            src={popular.img}
                            alt="Most Popular" className='p-2 w-72 h-96 flex-shrink-0' />
                    </Link>

                ))}
            </div>
        </div>
    )
}

export default MostPopular