import { MinusIcon, PlusIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useCart } from '../CardContext'
import { useNavigate } from 'react-router-dom'
import {auth, Provider} from '../config/firebase'

const joggers = [
  {
    id: "Joggers-1",
    pic: "https://nobero.com/cdn/shop/files/ZIpPocketChatGptImages1.jpg?v=1759931249&width=360",
    title: "Zip-Pocket Joggers",
    price: "899",
    price1: (<>
      <span className='line-through text-gray-600 font-normal'>₹1,999</span>
      <span className='text-green-600'> ₹1,100 OFF</span>
    </>),
    desc: "Lowest price in last 30 days",
    review: "⭐️4.8 | 151",
    sale: (<><span className='py-0.5 px-1'>BESTSELLER</span></>),
  },
  {
    id: "Joggers-2",
    pic: "https://nobero.com/cdn/shop/files/6_dec08272-ef06-4433-91cb-e4d036595e57.jpg?v=1759924714&width=360",
    title: "Authentic classic Fit T-Shirt",
    price: "999",
    price1: (<>
      <span className='line-through text-gray-600 font-normal'>₹1,999</span>
      <span className='text-green-600'> ₹1,000 OFF</span>
    </>),
    desc: "Lowest price in last 30 days",
    review: "⭐️4.8 | 68",
  },
  {
    id: "Joggers-3",
    pic: "https://nobero.com/cdn/shop/files/50WebImages3.webp?v=1748349795&width=360",
    title: "Olive Piping Joggers",
    price: "1,199",
    price1: (<>
      <span className='line-through text-gray-600 font-normal'>₹2,499</span>
      <span className='text-green-600'> ₹1,300 OFF</span>
    </>),
    desc: "Lowest price in last 30 days",
    review: "⭐️4.9 | 22",
    sale: (<><span className='py-0.5 px-1'>BESTSELLER</span></>),
  },
  {
    id: "Joggers-4",
    pic: "https://nobero.com/cdn/shop/files/ArcticWolf_5b169258-5cd0-49c5-8d12-eb05e9beb0c8.jpg?v=1758019407&width=360",
    title: "Oversized Cargo Track",
    price: "999",
    price1: (<>
      <span className='line-through text-gray-600 font-normal'>₹2,199</span>
      <span className='text-green-600'> ₹1,200 OFF</span>
    </>),
    desc: "Lowest price in last 30 days",
    review: "⭐️4.8 | 73",
    sale: (<><span className='py-0.5 px-1'>BESTSELLER</span></>),
  },
  {
    id: "Joggers-5",
    pic: "https://nobero.com/cdn/shop/files/BlackOlive_6232e869-39a2-4a6d-92c4-c32c644f516b.jpg?v=1757914189&width=360",
    title: "2-Pack Zip Pocket Joggers",
    price: "1,499",
    price1: (<>
      <span className='line-through text-gray-600 font-normal'>₹3,999</span>
      <span className='text-green-600'> ₹2,500 OFF</span>
    </>),
    desc: "Lowest price in last 30 days",
    review: "⭐️4.8 | 12",
  },
  {
    id: "Joggers-6",
    pic: "https://nobero.com/cdn/shop/files/Allinonefeatures3_0c35218c-323e-4262-b434-38fbbdfbe9c8.webp?v=1753676965&width=360",
    title: "Wanderer - Travel Joggers",
    price: "1,999",
    price1: (<>
      <span className='line-through text-gray-600 font-normal'>₹2,999</span>
      <span className='text-green-600'> ₹1,000 OFF</span>
    </>),
    desc: "Lowest price in last 30 days",
    review: "⭐️4.8 | 136",
  },
  {
    id: "Joggers-7",
    pic: "https://nobero.com/cdn/shop/files/ss25joggerfront8.jpg?v=1748350541&width=360",
    title: "Zenline Joggers",
    price: "1,299",
    price1: (<>
      <span className='line-through text-gray-600 font-normal'>₹2,599</span>
      <span className='text-green-600'> ₹1,300 OFF</span>
    </>),
    desc: "Lowest price in last 30 days",
    review: "⭐️4.9 | 7",
    sale: (<><span className='py-0.5 px-1'>BESTSELLER</span></>),
  },
  {
    id: "Joggers-8",
    pic: "https://nobero.com/cdn/shop/files/OversizedCargoPocketJoggers_1_bc6a8b77-4319-49ed-be52-a07428777e46.jpg?v=1757597136&width=360",
    title: "Oversized Cargo Pocket",
    price: "999",
    price1: (<>
      <span className='line-through text-gray-600 font-normal'>₹2,599</span>
      <span className='text-green-600'> ₹1,600 OFF</span>
    </>),
    desc: "Lowest price in last 30 days",
    review: "⭐️4.7 | 32",
  },
  {
    id: "Joggers-9",
    pic: "https://nobero.com/cdn/shop/files/c172988da79f1741560913374389fda3_2.jpg?v=1757661043&width=360",
    title: "Oversized Jackson Joggers",
    price: "999",
    price1: (<>
      <span className='line-through text-gray-600 font-normal'>₹2,299</span>
      <span className='text-green-600'> ₹1,300 OFF</span>
    </>),
    desc: "Lowest price in last 20 days",
    review: "⭐️4.9 | 118",
    sale: (<><span className='py-0.5 px-1'>BESTSELLER</span></>),
  },
  {
    id: "Joggers-10",
    pic: "https://nobero.com/cdn/shop/files/LosAngeles_282c3ba5-e27e-4b18-b967-1694f2baacf1.jpg?v=1754982221&width=360",
    title: "Los Angeles Joggers",
    price: "999",
    price1: (<>
      <span className='line-through text-gray-600 font-normal'>₹2,599</span>
      <span className='text-green-600'> ₹1,600 OFF</span>
    </>),
    desc: "Lowest price in last 30 days",
    review: "⭐️5.0 | 3",
  },
  {
    id: "Joggers-11",
    pic: "https://nobero.com/cdn/shop/files/5_9d871db9-0065-43b8-94f2-c5adcd0edca4.jpg?v=1759924714&width=360",
    title: "Classic Straight Fit Joggers",
    price: "999",
    price1: (<>
      <span className='line-through text-gray-600 font-normal'>₹1,199</span>
      <span className='text-green-600'> ₹1,000 OFF</span>
    </>),
    desc: "Lowest price in last 30 days",
    review: "⭐️4.2 | 21",
  },
  {
    id: "Joggers-12",
    pic: "https://nobero.com/cdn/shop/files/Black_a3d8472d-c35f-4843-948d-c9790199d503.jpg?v=1759928441&width=360",
    title: "Oversized Cargo Track",
    price: "999",
    price1: (<>
      <span className='line-through text-gray-600 font-normal'>₹1,999</span>
      <span className='text-green-600'> ₹1,200 OFF</span>
    </>),
    desc: "Lowest price in last 30 days",
    review: "⭐️4.9 | 191",
  },
  {
    id: "Joggers-13",
    pic: "https://nobero.com/cdn/shop/files/Style1Web5.webp?v=1750307500&width=360",
    title: "Oversized Side Striped",
    price: "999",
    price1: (<>
      <span className='line-through text-gray-600 font-normal'>₹2,399</span>
      <span className='text-green-600'> ₹1,400 OFF</span>
    </>),
    desc: "Lowest price in last 30 days",
    review: "⭐️4.9 | 13",
  },
  {
    id: "Joggers-14",
    pic: "https://nobero.com/cdn/shop/files/2_766742d1-c552-48a0-be8e-48362b2741de.jpg?v=1759924714&width=360",
    title: "Classic Straight Fit Joggers",
    price: "999",
    price1: (<>
      <span className='line-through text-gray-600 font-normal'>₹1,999</span>
      <span className='text-green-600'> ₹1,000 OFF</span>
    </>),
    desc: "Lowest price in last 30 days",
    review: "⭐️4.9 | 95",
    sale: (<><span className='py-0.5 px-1'>BESTSELLER</span></>),
  },
  {
    id: "Joggers-15",
    pic: "https://nobero.com/cdn/shop/files/ss25joggerfront1.jpg?v=1748350306&width=360",
    title: "Wave Joggers",
    price: "1,199",
    price1: (<>
      <span className='line-through text-gray-600 font-normal'>₹2,599</span>
      <span className='text-green-600'> ₹1,400 OFF</span>
    </>),
    desc: "Lowest price in last 30 days",
    review: "⭐️5 | 7",
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

const neck = [
  {
    title: "Round Neck"
  },
]

const sleeve = [
  {
    title: "Short Sleeves"
  },
]

const fit = [
  {
    title: "Regular Fit"
  },
]

const fabric = [
  {
    title: "Cotton"
  },
]

const pattern = [
  {
    title: "Printed"
  },
  {
    title: "Solid"
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

const Joggers = () => {
  // const [quantity, setQuantity] = useState({});

  //   const handleAddToCart = (index) => {
  //     setQuantity((prev) => ({
  //       ...prev, [index]: (prev[index] || 0) + 1,
  //     }));
  //   };
  //   const handleReduceFromCart = (index) => {
  //     setQuantity((prev) => ({
  //       ...prev, [index]: prev[index] > 0 ? prev[index] - 1 : 0,
  //     }));
  //   }

  const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })

        auth.onAuthStateChanged((user) => {
            if (user) {
                navigate("/joggers")
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
  const filteredJoggers = joggers.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getQty = (id) => {
    // show total quantity (sum of all sizes)
    return cartItems.filter((item) => item.id === id)
      .reduce((acc, curr) => acc + curr.qty, 0)
  }


  // Example available sizes
  const sizeOptions = ["S", "M", "L", "XL", "XXL", "XXXL"];

  const handleAddClick = (item) => {
    setSelectedItem(item);
    setShowSizeModal(true);
  };

  const handleSizeSelect = (size) => {
    addToCart({ ...selectedItem, size });
    setShowSizeModal(false);
    setSelectedItem(null);
  };


  return (
    <div>
      <div>
        <img src="https://nobero.com/cdn/shop/files/Mob_Banner_Joggers.jpg?v=1758012051"
          alt="Nobero" className='lg:hidden w-full h-auto' />
        <img src="https://nobero.com/cdn/shop/files/Web_Banner_Joggers.jpg?v=1758012051"
          alt="Nobero" className='hidden lg:block w-full h-auto' />
      </div>
      <div className="text-center">
        <input
          type="search"
          className="w-3/4 p-2 border rounded-sm mx-auto mt-4 outline-none"
          placeholder="Search Joggers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>

      </div>
      <div className='pt-6 pb-3 px-4 lg:py-6 flex justify-between items-center gap-4 lg:hidden'>
        <h2 className=' font-semibold md:text-xl'>Everday T-shirt for Men</h2>
        <p className='text-gray-600 text-sm md:text-base'>145 items</p>
      </div>

      <div className='py-8'>
        <div className='hidden pb-4 lg:flex justify-around items-center gap-48  '>
          <div className='flex justify-start items-center gap-4'>
            <h2 className='font-bold text-2xl'>Everday T-shirt for Men</h2>
            <p className='text-gray-600 font-semibold mt-2'>145 items</p>
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
                <p className='text-lg'>Neck</p>
                {neck.map((list, index) => (
                  <ul key={index} className='space-y-3 text-lg'>
                    <li className='flex gap-6 justify-start cursor-pointer'>
                      <input type="checkbox" className='w-5 h-5 mt-1.5' />
                      <p className='text-gray-700'>{list.title}</p>
                    </li>
                  </ul>
                ))}
              </div>
              <div className='space-y-2 py-3 border-b-[1px]'>
                <p className='text-lg'>Sleeve Length</p>
                {sleeve.map((list, index) => (
                  <ul key={index} className='space-y-3 text-lg'>
                    <li className='flex gap-6 justify-start cursor-pointer'>
                      <input type="checkbox" className='w-5 h-5 mt-1.5' />
                      <p className='text-gray-700'>{list.title}</p>
                    </li>
                  </ul>
                ))}
              </div>
              <div className='space-y-2 py-3 border-b-[1px]'>
                <p className='text-lg'>Fit</p>
                {fit.map((list, index) => (
                  <ul key={index} className='space-y-3 text-lg'>
                    <li className='flex gap-6 justify-start cursor-pointer'>
                      <input type="checkbox" className='w-5 h-5 mt-1.5' />
                      <p className='text-gray-700'>{list.title}</p>
                    </li>
                  </ul>
                ))}
              </div>
              <div className='space-y-2 py-3 border-b-[1px]'>
                <p className='text-lg'>Fabric</p>
                {fabric.map((list, index) => (
                  <ul key={index} className='space-y-3 text-lg'>
                    <li className='flex gap-6 justify-start cursor-pointer'>
                      <input type="checkbox" className='w-5 h-5 mt-1.5' />
                      <p className='text-gray-700'>{list.title}</p>
                    </li>
                  </ul>
                ))}
              </div>
              <div className='space-y-2 py-3 border-b-[1px]'>
                <p className='text-lg'>Pattern</p>
                {pattern.map((list, index) => (
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
            {filteredJoggers.map((newcollection, index) => (
              <div key={index} className='my-2 mx-1 lg:m-2 relative border-2 cursor-pointer shadow-md 
                  hover:shadow-lg rounded-sm hover:rounded-md'>
                <div className='relative'>
                  <img src={newcollection.pic} alt="Nobero" className='w-full lg:w-[260px] h-80 md:h-[400px] lg:h-[360px]' />
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
                  {/* <button
                    className="flex items-center gap-2 mt-2 text-white bg-blue-500 px-2 py-1 rounded-md border-2 text-sm font-medium"
                  >
                    <MinusIcon className="h-4 w-4" onClick={() => handleReduceFromCart(index)} />
                    <span>{quantity[index] > 0 ? quantity[index] : "Add"}</span>
                    <PlusIcon className="h-4 w-4" onClick={() => handleAddToCart(index)} />
                  </button> */}
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

export default Joggers