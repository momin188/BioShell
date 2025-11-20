import React, { useState } from 'react';
import { Product, ProductDetails } from '../types';
import { generateProductDetails } from '../services/geminiService';
import Spinner from '../components/Spinner';

const productsData: Product[] = [
    { id: 1, name: 'Bio-Clam Shell Container', category: 'Packaging', description: 'A fully compostable container perfect for takeaways.', imageUrl: 'https://images.unsplash.com/photo-1617330386625-1035209cf8f9?q=80&w=800&auto=format&fit=crop', specs: { Material: 'Chitin-based polymer', 'Decomposition': '90 days' } },
    { id: 2, name: 'Shrimp Shell Film Wrap', category: 'Packaging', description: 'A flexible, biodegradable alternative to plastic wrap.', imageUrl: 'https://images.unsplash.com/photo-1615485737388-724f33d3c8c7?q=80&w=800&auto=format&fit=crop', specs: { Material: 'Chitosan film', 'Thickness': '20 microns' } },
    { id: 3, name: 'Agri-Boost Soil Enhancer', category: 'Bioproduct', description: 'Nutrient-rich soil additive derived from shell waste.', imageUrl: 'https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=800&auto=format&fit=crop', specs: { 'Key Nutrient': 'Calcium Carbonate', 'Application': 'Agriculture' } },
    { id: 4, name: 'Oyster Shell Cutlery', category: 'Packaging', description: 'Durable and elegant biodegradable cutlery.', imageUrl: 'https://images.unsplash.com/photo-1565299485341-84b39a0932a9?q=80&w=800&auto=format&fit=crop', specs: { Material: 'Compressed shell composite', 'Heat Resistance': '80°C' } },
    { id: 5, name: 'Water-Pure Filter Media', category: 'Bioproduct', description: 'Bio-absorbent media for water purification systems.', imageUrl: 'https://images.unsplash.com/photo-1563201511-322132697883?q=80&w=800&auto=format&fit=crop', specs: { 'Active Agent': 'Chitosan', 'Use Case': 'Industrial filtration' } },
    { id: 6, name: 'Crab Shell Bio-Pellets', category: 'Bioproduct', description: 'Slow-release fertilizer pellets for organic farming.', imageUrl: 'https://images.unsplash.com/photo-1604923329367-c6b541305f63?q=80&w=800&auto=format&fit=crop', specs: { 'Release Time': '3-6 months', 'NPK Ratio': '3-4-0' } },
];

type FilterType = 'All' | 'Packaging' | 'Bioproduct';

const ProductsPage: React.FC = () => {
    const [filter, setFilter] = useState<FilterType>('All');
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [productDetails, setProductDetails] = useState<ProductDetails | null>(null);
    const [isLoadingDetails, setIsLoadingDetails] = useState<boolean>(false);
    const [detailsError, setDetailsError] = useState<string | null>(null);

    const filteredProducts = productsData.filter(p => filter === 'All' || p.category === filter);

    const handleViewDetails = async (product: Product) => {
        setSelectedProduct(product);
        setIsLoadingDetails(true);
        setProductDetails(null);
        setDetailsError(null);
        try {
            const details = await generateProductDetails(product, productsData);
            setProductDetails(details);
        } catch (error: any) {
            setDetailsError(error.message || "Could not load enhanced details for this product.");
        } finally {
            setIsLoadingDetails(false);
        }
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
        setProductDetails(null);
        setDetailsError(null);
    };
    
    const relatedProduct = productDetails?.relatedProductName
        ? productsData.find(p => p.name === productDetails.relatedProductName)
        : null;

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold font-heading text-oceanBlue">Our Innovative Products</h1>
                <p className="mt-4 text-lg text-charcoal max-w-3xl mx-auto">From sustainable packaging to advanced bioproducts, discover how we're turning waste into value.</p>
            </div>

            <div className="flex justify-center space-x-2 sm:space-x-4 mb-12">
                {(['All', 'Packaging', 'Bioproduct'] as FilterType[]).map(f => (
                    <button 
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`py-2 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-oceanBlue ${
                            filter === f 
                                ? 'bg-oceanBlue text-white font-bold shadow-lg' 
                                : 'bg-white text-charcoal font-semibold hover:bg-warmGray-200 shadow-sm'
                        }`}
                    >
                        {f}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                    <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                        <img src={product.imageUrl} alt={product.name} className="w-full h-56 object-cover" />
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold font-heading text-charcoal">{product.name}</h3>
                            <p className="text-forestGreen font-semibold my-2">{product.category}</p>
                            <p className="text-charcoal mb-4 flex-grow">{product.description}</p>
                            <button onClick={() => handleViewDetails(product)} className="w-full mt-auto bg-coralOrange text-white font-bold py-2 rounded-full hover:bg-opacity-90 transition-colors">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {selectedProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4" onClick={handleCloseModal}>
                    <div 
                        className="bg-white rounded-lg shadow-2xl max-w-4xl w-full overflow-hidden animate-fadeIn max-h-[90vh] flex flex-col" 
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="grid md:grid-cols-5 flex-grow min-h-0">
                            <div className="md:col-span-2 bg-warmGray-200">
                                <img src={selectedProduct.imageUrl} alt={selectedProduct.name} className="w-full h-64 md:h-full object-cover" />
                            </div>
                            <div className="md:col-span-3 p-6 md:p-8 flex flex-col overflow-y-auto">
                                <div className="flex-grow">
                                    <h2 className="text-3xl font-bold font-heading text-oceanBlue mb-2">{selectedProduct.name}</h2>
                                    <p className="text-forestGreen font-semibold text-lg mb-6">{selectedProduct.category}</p>
                                    
                                    {isLoadingDetails && (
                                        <div className="flex flex-col justify-center items-center h-full min-h-[200px]">
                                            <Spinner />
                                            <p className="mt-4 text-charcoal animate-pulse">Generating product insights...</p>
                                        </div>
                                    )}
                                    {detailsError && <div className="p-4 bg-red-100 text-red-700 rounded-lg text-center my-4">{detailsError}</div>}
                                    {productDetails && (
                                        <div className="space-y-6">
                                            <p className="text-charcoal text-base">{productDetails.detailedDescription}</p>
                                            <div>
                                                <h4 className="font-bold text-charcoal mb-2 border-b pb-1">Technical Specifications</h4>
                                                <ul className="list-disc list-inside text-charcoal space-y-1 text-sm mt-2">
                                                    {Object.entries(selectedProduct.specs).map(([key, value]) => (
                                                        <li key={key}><strong>{key}:</strong> {value}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-charcoal mb-2 border-b pb-1">Usage Examples</h4>
                                                <ul className="list-disc list-inside text-charcoal space-y-1 text-sm mt-2">
                                                    {productDetails.usageExamples.map((example, index) => (
                                                        <li key={index}>{example}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            {relatedProduct && (
                                                <div>
                                                    <h4 className="font-bold text-charcoal mb-2 border-b pb-1">You might also like</h4>
                                                    <div 
                                                        className="mt-2 flex items-center gap-4 p-3 bg-warmGray-100 rounded-lg cursor-pointer hover:bg-warmGray-200 transition-colors"
                                                        onClick={() => handleViewDetails(relatedProduct)}
                                                    >
                                                        <img src={relatedProduct.imageUrl} alt={relatedProduct.name} className="w-16 h-16 object-cover rounded-md flex-shrink-0"/>
                                                        <div>
                                                            <h5 className="font-semibold text-oceanBlue">{relatedProduct.name}</h5>
                                                            <p className="text-sm text-charcoal">{relatedProduct.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                                <div className="mt-8 pt-6 border-t">
                                    <button onClick={handleCloseModal} className="bg-charcoal text-white font-bold py-2 px-6 rounded-full hover:bg-opacity-80 transition-colors">
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductsPage;