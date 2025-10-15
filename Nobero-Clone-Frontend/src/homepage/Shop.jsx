import { Link } from 'react-router-dom'
import React from 'react'

const shopformen = [
    {
        img: "https://nobero.com/cdn/shop/files/6_3947fc67-5783-4d32-9311-506c676a9ce8.jpg?v=1757745344",
        title: "T-Shirts",
        link: "/printed-t-shirts",
    },
    {
        img: "https://nobero.com/cdn/shop/files/Ov._Tee.jpg?v=1757745352",
        title: "Oversized Tees"
    },
    {
        img: "https://nobero.com/cdn/shop/files/Hoodies_2013ef62-6883-4cf2-b9be-655695146f5e.jpg?v=1757745352",
        title: "Hoodies",
        link: "/hoodies",
    },
    {
        img: "https://nobero.com/cdn/shop/files/Joggers_9d53a08b-9769-4352-abe0-eff2addafe41.jpg?v=1757745352",
        title: "Joggers",
        link: "/joggers",
    },
    {
        img: "https://nobero.com/cdn/shop/files/Coords.jpg?v=1757745352",
        title: "Co-Ord Sets"
    },
    {
        img: "https://nobero.com/cdn/shop/files/Shorts_68166c13-4aa7-46ba-a57b-dfe6baf97a46.jpg?v=1757745353",
        title: "Shorts"
    },
    {
        img: "https://nobero.com/cdn/shop/files/Polo.jpg?v=1757745353",
        title: "Polos"
    },
    {
        img: "https://nobero.com/cdn/shop/files/Cargo_Pants.jpg?v=1757745352",
        title: "Cargo Pants"
    },
    {
        img: "https://nobero.com/cdn/shop/files/Travel_essential.jpg?v=1757745353",
        title: "Travel Essentials"
    },
    {
        img: "https://nobero.com/cdn/shop/files/Textured_tee.jpg?v=1757745352",
        title: "Textured Tees"
    },

]

const Shop = () => {
    return (
        <>
            <div className='px-1 my-5'>
                <h1 className='text-2xl font-semibold text-center mb-5'>Shop For Men</h1>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
                    {shopformen.map((list, index) => (
                        <Link
                            onClick={() => {
                                window.scrollTo({ top: 0, behavior: "smooth" })
                            }}
                            key={index}
                            to={list.link}
                            className='py-2 flex flex-col items-center justify-center' >
                            <img key={index} src={list.img} alt={list.title}
                                className='w-44 h-44 md:w-52 md:h-52 mb-2 shrink-0' />
                            <p className=' font-semibold'>{list.title}</p>
                        </Link>
                    ))}
                </div>
            </div>
            <div className='my-10'>
                <img src="https://nobero.com/cdn/shop/files/BRAND_STORY_2000_x_521_px_-2.webp?v=1723793962&width=1780"
                    alt="" className='hidden lg:grid' />
                <img src="https://nobero.com/cdn/shop/files/Our_Story-2_1.webp?v=1723793985"
                    alt="" className=' md:w-screen lg:hidden' />
            </div>
        </>
    )
}

export default Shop