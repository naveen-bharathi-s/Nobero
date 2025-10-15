import React, { useEffect, useState } from 'react'
import { Menu, X, ShoppingBag, Search, User } from "lucide-react";
import { useCart } from '../CardContext';
import { Link, useNavigate } from 'react-router-dom';
import {auth, Provider} from '../config/firebase'
import { signOut } from 'firebase/auth';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [log, setLog] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setLog(true)
                console.log("User Logged In")
            } else {
                setLog(false)
                console.log("User Logged Out")
            }
        })
    }, [])

    const logout = (()=>{
        signOut(auth)
    })

    const { cartItems } = useCart()
    const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0)

    const navLinks = [
        {
            title: "Men",
        },
        {
            title: "Oversized Tees",
        },
        {
            title: "T-Shirts",
            link: "/printed-t-shirts",
        },
        {
            title: "Hoodies",
            link: "/hoodies",
        },
        {
            title: "Joggers",
            link: "/joggers",
        },
        {
            title: "Co-ords",
        },
        {
            title: "Polos",
        },
        {
            title: "Travel",
        },
    ];

    const newcollections = [
        {
            img: "https://nobero.com/cdn/shop/collections/7.jpg?v=1757851619",
            title: "Everyday Tees",
            link: "/printed-t-shirts",
        },
        {
            img: "https://nobero.com/cdn/shop/collections/5_984c58eb-ce5a-45e7-8406-0d48b7caf9f6.jpg?v=1757851569",
            title: "Oversized Tees",
        },
        {
            img: "https://nobero.com/cdn/shop/collections/6_29719fa5-f748-482e-8039-fda30c64d1db.jpg?v=1757760284",
            title: "Joggers",
            link: "/joggers",
        },
        {
            img: "https://nobero.com/cdn/shop/collections/Cargo_Pants_Icon_Home_Page_copy.jpg?v=1757760340",
            title: "Cargos",
        },
        {
            img: "https://nobero.com/cdn/shop/collections/7p_69c2c6cf-78a7-441f-b34a-ab147745806d.jpg?v=1757760082",
            title: "Polos",
        },
        {
            img: "https://nobero.com/cdn/shop/collections/9.jpg?v=1757759355",
            title: "Co-ord Sets",
        },
        {
            img: "https://nobero.com/cdn/shop/collections/8.jpg?v=1757760434",
            title: "Shorts",
        },
        {
            img: "https://nobero.com/cdn/shop/collections/11_717a5daa-156c-45a9-a1c7-d36d39c58592.jpg?v=1757759435",
            title: "Hoodies",
            link: "/hoodies",
        },
        {
            img: "https://nobero.com/cdn/shop/collections/23_8d3ee1cf-9a32-414b-9a7e-bd17d442582d.jpg?v=1757851670",
            title: "Plus Size Tees",
        },
    ];

    const handleLinkClick = () => {
        setMenuOpen(false)
    }

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
                <button
                    className="lg:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu"
                >
                    {menuOpen ? (
                        <X className="h-6 w-6 text-gray-700" />
                    ) : (
                        <Menu className="h-6 w-6 text-gray-700" />
                    )}
                </button>


                <Link to='/' href="/" className="flex items-center space-x-2"
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }}
                >
                    <img
                        src="https://nobero.com/cdn/shop/files/Nobero_logo_1_2.svg?v=1694697396"
                        alt="Nobero"
                        className="h-6 w-auto md:h-8"
                    />
                </Link>

                {/* Nav links (desktop) */}
                <nav className="hidden lg:flex justify-center items-center relative space-x-6">
                    {navLinks.map((link, index) => {
                        if (link.title === "Men") {
                            return (
                                <div key={index} className="relative group ">
                                    <Link
                                        to={link.link}
                                        key={index}
                                        href="#"
                                        className="text-sm font-medium text-gray-700 hover:text-black"
                                    >
                                        {link.title}
                                    </Link>
                                    <div className='absolute opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300 
                                     grid grid-cols-5 gap-4 justify-center items-center px-4 py-4 z-50 bg-white shadow-xl rounded-2xl
                                     top-full -left-20 mt-0 w-[800px]'>
                                        {newcollections.map((link, index) => (
                                            <Link
                                                key={index}
                                                to={link.link}
                                                className="text-center font-medium text-gray-700 hover:text-black "
                                            >
                                                <div className="space-y-2">
                                                    <img src={link.img} alt={link.title} className='w-44 h-52 object-cover rounded-lg mx-auto' />
                                                    <p>{link.title}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )
                        }
                        else {
                            return (
                                <Link
                                    to={link.link}
                                    key={index}
                                    href="#"
                                    className="text-sm font-medium text-gray-700 hover:text-black"
                                >
                                    {link.title}
                                </Link>
                            )
                        }
                    })}
                </nav>


                <div className="flex items-center justify-center space-x-4">
                    <button aria-label="Search">
                        <Search className="h-5 w-5 text-gray-700" />
                    </button>
                    <div className="relative hidden lg:block group">
                        <button aria-label="User Menu">
                            <User className="h-6 w-6 border-2 border-gray-700 mt-1.5 rounded-xl text-gray-700" />
                        </button>
                        <div className="absolute -right-12 mt-0 w-48 pt-4 pb-6 px-6 bg-white shadow-xl rounded-2xl opacity-0 group-hover:opacity-100 hidden group-hover:block transition-opacity duration-500 z-50">
                            <div className=" flex flex-col space-y-3 text-sm text-gray-600">
                                <Link onClick={() => (handleLinkClick(), window.scrollTo({ top: 0, behavior: 'smooth' }))}
                                    to='/review' href="#" >Reviews</Link>
                                <Link onClick={() => (handleLinkClick(), window.scrollTo({ top: 0, behavior: 'smooth' }))}
                                    to='/store-locator' href="#">Stores Near Me</Link>
                                <Link onClick={() => (handleLinkClick(), window.scrollTo({ top: 0, behavior: 'smooth' }))}
                                    to='/contact-us' href="#">Contact Us</Link>
                                <a href="#">Track Order</a>
                                <a href="#">Return & Exchange</a>
                                {
                                    log ? <button onClick={logout}
                                        className="mt-4 w-full rounded bg-black py-2 text-white text-center">
                                        Log Out
                                    </button> :
                                        <button onClick={() => (handleLinkClick(), navigate('/login'), window.scrollTo({ top: 0, behavior: 'smooth' }))}
                                            className="mt-4 w-full rounded bg-black py-2 text-white text-center">
                                            Log In or Sign Up
                                        </button>
                                }
                            </div>
                        </div>
                    </div>
                    <Link to="/cart" className="relative">
                        <ShoppingBag
                            onClick={() => {
                                window.scrollTo({ top: 0, behavior: "smooth" })
                            }}
                            className="h-5 w-5 text-gray-700" />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </Link>

                </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="lg:hidden border-t fixed top-12 left-0 w-full border-gray-200 bg-white px-4 py-4">
                    <nav className="flex flex-col space-y-4">
                        {navLinks.map((link, index) => (
                            <Link
                                to={link.link}
                                key={index}
                                href="#"
                                onClick={() => handleLinkClick()}
                                className="text-base font-medium text-gray-700 hover:text-black"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </nav>
                    <div className="mt-6 flex flex-col space-y-2 border-t pt-4 text-sm text-gray-600">
                        <Link onClick={() => (handleLinkClick(), window.scrollTo({ top: 0, behavior: 'smooth' }))}
                            to='/review' href="#" >Reviews</Link>
                        <Link onClick={() => (handleLinkClick(), window.scrollTo({ top: 0, behavior: 'smooth' }))}
                            to='/store-locator' href="#">Stores Near Me</Link>
                        <Link onClick={() => (handleLinkClick(), window.scrollTo({ top: 0, behavior: 'smooth' }))}
                            to='/contact-us' href="#">Contact Us</Link>
                        <a href="#">Track Order</a>
                        <a href="#">Return & Exchange</a>
                        {
                            log ? <button onClick={logout}
                                className="mt-4 w-full rounded bg-black py-2 text-white text-center">
                                Log Out
                            </button> :
                                <button onClick={() => (handleLinkClick(), navigate('/login'), window.scrollTo({ top: 0, behavior: 'smooth' }))}
                                    className="mt-4 w-full rounded bg-black py-2 text-white text-center">
                                    Log In or Sign Up
                                </button>
                        }



                    </div>
                </div>
            )}
        </header>
    );
}

export default Header