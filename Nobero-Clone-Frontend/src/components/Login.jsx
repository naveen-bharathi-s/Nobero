import React, { useEffect, useState } from "react";
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

        // Check if user is already signed in
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                console.log("User already authenticated:", user)
                navigate("/", { replace: true })
            }
        });

        return () => unsubscribe();
    }, [navigate])

    const handleLogin = (e) => {
        e.preventDefault()
        setError("")
        setLoading(true)

        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log("Email login successful:", res.user)
                navigate("/", { replace: true })
            })
            .catch((err) => {
                console.error("Login error:", err)
                setError("Error signing in. Please check your credentials.")
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const handleGoogleSignup = async () => {
        try {
            setError("")
            setLoading(true)
            
            console.log("Starting Google popup login...")
            const result = await signInWithPopup(auth, Provider)
            
            if (result && result.user) {
                console.log("Google login successful:", result.user)
                navigate("/", { replace: true })
            }
        } catch (error) {
            console.error("Google Login Error:", error)
            
            // Handle specific error cases
            if (error.code === 'auth/popup-blocked') {
                setError("Popup was blocked. Please allow popups for this site and try again.")
            } else if (error.code === 'auth/popup-closed-by-user') {
                setError("Login cancelled.")
            } else if (error.code === 'auth/cancelled-popup-request') {
                // User opened another popup, ignore this error
                setError("")
            } else {
                setError("Google login failed. Please try again.")
            }
            
            setLoading(false)
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#fff6f1] to-[#fdece4] px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                    Welcome Back 👋
                </h2>

                {loading && (
                    <div className="text-center text-gray-600 mb-4">
                        Loading...
                    </div>
                )}

                {/* Email + Password Login */}
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-gray-600 mb-1">Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            disabled={loading}
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
                            disabled={loading}
                        />
                    </div>
                    
                    {error && (
                        <p className="text-red-500 text-sm font-semibold">
                            {error}
                        </p>
                    )}
                    
                    <button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
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
                    className="hidden lg:flex items-center justify-center gap-2 w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={loading}
                >
                    <FcGoogle className="text-xl" />
                    <span className="text-gray-700 font-medium">Sign in with Google</span>
                </button>

                {/* Footer */}
                <p className="text-center text-gray-600 mt-6 text-sm">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-orange-600 hover:underline font-medium">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;