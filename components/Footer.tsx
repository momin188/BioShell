
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-charcoal text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold font-heading mb-4">BioShell</h3>
                        <p className="text-warmGray-300">Transforming waste into sustainable solutions for a circular economy.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold font-heading mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="hover:text-coralOrange transition-colors">About Us</Link></li>
                            <li><Link to="/products" className="hover:text-coralOrange transition-colors">Products</Link></li>
                            <li><Link to="/impact" className="hover:text-coralOrange transition-colors">Our Impact</Link></li>
                            <li><Link to="/news" className="hover:text-coralOrange transition-colors">News</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold font-heading mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li><Link to="#" className="hover:text-coralOrange transition-colors">Privacy Policy</Link></li>
                            <li><Link to="#" className="hover:text-coralOrange transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold font-heading mb-4">Connect With Us</h4>
                         <div className="flex space-x-4">
                            <a href="#" aria-label="LinkedIn" className="text-warmGray-300 hover:text-coralOrange transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-4.484 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="Twitter" className="text-warmGray-300 hover:text-coralOrange transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.063c0 2.278 1.616 4.178 3.765 4.61-1.002.272-1.928.31-2.786.104.598 1.864 2.333 3.22 4.394 3.257-1.787 1.4-4.049 2.235-6.517 2.235-.423 0-.84-.025-1.25-.074 2.308 1.481 5.063 2.344 8.041 2.344 9.641 0 14.912-7.99 14.61-15.105.995-.718 1.858-1.62 2.548-2.643z" />
                                </svg>
                            </a>
                         </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 text-center text-warmGray-300">
                    <p>&copy; {new Date().getFullYear()} BioShell. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
