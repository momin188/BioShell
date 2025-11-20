
import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div className="py-16 bg-warmGray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold font-heading text-oceanBlue">Get In Touch</h1>
                    <p className="mt-4 text-lg text-charcoal max-w-3xl mx-auto">We'd love to hear from you. Whether you're a potential partner, investor, or just passionate about sustainability, let's connect.</p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="bg-white p-8 rounded-lg shadow-xl">
                        <h2 className="text-2xl font-bold font-heading text-charcoal mb-6">Send Us a Message</h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-charcoal">Full Name</label>
                                <input type="text" id="name" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-oceanBlue focus:border-oceanBlue" />
                            </div>
                            <div>
                                <label htmlFor="contact-email" className="block text-sm font-medium text-charcoal">Email Address</label>
                                <input type="email" id="contact-email" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-oceanBlue focus:border-oceanBlue" />
                            </div>
                             <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-charcoal">Subject</label>
                                <input type="text" id="subject" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-oceanBlue focus:border-oceanBlue" />
                            </div>
                            <div>
                                <label htmlFor="contact-message" className="block text-sm font-medium text-charcoal">Message</label>
                                <textarea id="contact-message" rows={5} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-oceanBlue focus:border-oceanBlue"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-coralOrange text-white font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition-colors">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-lg shadow-xl">
                            <h3 className="text-xl font-bold font-heading text-forestGreen mb-4">Contact Information</h3>
                            <p className="text-charcoal mb-2"><strong>Email:</strong> info@bioshell.eco</p>
                            <p className="text-charcoal mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
                            <p className="text-charcoal"><strong>Address:</strong> 123 Sustainability Ave, Green City, 12345</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                           <div className="aspect-w-16 aspect-h-9">
                                <img src="https://picsum.photos/600/350?random=map2" alt="Office location map" className="w-full h-full object-cover"/>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
