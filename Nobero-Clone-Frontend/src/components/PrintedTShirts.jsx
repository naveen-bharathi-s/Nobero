import { MinusIcon, PlusIcon } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { useCart } from '../CardContext'
import {auth, Provider} from '../config/firebase'
import { useNavigate } from 'react-router-dom'

const printedT = [
  {
    id: "Printed-1",
    pic: "https://nobero.com/cdn/shop/files/Powderblue_0050b85d-aef0-49f2-88c2-d015c1e5c171.jpg?v=1751970875&width=720",
    title: "Plain Classic Fit T-Shirt",
    price: "499",
    price1: (<>
      <span className='line-through text-gray-600 font-normal'>₹999</span>
      <span className='text-green-600'> ₹500 OFF</span>
    </>),
    desc: "Lowest price in last 30 days",
    review: "⭐️4.7 | 3",
  },
  {
    id: "Printed-2",
    pic: "https://nobero.com/cdn/shop/files/Befearlesslyauthentic.jpg?v=1756469907",
    title: "Authentic classic Fit T-Shirt",
    price: "499",
    price1: (<>
      <span className='line-through text-gray-600 font-normal'>₹999</span>
      <span className='text-green-600'> ₹500 OFF</span>
    </>),
    desc: "Lowest price in last 30 days",
    review: "⭐️4.8 | 278",
    sale: (<><span className='py-0.5 px-1'>BESTSELLER</span></>),
  },
  {
    id: "Printed-3",
    pic: "https://nobero.com/cdn/shop/files/Hopev2.jpg?v=1751898608&width=720",
    title: "Hope Classic Fit T-Shirt",
    price: "499",
    price1: (<>
      <span className='line-through text-gray-600 font-normal'>₹999</span>
      <span className='text-green-600'> ₹500 OFF</span>
    </>),
    desc: "Lowest price in last 30 days",
    review: "⭐️4.9 | 72",
    sale: (<><span className='py-0.5 px-1'>BESTSELLER</span></>),
  },
  {
    id: "Printed-4",
    pic: "https://nobero.com/cdn/shop/files/NEWSTORYUNFOLDS4.19.58_C_PM.jpg?v=1757681843&width=533",
    title: "Wanderer Soul Classic Fit T-Shirts",
    price: "499",
    price1: (<>
      <span className='line-through text-gray-600 font-normal'>₹999</span>
      <span className='text-green-600'> ₹500 OFF</span>
    </>),
    desc: "Lowest price in last 30 days",
    review: "⭐️4.8 | 227",
    sale: (<><span className='py-0.5 px-1'>BESTSELLER</span></>),
  },
  {
    id: "Printed-5",
    pic: "https://nobero.com/cdn/shop/files/And_6681f5d7-1bf8-4121-92ac-d129b17de2d5.jpg?v=1756469414&width=533",
    title: "AND Life Goes On Classic T-Shirt",
    price: "599",
    price1: (<>
      <span className='line-through text-gray-600 font-normal'>₹999</span>
      <span className='text-green-600'> ₹500 OFF</span>
    </>),
    desc: "Lowest price in last 30 days",
    review: "⭐️4.8 | 122",
    sale: (<><span className='py-0.5 px-1'>BESTSELLER</span></>),
  },
  {
    id: "Printed-6",
    pic: "https://nobero.com/cdn/shop/files/make-things-happen-5.jpg?v=1757682424&width=533",
    title: "Make Things Happen T-Shirt",
    price: "499",
    price1: (<>
      <span className='line-through text-gray-600 font-normal'>₹999</span>
      <span className='text-green-600'> ₹500 OFF</span>
    </>),
    desc: "Lowest price in last 30 days",
    review: "⭐️4.8 | 23",
  },
  {
    id: "Printed-7",
    pic: "https://nobero.com/cdn/shop/files/BeAuthentic.jpg?v=1757679594&width=533",
    title: "Be Authentic Classic Fit",
    price: "499",
    price1: (<>
      <span className='line-through text-gray-600 font-normal'>₹999</span>
      <span className='text-green-600'> ₹500 OFF</span>
    </>),
    desc: "Lowest price in last 30 days",
    review: "⭐️4.8 | 217",
    sale: (<><span className='py-0.5 px-1'>BESTSELLER</span></>),
  },
  {
    id: "Printed-8",
    pic: "https://nobero.com/cdn/shop/files/RichRisk.jpg?v=1757679655&width=533",
    title: "Balance Classic Fit T-Shirt",
    price: "499",
    price1: (<>
      <span className='line-through text-gray-600 font-normal'>₹999</span>
      <span className='text-green-600'> ₹500 OFF</span>
    </>),
    desc: "Lowest price in last 30 days",
    review: "⭐️4.7 | 32",

  },
  {
    id: "Printed-9",
    pic: "https://nobero.com/cdn/shop/files/Slowlife_02c4fca4-a682-4c7d-ba91-c95b227cbd86.jpg?v=1751911004&width=533",
    title: "Freedom V2 Classic Fit",
    price: "499",
    price1: (<>
      <span className='line-through text-gray-600 font-normal'>₹999</span>
      <span className='text-green-600'> ₹500 OFF</span>
    </>),
    desc: "Lowest price in last 30 days",
    review: "⭐️4.9 | 222",
    sale: (<><span className='py-0.5 px-1'>BESTSELLER</span></>),
  },
  {
    id: "Printed-10",
    pic: "https://nobero.com/cdn/shop/files/Spring_a05f7e33-792d-4cb8-8542-75a084c7fc4f.jpg?v=1757679018&width=533",
    title: "Make your own story Fit",
    price: "499",
    price1: (<>
      <span className='line-through text-gray-600 font-normal'>₹999</span>
      <span className='text-green-600'> ₹500 OFF</span>
    </>),
    desc: "Lowest price in last 30 days",
    review: "⭐️4.8 | 27",
    sale: (<><span className='py-0.5 px-1'>BESTSELLER</span></>),
  },
  {
    id: "Printed-11",
    pic: "https://nobero.com/cdn/shop/files/Unexploredwinered.jpg?v=1757681492&width=533",
    title: "Simplicity Classic Fit T-Shirt",
    price: "499",
    price1: (<>
      <span className='line-through text-gray-600 font-normal'>₹999</span>
      <span className='text-green-600'> ₹500 OFF</span>
    </>),
    desc: "Lowest price in last 30 days",
    review: "⭐️4.2 | 21",
  },
  {
    id: "Printed-12",
    pic: "https://nobero.com/cdn/shop/files/made-by-society-5.jpg?v=1757682447&width=533",
    title: "Made By Society Classic",
    price: "499",
    price1: (<>
      <span className='line-through text-gray-600 font-normal'>₹999</span>
      <span className='text-green-600'> ₹500 OFF</span>
    </>),
    desc: "Lowest price in last 30 days",
    review: "⭐️4.7 | 172",

  },
  {
    id: "Printed-13",
    pic: "https://nobero.com/cdn/shop/files/staywild.jpg?v=1757681796&width=533",
    title: "Minimal Classic Fit T-Shirt",
    price: "499",
    price1: (<>
      <span className='line-through text-gray-600 font-normal'>₹999</span>
      <span className='text-green-600'> ₹500 OFF</span>
    </>),
    desc: "Lowest price in last 30 days",
    review: "⭐️4.9 | 22",
  },
  {
    id: "Printed-14",
    pic: "https://nobero.com/cdn/shop/files/ukiyo_a197855e-ce72-4a22-92bc-f2914fa28fb2.jpg?v=1751911589&width=533",
    title: "Breaking Free Classic",
    price: "499",
    price1: (<>
      <span className='line-through text-gray-600 font-normal'>₹999</span>
      <span className='text-green-600'> ₹500 OFF</span>
    </>),
    desc: "Lowest price in last 30 days",
    review: "⭐️5 | 22",
    sale: (<><span className='py-0.5 px-1'>BESTSELLER</span></>),
  },
  {
    id: "Printed-15",
    pic: "https://nobero.com/cdn/shop/files/make_it_happen_85a36ac6-2842-4c78-a896-f3451dec66f0.jpg?v=1757682623&width=533",
    title: "Voyage Classic Fit T-Shirts",
    price: "499",
    price1: (<>
      <span className='line-through text-gray-600 font-normal'>₹999</span>
      <span className='text-green-600'> ₹500 OFF</span>
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

const PrintedTShirts = () => {

  // const [quantity, setQuantity] = useState({});

  // const handleAddToCart = (index) => {
  //   setQuantity((prev) => ({
  //     ...prev, [index]: (prev[index] || 0) + 1,
  //   }));
  // };
  // const handleReduceFromCart = (index) => {
  //   setQuantity((prev) => ({
  //     ...prev, [index]: prev[index] > 0 ? prev[index] - 1 : 0,
  //   }));
  // }

  const navigate = useNavigate()

  useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })

        auth.onAuthStateChanged((user) => {
            if (user) {
               navigate("/printed-t-shirts")
            }else{
              navigate("/login")
            }
        })
    }, [])

  const { addToCart, removeFromCart, cartItems } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [showSizeModal, setShowSizeModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Filtered products
  const filteredTshirts = printedT.filter((item) =>
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

  const handleRemove = (item) => {
    const existing = cartItems.find((p) => p.id === item.id)
    if (existing) removeFromCart(existing)
  }

  return (
    <div>
      <div>
        <img src="https://nobero.com/cdn/shop/files/Collection_Banner_Mobile_-14_1.jpg?v=1758654008&width=720"
          alt="Nobero" className='lg:hidden w-full h-auto' />
        <img src="https://nobero.com/cdn/shop/files/Classic_Tee_1.jpg?v=1758654008"
          alt="Nobero" className='hidden lg:block w-full h-auto' />
      </div>

      {/* <div className='text-center'>
        <input type="search" className='w-3/4 p-2 border-[1px] hover:border-black rounded-sm mx-auto mt-4 outline-none' placeholder='Search...' />
      </div> */}
      {/* 🔍 Search */}
      <div className="text-center">
        <input
          type="search"
          className="w-3/4 p-2 border rounded-sm mx-auto mt-4 outline-none"
          placeholder="Search t-shirts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
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
            {filteredTshirts.map((newcollection, index) => (
              <div key={index} className='my-2 mx-1 lg:m-2 relative border-2 cursor-pointer shadow-md 
                hover:shadow-lg rounded-sm hover:rounded-md'>
                <div className='relative'>
                  <img src={newcollection.pic} alt="" className='w-full lg:w-[260px] h-72 md:h-[350px] lg:h-[320px]' />
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

export default PrintedTShirts