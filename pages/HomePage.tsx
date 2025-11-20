
import React from 'react';
import { Link } from 'react-router-dom';

// Fix: Changed JSX.Element to React.ReactNode to resolve namespace issue.
const ImpactMetric: React.FC<{ value: string; label: string; icon: React.ReactNode }> = ({ value, label, icon }) => (
    <div className="text-center">
        <div className="text-coralOrange mb-2">{icon}</div>
        <p className="text-4xl font-bold font-heading text-oceanBlue">{value}</p>
        <p className="text-charcoal mt-1">{label}</p>
    </div>
);

const HomePage: React.FC = () => {
    return (
        <div className="animate-fadeIn">
            {/* Hero Section */}
            <section className="relative bg-cover bg-center text-white" style={{ backgroundImage: "url('https://picsum.photos/1600/800?random=1')" }}>
                <div className="absolute inset-0 bg-oceanBlue bg-opacity-70"></div>
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4">Innovating for a Greener Planet.</h1>
                    <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">BioShell transforms seafood waste into valuable bioproducts, creating a truly circular economy.</p>
                    <div className="space-x-4">
                        <Link to="/process" className="bg-coralOrange text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-transform hover:scale-105">How It Works</Link>
                        <Link to="/products" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-oceanBlue transition-all">Our Products</Link>
                    </div>
                </div>
            </section>

            {/* Impact Metrics */}
            <section className="py-20 bg-warmGray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <ImpactMetric 
                            value="30%" 
                            label="Target Carbon Reduction" 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                        />
                        <ImpactMetric 
                            value="25%" 
                            label="Increase in Women's Leadership" 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                        />
                        <ImpactMetric 
                            value="100+" 
                            label="Tons of Waste Repurposed" 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>}
                        />
                    </div>
                </div>
            </section>
            
            {/* Mission Statement */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img src="https://picsum.photos/600/400?random=2" alt="Sustainable process" className="rounded-lg shadow-xl"/>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold font-heading text-forestGreen mb-4">Our Mission</h2>
                        <p className="text-lg text-charcoal mb-6">We are dedicated to creating a sustainable future by transforming seafood industry byproducts into high-value, biodegradable materials. Our innovative process not only reduces waste but also empowers local communities, particularly women entrepreneurs, through decentralized production hubs.</p>
                        <Link to="/about" className="text-coralOrange font-bold hover:underline">Learn more about us &rarr;</Link>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-20 bg-oceanBlue text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold font-heading mb-4">Stay Updated</h2>
                    <p className="mb-8 max-w-2xl mx-auto">Join our newsletter to get the latest updates on our projects, impact, and innovations.</p>
                    <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                        <input type="email" placeholder="Enter your email" className="flex-grow p-3 rounded-full bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-coralOrange" />
                        <button type="submit" className="bg-coralOrange text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-transform hover:scale-105">Subscribe</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
