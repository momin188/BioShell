
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProcessPage from './pages/ProcessPage';
import ImpactPage from './pages/ImpactPage';
import CommunityPage from './pages/CommunityPage';
import PartnershipsPage from './pages/PartnershipsPage';
import AboutPage from './pages/AboutPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
    return (
        <HashRouter>
            <div className="flex flex-col min-h-screen font-sans bg-warmGray-100 text-charcoal">
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/products" element={<ProductsPage />} />
                        <Route path="/process" element={<ProcessPage />} />
                        <Route path="/impact" element={<ImpactPage />} />
                        <Route path="/community" element={<CommunityPage />} />
                        <Route path="/partnerships" element={<PartnershipsPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/news" element={<NewsPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </HashRouter>
    );
};

export default App;
