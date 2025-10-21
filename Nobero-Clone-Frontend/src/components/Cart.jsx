import React, { useEffect, useState } from "react";
import { useCart } from "../CardContext";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { Currency } from "lucide-react";
import axios from "axios"

const Cart = () => {

    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })

        const unsubscribe =
            auth.onAuthStateChanged((user) => {
                if (user) {
                    navigate("/cart")
                } else {
                    clearCart()
                    navigate("/login")
                }
            })

        return () => unsubscribe()
    }, [])

    const { cartItems, clearCart, addToCart, removeFromCart } = useCart();
    const [loading, setLoading] = useState(false);
    const total = cartItems.reduce(
        (acc, item) => {
            const price = Number(item.price.replace(/[^0-9.-]+/g, ""));
            return (acc + item.qty * price); // you can adjust price dynamically
        }, 0
    );

    if (cartItems.length === 0)
        return <h2 className="text-center min-h-max my-60 text-gray-600">🛒 Your cart is empty</h2>;

    const localBackendUrl = "https://nobero-app.onrender.com/api/payment"

    const handleBuyNow = (async () => {
        try {
            setLoading(true);
            const { data } = await axios.post(`${localBackendUrl}/orders`, { amount: total })
            initcatePayment(data);
        } catch (err) {
            console.log(err)
            alert("Something went wrong, please try again!")
            setLoading(false)
        }
    })

    const initcatePayment = (orderData) => {
        console.log(orderData)
        const options = {
            key: 'rzp_test_RTmHbwDXHEbAzB',
            amount: orderData.data.amount,
            Currency: orderData.data.Currency,
            desc: 'test payment method',
            order_id: orderData.data.id,
            handler: async (res) => {
                try {
                    const verifyRes = await axios.post(`${localBackendUrl}/verify`, res)
                    if (verifyRes.status === 200) {
                        alert('Payment Verified...')
                        clearCart()
                    } else {
                        alert('Payment Failed...')
                    }
                } catch (err) {
                    alert("payment verification failed.")
                } finally {
                    setLoading(false);
                }
            },
            theme: {
                color: '#3399cc'
            },
        }

        const razorpay_popup = new window.Razorpay(options)
        razorpay_popup.open()
    }

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>

            {cartItems.map((item, index) => (
                <div
                    key={`${item.id}-${item.size}`}
                    className="flex justify-between items-center border-b py-3"
                >
                    <div className="flex items-center gap-3">
                        <img src={item.pic} alt={item.title} className="w-16 h-16 object-cover rounded" />
                        <div>
                            <p className="font-medium">{item.title}</p>
                            <p className="text-gray-700">Size: {item.size}</p>
                            <div className="flex items-center gap-1">
                                {/* quantity buttons */}
                                <button onClick={() => removeFromCart(item)}
                                    className="bg-gray-200 px-2 rounded-xl font-bold">
                                    -
                                </button>
                                <span
                                    className="font-medium">{item.qty}
                                </span>
                                <button onClick={() => addToCart(item)}
                                    className="bg-gray-200 px-2 rounded-xl font-bold">
                                    +
                                </button>
                            </div>
                            {/* <p className="text-gray-600 text-sm">Qty: {item.qty}</p> */}
                            <p className="text-gray-600 text-sm">Price: ₹{item.price}</p>
                        </div>
                    </div>
                    <p className="font-semibold">₹{(item.qty *
                        Number(item.price.toString().replace(/[^0-9.-]+/g, ""))).toLocaleString('en-IN')}</p>
                </div>
            ))}

            <div className="flex justify-between mt-4 font-bold">
                <p>Total:</p>
                <p>₹{total.toLocaleString('en-IN')}</p>
            </div>

            <div className="flex justify-between">
                <button
                    onClick={clearCart}
                    className="mt-6 bg-red-500 text-white px-4 py-2 rounded-md"
                >
                    Clear Cart
                </button>

                <button
                    onClick={handleBuyNow}
                    disabled={loading}
                    className={`mt-6 flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md
                        ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                    {loading ? (<>
                        <svg
                            className="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                            ></path>
                        </svg>
                        Processing...
                    </>) : ("Check Out")}
                </button>
            </div>
        </div>
    );
};

export default Cart;