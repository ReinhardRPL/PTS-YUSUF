import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer'; 
import Logo from '../../public/ferrari-logo.png';

const Login = () => {
    return (
        <div className="bg-gradient-to-r from-black to-gray-900 min-h-screen flex flex-col">
            <Navbar /> 
            <div className="flex-grow flex items-center justify-center mt-24">
                <div className="bg-red-800 rounded-xl shadow-lg p-6 max-w-sm w-full transition-transform transform hover:scale-105 mb-12"> 
                    <div className="flex justify-center mb-6">
                        <img src={Logo} alt="Ferrari Logo" className="w-24 h-auto" /> 
                    </div>
                    <h1 className="text-2xl font-extrabold text-center text-white mb-4">Login to Ferrari</h1>
                    <form className="flex flex-col">
                        <label className="text-sm text-white mb-1" htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            className="p-2 mb-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
                            placeholder="Enter your email"
                            required
                        />
                        <label className="text-sm text-white mb-1" htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            className="p-2 mb-6 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
                            placeholder="Enter your password"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-white text-red-600 font-bold py-2 rounded-lg hover:bg-red-500 hover:text-white transition duration-200"
                        >
                            Login
                        </button>
                    </form>
                    <p className="text-white text-center mt-4 text-xs">
                        Don’t have an account? <a href="#" className="text-red-300 underline">Sign Up</a>
                    </p>
                </div>
            </div>
            <Footer className="mt-12" /> 
        </div>
    );
};

export default Login;
