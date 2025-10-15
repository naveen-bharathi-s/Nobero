import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth, Provider } from "../config/firebase";

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })

        // Check if user is already signed in
        auth.onAuthStateChanged((user) => {
            if (user) {
                navigate("/")
            }
        })
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        setLoading(true)

        // Check if passwords match
        if (password !== confirmPassword) {
            setError("Passwords do not match")
            setLoading(false)
            return;
        }

        // Check password length
        if (password.length < 6) {
            setError("Password must be at least 6 characters")
            setLoading(false)
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password)
            await signOut(auth);
            console.log("User registered:", email)
            navigate('/login')
        } catch (error) {
            console.error("Signup Error:", error)

            // Handle specific Firebase errors
            if (error.code === 'auth/email-already-in-use') {
                setError("This email is already registered. Please login instead.")
            } else if (error.code === 'auth/invalid-email') {
                setError("Invalid email address.")
            } else if (error.code === 'auth/weak-password') {
                setError("Password is too weak. Please use a stronger password.")
            } else {
                setError("Signup failed. Please try again.")
            }
        } finally {
            setLoading(false)
        }
    }

    const handleGoogleSignup = async () => {
        try {
            setError("")
            setLoading(true)

            await signInWithPopup(auth, Provider)
            navigate("/")
        } catch (error) {
            console.error("Google Signup Error:", error)

            // Handle specific error cases
            if (error.code === 'auth/popup-blocked') {
                setError("Popup was blocked. Please allow popups for this site and try again.")
            } else if (error.code === 'auth/popup-closed-by-user') {
                setError("Signup cancelled.")
            } else if (error.code === 'auth/cancelled-popup-request') {
                // User opened another popup, ignore this error
                setError("")
            } else if (error.code === 'auth/account-exists-with-different-credential') {
                setError("An account already exists with this email. Please login instead.")
            } else {
                setError("Google signup failed. Please try again.")
            }

            setLoading(false)
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#fff6f1] to-[#fdece4] px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                    Create Account ✨
                </h2>

                {loading && (
                    <div className="text-center text-gray-600 mb-4">
                        Loading...
                    </div>
                )}

                {/* Email + Password Signup */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-600 mb-1">Email</label>
                        <input
                            value={email}
                            type="email"
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            disabled={loading}
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 mb-1">Password</label>
                        <input
                            value={password}
                            type="password"
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            disabled={loading}
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 mb-1">Confirm Password</label>
                        <input
                            value={confirmPassword}
                            type="password"
                            placeholder="Re-enter your password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
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
                        {loading ? "Signing up..." : "Sign Up"}
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
                    <span className="text-gray-700 font-medium">Sign up with Google</span>
                </button>

                {/* Footer */}
                <p className="text-center text-gray-600 mt-6 text-sm">
                    Already have an account?{" "}
                    <Link to="/login" className="text-orange-600 hover:underline font-medium">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;