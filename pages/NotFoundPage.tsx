
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-[60vh] text-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-9xl font-bold text-oceanBlue font-heading">404</h1>
                <p className="text-2xl font-semibold text-charcoal mt-4">Page Not Found</p>
                <p className="text-gray-600 mt-2">Sorry, the page you are looking for does not exist.</p>
                <div className="mt-8">
                    <Link to="/" className="bg-coralOrange text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-colors">
                        Go Back Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
