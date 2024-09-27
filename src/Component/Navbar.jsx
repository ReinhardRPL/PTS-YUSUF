import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../public/ferrari-logo.png';

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);

    const handleScroll = () => {
        setScrolling(window.scrollY > 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-10 p-4 flex items-center transition-all duration-300 ${scrolling ? 'shadow-md' : 'bg-transparent'}`}>
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-x-12">
                    <img 
                        src={Logo} 
                        alt="Ferrari Logo" 
                        className="w-10 h-auto" 
                    />
                    <ul className="flex space-x-20 text-white font-bold text-sm uppercase tracking-wide">
                        {['Home', 'Cars', 'Collections', 'Accessories', 'About'].map((item) => (
                            <li key={item} className="relative group">
                                <Link 
                                    to={item === 'Cars' ? '/cars' : `/${item.toLowerCase().replace(/ /g, '-')}`} 
                                    className="hover:text-red-500 transition duration-300"
                                >
                                    {item}
                                </Link>
                                <span className="absolute left-0 -bottom-1 w-0 h-1 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="text-white ml-auto">
                    <Link 
                        to="/login" 
                        className="border border-white px-4 py-1 rounded-full hover:bg-red-500 transition duration-300 font-semibold hover:text-white"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
