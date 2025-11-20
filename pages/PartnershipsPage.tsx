
import React from 'react';

const PartnershipsPage: React.FC = () => {
    return (
        <div className="bg-warmGray-100 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl font-bold font-heading text-oceanBlue mb-4">Partner With Us</h1>
                        <p className="text-lg text-charcoal mb-6">Join us in building a sustainable future. We collaborate with seafood processors, chemical companies, investors, and community leaders to scale our impact. Let's create value together.</p>
                        
                        <div className="space-y-4">
                            <div className="bg-white p-4 rounded-lg shadow">
                                <h3 className="font-bold text-forestGreen">B2B Opportunities</h3>
                                <p>Integrate our sustainable materials into your supply chain.</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow">
                                <h3 className="font-bold text-forestGreen">Investor Relations</h3>
                                <p>Invest in a high-impact, scalable green technology solution.</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow">
                                <h3 className="font-bold text-forestGreen">Collaboration Inquiry</h3>
                                <p>Partner with us on research, development, or community projects.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-xl">
                        <h2 className="text-2xl font-bold font-heading text-charcoal mb-6 text-center">Partnership Inquiry Form</h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="companyName" className="block text-sm font-medium text-charcoal">Company Name</label>
                                <input type="text" id="companyName" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-oceanBlue focus:border-oceanBlue" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-charcoal">Email Address</label>
                                <input type="email" id="email" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-oceanBlue focus:border-oceanBlue" />
                            </div>
                            <div>
                                <label htmlFor="inquiryType" className="block text-sm font-medium text-charcoal">Type of Inquiry</label>
                                <select id="inquiryType" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-oceanBlue focus:border-oceanBlue">
                                    <option>B2B Opportunity</option>
                                    <option>Investment</option>
                                    <option>Collaboration</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-charcoal">Message</label>
                                <textarea id="message" rows={4} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-oceanBlue focus:border-oceanBlue"></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="w-full bg-coralOrange text-white font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition-colors">
                                    Submit Inquiry
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnershipsPage;
