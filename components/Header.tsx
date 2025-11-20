
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'How It Works', path: '/process' },
    { name: 'Impact', path: '/impact' },
    { name: 'Community', path: '/community' },
    { name: 'Partnerships', path: '/partnerships' },
    { name: 'About', path: '/about' },
    { name: 'News & Resources', path: '/news' },
];

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const activeLinkClass = 'text-coralOrange';
    const inactiveLinkClass = 'hover:text-coralOrange transition-colors';

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <NavLink to="/" className="text-2xl font-bold font-heading text-oceanBlue">
                            BioShell
                        </NavLink>
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `${isActive ? activeLinkClass : inactiveLinkClass} font-semibold`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </nav>
                    
                    <div className="hidden md:block">
                        <NavLink to="/contact" className="bg-coralOrange text-white font-bold py-2 px-4 rounded-full hover:bg-opacity-90 transition-all">
                            Contact Us
                        </NavLink>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-charcoal focus:outline-none"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-white pb-4">
                    <nav className="flex flex-col items-center space-y-4">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) =>
                                    `${isActive ? activeLinkClass : inactiveLinkClass} font-semibold text-lg`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <NavLink to="/contact" onClick={() => setIsMenuOpen(false)} className="bg-coralOrange text-white font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all">
                            Contact Us
                        </NavLink>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
