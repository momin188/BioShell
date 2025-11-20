
import React from 'react';

const teamMembers = [
    { name: 'Dr. Aris Thorne', role: 'Founder & CEO', imageUrl: 'https://picsum.photos/200/200?random=31' },
    { name: 'Elena Santos', role: 'Head of Operations', imageUrl: 'https://picsum.photos/200/200?random=32' },
    { name: 'Ben Carter', role: 'Lead Scientist', imageUrl: 'https://picsum.photos/200/200?random=33' },
    { name: 'Aisha Khan', role: 'Community Director', imageUrl: 'https://picsum.photos/200/200?random=34' },
];

const AboutPage: React.FC = () => {
    return (
        <div>
            <section className="bg-oceanBlue text-white py-20 text-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold font-heading">About BioShell</h1>
                    <p className="mt-4 text-xl max-w-3xl mx-auto">We are scientists, engineers, and community builders united by a single vision: a world without waste.</p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img src="https://picsum.photos/600/400?random=35" alt="Our team collaborating" className="rounded-lg shadow-xl" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold font-heading text-forestGreen mb-4">Our Mission & Vision</h2>
                        <p className="text-lg text-charcoal mb-4">
                            Our mission is to create a fully circular economy for the seafood industry. We envision a future where byproducts are no longer considered 'waste,' but are instead the building blocks for the next generation of sustainable materials.
                        </p>
                        <p className="text-lg text-charcoal">
                            By empowering local communities and championing women-led entrepreneurship, we aim to build a business model that is as socially responsible as it is environmentally restorative.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-warmGray-100 py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold font-heading text-charcoal">Meet the Team</h2>
                        <p className="mt-2 text-lg text-charcoal">The passionate minds driving our innovation forward.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {teamMembers.map(member => (
                            <div key={member.name} className="text-center">
                                <img src={member.imageUrl} alt={member.name} className="w-40 h-40 rounded-full mx-auto shadow-lg mb-4" />
                                <h3 className="font-bold font-heading text-oceanBlue text-xl">{member.name}</h3>
                                <p className="text-coralOrange">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
