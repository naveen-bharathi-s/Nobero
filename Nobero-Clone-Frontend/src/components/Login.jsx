import React, { use, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, Provider } from "../config/firebase";


const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })

        auth.onAuthStateChanged((user) => {
            if (user) {
                navigate("/")
            }
        })
    }, [])



    const handleLogin = (e) => {
        e.preventDefault()
        setError("")
        setLoading(true)

        signInWithEmailAndPassword(auth, email, password).then((res) => {
            navigate('/')
        }).catch(() => {
            setError("Error Signing in Please try again")
        }).finally (() => {
            setLoading(false)
        }
        )
    }

    const handleGoogleSignup = async () => {
        setError("")
        setLoading(true)
        try {
            await signInWithPopup(auth, Provider)
            navigate("/")
        } catch (error) {
            console.error("Google Login Error:", error.message)
            setError("Google login failed. Please try again")
        }  finally {
            setLoading(false)
        }
    }


    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#fff6f1] to-[#fdece4] px-4">
            <div onSubmit={handleLogin} className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                    Welcome Back 👋
                </h2>

                {/* Email + Password Login */}
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-600 mb-1">Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 mb-1">Password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            type="password"
                            placeholder="Enter your password"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>
                    <p
                        className="w-full text-red-500 rounded-lg font-semibold transition"
                    >
                        {error}
                    </p>
                    <button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition"
                    >
                        Login
                    </button>
                </form>

                {/* Divider */}
                <div className="hidden lg:flex items-center my-4">
                    <div className="flex-1 border-t border-gray-300"></div>
                    <p className="text-gray-500 mx-2 text-sm">or</p>
                    <div className="flex-1 border-t border-gray-300"></div>
                </div>

                {/* Google Sign-In */}
                <button
                    onClick={handleGoogleSignup}
                    type="button"
                    className="hidden lg:flex items-center justify-center gap-2 w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition"
                >
                    <FcGoogle className="text-xl" />
                    <span className="text-gray-700 font-medium">Sign in with Google</span>
                </button>

                {/* Footer */}
                <p className="text-center text-gray-600 mt-6 text-sm">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-orange-600 hover:underline font-medium">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;      