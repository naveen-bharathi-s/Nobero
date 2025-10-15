import { MinusIcon, PlusIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useCart } from '../CardContext'
import { useNavigate } from 'react-router-dom'
import {auth, Provider} from '../config/firebase'

const hoodies = [
    {
        id: "Hoodies-1",
        pic: "https://nobero.com/cdn/shop/files/NavyBlue_fcc93fe9-f65b-4710-82bd-5d2fed4335e2.jpg?v=1758998339&width=533",
        title: "Classic Hoodie",
        price: "1,299",
        price1: (<>
            <span className='line-through text-gray-600 font-normal'>₹1,999</span>
            <span className='text-green-600'> ₹700 OFF</span>
        </>),
        desc: "Lowest price in last 30 days",
        review: "⭐️4.8 | 332",
    },
    {
        id: "Hoodies-2",
        pic: "https://nobero.com/cdn/shop/files/Black_68b4766f-bc50-4366-b22a-9d0800ca74ad.jpg?v=1759340171&width=533",
        title: "Classic Zipper Hoodie",
        price: "1,499",
        price1: (<>
            <span className='line-through text-gray-600 font-normal'>₹1,999</span>
            <span className='text-green-600'> ₹500 OFF</span>
        </>),
        desc: "Lowest price in last 30 days",
        review: "⭐️4.8 | 658",
        sale: (<><span className='py-0.5 px-1'>BESTSELLER</span></>),
    },
    {
        id: "Hoodies-3",
        pic: "https://nobero.com/cdn/shop/files/Elsewhere_2675c623-7611-46cd-b813-7af60cba3b61.jpg?v=1759344010&width=533",
        title: "Elsewhere Classic Hoodie",
        price: "1,499",
        price1: (<>
            <span className='line-through text-gray-600 font-normal'>₹2,499</span>
            <span className='text-green-600'> ₹1,000 OFF</span>
        </>),
        desc: "Lowest price in last 30 days",
        review: "⭐️4.7 | 72",
        sale: (<><span className='py-0.5 px-1'>BESTSELLER</span></>),
    },
    {
        id: "Hoodies-4",
        pic: "https://nobero.com/cdn/shop/files/Imperfectly_perfect_aedbd9a6-99d5-444b-98fb-7338e328d358.jpg?v=1759344088&width=533",
        title: "Imperfectly Perfect Classic",
        price: '1,499',
        price1: (<>
            <span className='line-through text-gray-600 font-normal'>₹999</span>
            <span className='text-green-600'> ₹500 OFF</span>
        </>),
        desc: "Lowest price in last 30 days",
        review: "⭐️4.8 | 227",
        sale: (<><span className='py-0.5 px-1'>BESTSELLER</span></>),
    },
    {
        id: "Hoodies-5",
        pic: "https://nobero.com/cdn/shop/files/maroon_857d6f8a-0f83-422b-90d6-c5b567751c69.jpg?v=1757586899&width=533",
        title: "Mock Neck Sweatshirt",
        price: "1,499",
        price1: (<>
            <span className='line-through text-gray-600 font-normal'>₹1,799</span>
            <span className='text-green-600'> ₹300 OFF</span>
        </>),
        desc: "Lowest price in last 30 days",
        review: "⭐️4.8 | 45",
        sale: (<><span className='py-0.5 px-1'>BESTSELLER</span></>),
    },
    {
        id: "Hoodies-6",
        pic: "https://nobero.com/cdn/shop/files/olive-green_fa9f3ade-e75c-40fe-9d8e-14b4b4bb5f9b.jpg?v=1757930109&width=533",
        title: "Oversized Sweatshirt",
        price: "999",
        price1: (<>
            <span className='line-through text-gray-600 font-normal'>₹1,499</span>
            <span className='text-green-600'> ₹500 OFF</span>
        </>),
        desc: "Lowest price in last 30 days",
        review: "⭐️4.8 | 223",
    },
    {
        id: "Hoodies-7",
        pic: "https://nobero.com/cdn/shop/files/black_aa7f3fe8-653a-4112-a1aa-520eef2c7c09.jpg?v=1757937284&width=533",
        title: "Oversized Hoodie",
        price: "1,399",
        price1: (<>
            <span className='line-through text-gray-600 font-normal'>₹2,499</span>
            <span className='text-green-600'> ₹1,100 OFF</span>
        </>),
        desc: "Lowest price in last 30 days",
        review: "⭐️4.6 | 157",
        sale: (<><span className='py-0.5 px-1'>BESTSELLER</span></>),
    },
    {
        id: "Hoodies-8",
        pic: "https://nobero.com/cdn/shop/files/Be_fearlessly_authentic_91a858c3-dd52-4971-a903-3b0416c0c9e3.jpg?v=1759344133&width=533",
        title: "Believe In Yourself Classic",
        price: "1,499",
        price1: (<>
            <span className='line-through text-gray-600 font-normal'>₹3,799</span>
            <span className='text-green-600'> ₹2,300 OFF</span>
        </>),
        desc: "Lowest price in last 30 days",
        review: "⭐️4.9 | 172",

    },
    {
        id: "Hoodies-9",
        pic: "https://nobero.com/cdn/shop/files/Believe_in_yourself_070186c3-1d2c-44ec-88de-3ab429abc4af.jpg?v=1759343915&width=533",
        title: "Believe In Yourself Classic",
        price: "1,499",
        price1: (<>
            <span className='line-through text-gray-600 font-normal'>₹3,799</span>
            <span className='text-green-600'> ₹2,300 OFF</span>
        </>),
        desc: "Lowest price in last 30 days",
        review: "⭐️4.9 | 172",
        sale: (<><span className='py-0.5 px-1'>BESTSELLER</span></>),
    },
    {
        id: "Hoodies-10",
        pic: "https://nobero.com/cdn/shop/files/Hope_dfd183c8-334b-4885-a4ba-f4d329e4e5a3.jpg?v=1759343823&width=533",
        title: "Hope Classic Hoodie",
        price: "1,399",
        price1: (<>
            <span className='line-through text-gray-600 font-normal'>₹2,499</span>
            <span className='text-green-600'> ₹1,100 OFF</span>
        </>),
        desc: "Lowest price in last 30 days",
        review: "⭐️4.8 | 27",
        sale: (<><span className='py-0.5 px-1'>BESTSELLER</span></>),
    },
    {
        id: "Hoodies-11",
        pic: "https://nobero.com/cdn/shop/files/14_fce307aa-a3ae-4d02-b817-423eb927e66f.jpg?v=1759647277&width=533",
        title: "Bomber Fleece Jacket",
        price: "1,599",
        price1: (<>
            <span className='line-through text-gray-600 font-normal'>₹1,999</span>
            <span className='text-green-600'> ₹400 OFF</span>
        </>),
        desc: "Lowest price in last 30 days",
        review: "⭐️4.2 | 21",
    },
    {
        id: "Hoodies-12",
        pic: "https://nobero.com/cdn/shop/files/12_4ef1a315-58d4-406e-8548-31e237d5d0c3.jpg?v=1759647277&width=533",
        title: "Bomber Fleece Jacket",
        price: "1,599",
        price1: (<>
            <span className='line-through text-gray-600 font-normal'>₹1,999</span>
            <span className='text-green-600'> ₹400 OFF</span>
        </>),
        desc: "Lowest price in last 30 days",
        review: "⭐️4.7 | 172",

    },
    {
        id: "Hoodies-13",
        pic: "https://nobero.com/cdn/shop/files/FrontImage3.webp?v=1759831870&width=533",
        title: "Oversized Textured Shackets",
        price: "1,699",
        price1: (<>
            <span className='line-through text-gray-600 font-normal'>₹3,499</span>
            <span className='text-green-600'> ₹1,800 OFF</span>
        </>),
        desc: "Lowest price in last 30 days",
        review: "⭐️4.9 | 30",
    },
    {
        id: "Hoodies-14",
        pic: "https://nobero.com/cdn/shop/files/wanderlust.jpg?v=1734696405&width=533",
        title: "Wanderlust Oversized",
        price: "1,099",
        price1: (<>
            <span className='line-through text-gray-600 font-normal'>₹1,799</span>
            <span className='text-green-600'> ₹700 OFF</span>
        </>),
        desc: "Lowest price in last 30 days",
        review: "⭐️4.7 | 17",
        sale: (<><span className='py-0.5 px-1'>BESTSELLER</span></>),
    },
    {
        id: "Hoodies-15",
        pic: "https://nobero.com/cdn/shop/files/WhatsApp_Image_2024-10-04_at_6.05.57_PM.jpg?v=1728066938&width=533",
        title: "DND Oversized Sweatshirt",
        price: "999",
        price1: (<>
            <span className='line-through text-gray-600 font-normal'>₹1,799</span>
            <span className='text-green-600'> ₹800 OFF</span>
        </>),
        desc: "Lowest price in last 30 days",
        review: "⭐️4.7 | 7",
        sale: (<><span className='py-0.5 px-1'>BESTSELLER</span></>),
    },
]

const price = [
    {
        title: "Less Than ₹500"
    },
    {
        title: "₹500 - ₹1000"
    },
    {
        title: "₹1000 - ₹1500"
    },
    {
        title: "₹1500 - ₹2000"
    },
    {
        title: "More Than ₹2000"
    },
]

const color = [
    {
        title: "Red"
    },
    {
        title: "Green"
    },
    {
        title: "Yellow"
    },
    {
        title: "White"
    },
    {
        title: "Black"
    },
]

const size = [
    {
        title: "S"
    },
    {
        title: "M"
    },
    {
        title: "L"
    },
    {
        title: "XL"
    },
    {
        title: "XXL"
    },
    {
        title: "XXXL"
    },
]

const productType = [
    {
        title: "Hoodies"
    },
    {
        title: "Sweatshirts"
    },
]


const available = [
    {
        title: "In Stock"
    },
    {
        title: "Out of Stock"
    },
]

const Hoodies = () => {

    // const [quantity, setQuantity] = useState({});

    // const handleAddToCart = (index) => {
    //     setQuantity((prev) => ({
    //         ...prev, [index]: (prev[index] || 0) + 1,
    //     }));
    // };
    // const handleReduceFromCart = (index) => {
    //     setQuantity((prev) => ({
    //         ...prev, [index]: prev[index] > 0 ? prev[index] - 1 : 0,
    //     }));
    // }

    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })

        auth.onAuthStateChanged((user) => {
            if (user) {
                navigate("/hoodies")
            } else {
                navigate("/login")
            }
        })
    }, [])

    const { addToCart, removeFromCart, cartItems } = useCart();
    const [searchTerm, setSearchTerm] = useState("");
    const [showSizeModal, setShowSizeModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    // Filtered products
    const filteredHoodies = hoodies.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getQty = (id) => {
        // show total quantity (sum of all sizes)
        return cartItems.filter((item) => item.id === id)
            .reduce((acc, curr) => acc + curr.qty, 0)
    }

    // Example available sizes
    const sizeOptions = ["S", "M", "L", "XL", "XXL"];

    const handleAddClick = (item) => {
        setSelectedItem(item);
        setShowSizeModal(true);
    };

    const handleSizeSelect = (size) => {
        addToCart({ ...selectedItem, size });
        setShowSizeModal(false);
        setSelectedItem(null);
    };

    const handleRemove = (item) => {
        const existing = cartItems.find((p) => p.id === item.id)
        if (existing) removeFromCart(existing)
    }

    return (
        <div>
            <div>
                <img src="https://nobero.com/cdn/shop/files/Collection_Banner_Mobile_-6.jpg?v=1755853277&width=533"
                    alt="Nobero" className='lg:hidden w-full h-auto' />
                <img src="https://nobero.com/cdn/shop/files/Desktop_-_Collection_Banners-31.jpg?v=1755853262"
                    alt="Nobero" className='hidden lg:block w-full h-auto ' />
            </div>
            {/* 🔍 Search */}
            <div className="text-center">
                <input
                    type="search"
                    className="w-3/4 p-2 border rounded-sm mx-auto mt-4 outline-none"
                    placeholder="Search Hoodies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div>

            </div>
            <div className='pt-6 pb-3 px-4 lg:py-6 flex justify-between items-center gap-4 lg:hidden'>
                <h2 className=' font-semibold md:text-xl'>Hoodies & Jackets</h2>
                <p className='text-gray-600 text-sm md:text-base'>165 items</p>
            </div>

            <div className='py-8'>
                <div className='hidden pb-4 lg:flex justify-around items-center gap-48  '>
                    <div className='flex justify-start items-center gap-4'>
                        <h2 className='font-bold text-2xl'>Hoodies & Jackets</h2>
                        <p className='text-gray-600 font-semibold mt-2'>165 items</p>
                    </div>
                    <div>
                        <p className='font-semibold p-2 border-[1px] rounded-md'>Featured</p>
                    </div>
                </div>
                {/* large screen filter */}
                <div className='flex justify-center items-start gap-6'>
                    <div className='hidden lg:flex mx-6 h-[900px] overflow-y-auto scrollbar-hide'>
                        <div className='font-semibold'>
                            <div className=' pb-6 flex justify-evenly items-center gap-28 border-b-[1px]'>
                                <h2 className=' font-bold'>Filter</h2>
                                <p className='text-yellow-800 font-bold'>Clear All</p>
                            </div>
                            <div className='space-y-2 py-3 border-b-[1px]'>
                                <p className='text-lg'>Price</p>
                                {price.map((list, index) => (
                                    <ul key={index} className='space-y-3 text-lg'>
                                        <li className='flex gap-6 justify-start cursor-pointer'>
                                            <input type="checkbox" className='w-5 h-5 mt-1.5' />
                                            <p className='text-gray-700'>{list.title}</p>
                                        </li>
                                    </ul>
                                ))}
                            </div>
                            <div className='space-y-2 py-3 border-b-[1px]'>
                                <p className='text-lg'>Color</p>
                                {color.map((list, index) => (
                                    <ul key={index} className='space-y-3 text-lg'>
                                        <li className='flex gap-6 justify-start cursor-pointer'>
                                            <input type="checkbox" className='w-5 h-5 mt-1.5' />
                                            <p className='text-gray-700'>{list.title}</p>
                                        </li>
                                    </ul>
                                ))}
                            </div>
                            <div className='space-y-2 py-3 border-b-[1px]'>
                                <p className='text-lg'>Size</p>
                                {size.map((list, index) => (
                                    <ul key={index} className='space-y-3 text-lg'>
                                        <li className='flex gap-6 justify-start cursor-pointer'>
                                            <input type="checkbox" className='w-5 h-5 mt-1.5' />
                                            <p className='text-gray-700'>{list.title}</p>
                                        </li>
                                    </ul>
                                ))}
                            </div>
                            <div className='space-y-2 py-3 border-b-[1px]'>
                                <p className='text-lg'>Product Type</p>
                                {productType.map((list, index) => (
                                    <ul key={index} className='space-y-3 text-lg'>
                                        <li className='flex gap-6 justify-start cursor-pointer'>
                                            <input type="checkbox" className='w-5 h-5 mt-1.5' />
                                            <p className='text-gray-700'>{list.title}</p>
                                        </li>
                                    </ul>
                                ))}
                            </div>
                            <div className='space-y-2 py-3 border-b-[1px]'>
                                <p className='text-lg'>Availability</p>
                                {available.map((list, index) => (
                                    <ul key={index} className='space-y-3 text-lg'>
                                        <li className='flex gap-6 justify-start cursor-pointer'>
                                            <input type="checkbox" className='w-5 h-5 mt-1.5' />
                                            <p className='text-gray-700'>{list.title}</p>
                                        </li>
                                    </ul>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* all screen */}
                    <div className='grid grid-cols-2 md:grid-cols-3 items-start justify-center pb-8 
                                    lg:h-[900px] lg:overflow-y-auto scrollbar-hide'>
                        {filteredHoodies.map((newcollection, index) => (
                            <div key={index} className='my-2 mx-1 lg:m-2 relative border-2 cursor-pointer shadow-md 
                                    hover:shadow-lg rounded-sm hover:rounded-md'>
                                <div className='relative'>
                                    <img src={newcollection.pic} alt="" className='w-full h-[300px] md:h-[350px] lg:h-[320px] ' />
                                    <div className='absolute bottom-1 left-1 bg-white/70 backdrop-blur-md'>
                                        <p className='text-sm p-1 text-gray-900 font-semibold'>{newcollection.review}</p>
                                    </div>
                                    <div className='absolute top-0.5 left-2 bg-yellow-300 '>
                                        <p className='text-xs font-mono text-gray-900 font-semibold'>{newcollection.sale}</p>
                                    </div>
                                </div>

                                <div className='text-start px-2 py-2 text-xs md:text-sm lg:text-base'>
                                    <p className='text-gray-700'>{newcollection.title}</p>
                                    <div className="flex items-center gap-1">
                                        <p className='font-semibold text-xs md:text-sm'>₹{newcollection.price}</p>
                                        <p className='font-semibold text-xs md:text-sm'>{newcollection.price1}</p>
                                    </div>
                                    <p className='text-purple-600 font-semibold text-xs md:text-sm'>{newcollection.desc}</p>
                                    <div className="flex items-center justify-start mt-1">
                                        <button
                                            onClick={() => handleRemove(newcollection)}
                                            className="p-1 bg-gray-200 rounded"
                                        >
                                            <MinusIcon className="h-3 w-4" />
                                        </button>

                                        <span className="text-sm font-semibold py-1 px-2">
                                            {getQty(newcollection.id) > 0 ? getQty(newcollection.id) : "Add"}
                                        </span>

                                        <button
                                            onClick={() => handleAddClick(newcollection)}
                                            className="p-1 bg-blue-500 text-white rounded"
                                        >
                                            <PlusIcon className="h-3 w-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* ✅ SIZE SELECTION MODAL */}
                    {showSizeModal && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-white p-6 rounded-md w-80 text-center shadow-lg">
                                <h3 className="text-lg font-semibold mb-4">Select Size</h3>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {sizeOptions.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => handleSizeSelect(size)}
                                            className="border px-4 py-2 rounded hover:bg-gray-100"
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                                <button
                                    onClick={() => setShowSizeModal(false)}
                                    className="mt-4 text-sm text-gray-600 underline"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Hoodies