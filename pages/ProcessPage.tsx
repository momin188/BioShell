import React, { useState } from 'react';

const steps = [
    { title: 'Waste Collection', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10', description: 'Seafood waste like shells from shrimp, crabs, and oysters is collected from processors and partners, preventing it from ending up in landfills.' },
    { title: 'Bio-Refining', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-.517-3.86l-2.387-.477zM12 18a6 6 0 100-12 6 6 0 000 12z', description: 'The collected biomass undergoes a proprietary, eco-friendly process to extract valuable biopolymers like chitin and chitosan.' },
    { title: 'Material Formulation', icon: 'M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11', description: 'Extracted biopolymers are compounded with other natural materials to create formulations tailored for specific product applications, from rigid packaging to flexible films.' },
    { title: 'Product Manufacturing', icon: 'M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z', description: 'The formulated biomaterials are then molded, extruded, or formed into final products at our decentralized, women-led production hubs.' },
    { title: 'Circular Lifecycle', icon: 'M4 4v5h5M20 20v-5h-5M4 20h5v-5M20 4h-5v5', description: 'Our products are fully biodegradable and compostable, returning to the earth and enriching the soil, thus closing the loop on a sustainable, circular economy.' },
];

const ProcessPage: React.FC = () => {
    const [selectedStep, setSelectedStep] = useState(0);

    return (
        <div className="bg-warmGray-100 py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold font-heading text-oceanBlue">Our Circular Process</h1>
                    <p className="mt-4 text-lg text-charcoal max-w-3xl mx-auto">Follow the journey from seafood waste to sustainable product. Click on a step to learn more.</p>
                </div>

                {/* Interactive Flowchart Icons */}
                <div className="relative mb-16">
                    {/* Connecting line for large screens */}
                    <div className="hidden lg:block absolute top-12 left-0 right-0 mx-auto w-[80%] h-0.5 bg-oceanBlue/30"></div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-16 gap-x-8">
                        {steps.map((step, index) => (
                            <div 
                                key={index} 
                                className="relative flex flex-col items-center cursor-pointer group z-10"
                                onClick={() => setSelectedStep(index)}
                            >
                                <div 
                                    className={`w-24 h-24 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300
                                        ${selectedStep === index ? 'bg-coralOrange text-white shadow-lg scale-110 animate-pulse-slow' : 'bg-oceanBlue text-white'}`
                                    }
                                    aria-label={`Step ${index + 1}: ${step.title}`}
                                >
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={step.icon}></path>
                                    </svg>
                                </div>
                                <h3 className={`text-center mt-4 font-bold font-heading transition-colors ${selectedStep === index ? 'text-coralOrange' : 'text-charcoal'}`}>{index+1}. {step.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Description Panel */}
                <div className="mt-12">
                    <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto min-h-[150px]">
                        {steps[selectedStep] && (
                             <div key={selectedStep} className="animate-fadeIn">
                                <h2 className="text-2xl font-bold font-heading text-forestGreen mb-4">{steps[selectedStep].title}</h2>
                                <p className="text-charcoal text-lg">{steps[selectedStep].description}</p>
                            </div>
                        )}
                    </div>
                </div>

                 <div className="mt-20 text-center">
                    <h2 className="text-3xl font-bold font-heading text-forestGreen mb-4">A Commitment to Sustainability</h2>
                    <p className="text-lg text-charcoal max-w-4xl mx-auto">
                        Our process is designed to be as green as our products. We utilize low-energy techniques and avoid harsh chemicals, ensuring that our environmental footprint is minimized at every stage. This holistic approach to sustainability is what sets BioShell apart.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProcessPage;