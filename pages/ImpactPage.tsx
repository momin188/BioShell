import React from 'react';
import ImpactChart from '../components/ImpactChart';

const carbonData = [{ name: 'Q1', value: 15, target: 10 }, { name: 'Q2', value: 25, target: 20 }, { name: 'Q3', value: 28, target: 30 }, { name: 'Q4', value: 35, target: 40 }];
const leadershipData = [{ name: '2021', value: 10 }, { name: '2022', value: 15 }, { name: '2023', value: 22 }, { name: '2024', value: 25 }];
const wasteData = [{ name: 'Packaging', value: 60 }, { name: 'Bioproducts', value: 40 }];

// Fix: Changed JSX.Element to React.ReactNode to resolve namespace issue.
const KPICard: React.FC<{ title: string; value: string; change: string; isPositive: boolean; icon: React.ReactNode; }> = ({ title, value, change, isPositive, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-start justify-between">
            <div>
                <p className="text-charcoal font-semibold">{title}</p>
                <p className="text-3xl font-bold font-heading text-oceanBlue mt-2">{value}</p>
            </div>
            <div className="text-forestGreen">{icon}</div>
        </div>
        <p className={`mt-4 text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {change} vs last quarter
        </p>
    </div>
);


const ImpactPage: React.FC = () => {
    return (
        <div className="bg-warmGray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold font-heading text-oceanBlue">Our Measurable Impact</h1>
                    <p className="mt-4 text-lg text-charcoal max-w-3xl mx-auto">We believe in transparency and data-driven results. Explore our progress towards a more sustainable and equitable world.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    <KPICard
                        title="CO2 Emissions Reduced"
                        value="45 Tons"
                        change="+5.2%"
                        isPositive={true}
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                    />
                    <KPICard
                        title="Women Entrepreneurs"
                        value="8 Hubs"
                        change="+2 Hubs"
                        isPositive={true}
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                    />
                    <KPICard
                        title="Waste Diverted from Landfill"
                        value="112 Tons"
                        change="+15.7%"
                        isPositive={true}
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>}
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <ImpactChart type="bar" data={carbonData} title="Carbon Reduction Progress (Tons CO2e)" />
                    <ImpactChart type="line" data={leadershipData} title="Women in Leadership Roles (%)" />
                    <div className="lg:col-span-2">
                        <ImpactChart type="pie" data={wasteData} title="Waste Repurposed by Product Category" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImpactPage;