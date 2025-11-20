
import React from 'react';
import { Hub } from '../types';

const hubsData: Hub[] = [
    { id: 1, name: 'Coastal Champions Hub', location: 'Vietnam', story: 'Led by Mai, this hub partners with local shrimp farms to create biodegradable packaging, reducing plastic pollution on their shores.', imageUrl: 'https://picsum.photos/400/300?random=21', coordinates: { lat: 14.0583, lng: 108.2772 } },
    { id: 2, name: 'Andean Innovators', location: 'Peru', story: 'Maria and her team transform scallop shell waste into agricultural bioproducts, enriching local soil and boosting crop yields.', imageUrl: 'https://picsum.photos/400/300?random=22', coordinates: { lat: -9.1900, lng: -75.0152 } },
    { id: 3, name: 'Archipelago Artisans', location: 'Indonesia', story: 'This hub, run by Siti, focuses on creating high-quality bioplastics from crab shells, providing employment for over 50 local women.', imageUrl: 'https://picsum.photos/400/300?random=23', coordinates: { lat: -0.7893, lng: 113.9213 } },
];

const CommunityPage: React.FC = () => {
    return (
        <div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold font-heading text-oceanBlue">Our Global Community Hubs</h1>
                    <p className="mt-4 text-lg text-charcoal max-w-3xl mx-auto">Empowering women entrepreneurs worldwide to lead the charge in the circular economy.</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-4 mb-12">
                    <p className="text-center font-semibold text-charcoal mb-2">Interactive Hub Map (Placeholder)</p>
                    <div className="aspect-w-16 aspect-h-9 bg-warmGray-200 rounded-md flex items-center justify-center">
                        <img src="https://picsum.photos/1200/600?random=map" alt="World map placeholder" className="object-cover w-full h-full rounded-md" />
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold font-heading text-forestGreen mb-8 text-center">Success Stories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {hubsData.map(hub => (
                            <div key={hub.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img src={hub.imageUrl} alt={hub.name} className="w-full h-56 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold font-heading text-charcoal">{hub.name}</h3>
                                    <p className="text-coralOrange font-semibold my-2">{hub.location}</p>
                                    <p className="text-charcoal">{hub.story}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommunityPage;
