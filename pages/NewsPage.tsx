
import React, { useState } from 'react';
import { BlogPost, GeneratedBlogIdea } from '../types';
import { generateBlogIdeas } from '../services/geminiService';
import Spinner from '../components/Spinner';

const blogPosts: BlogPost[] = [
    { id: 1, title: 'The Untapped Potential of Chitin', excerpt: 'Discover the science behind one of nature\'s most versatile biopolymers.', author: 'Dr. Ben Carter', date: 'Oct 26, 2023', imageUrl: 'https://picsum.photos/400/250?random=41' },
    { id: 2, title: 'Empowering Women Through Green Tech', excerpt: 'A look inside our community hub model and its social impact.', author: 'Aisha Khan', date: 'Sep 15, 2023', imageUrl: 'https://picsum.photos/400/250?random=42' },
    { id: 3, title: 'Designing for Disassembly: The Future of Packaging', excerpt: 'How circular economy principles are revolutionizing product design.', author: 'Guest Author', date: 'Aug 02, 2023', imageUrl: 'https://picsum.photos/400/250?random=43' },
];

const NewsPage: React.FC = () => {
    const [topic, setTopic] = useState<string>('sustainability in packaging');
    const [ideas, setIdeas] = useState<GeneratedBlogIdea[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerateIdeas = async () => {
        if (!topic.trim()) {
            setError('Please enter a topic.');
            return;
        }
        setLoading(true);
        setError(null);
        setIdeas([]);
        try {
            const result = await generateBlogIdeas(topic);
            setIdeas(result);
        } catch (err: any) {
            setError(err.message || 'An unknown error occurred.');
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold font-heading text-oceanBlue">News & Resources</h1>
                <p className="mt-4 text-lg text-charcoal max-w-3xl mx-auto">Stay informed with our latest articles, research, and company news.</p>
            </div>
            
            <section className="mb-16 bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold font-heading text-forestGreen mb-4 text-center">Generate Blog Ideas with AI</h2>
                <p className="text-center text-charcoal mb-6">Need inspiration? Enter a topic and let our AI assistant generate some ideas for you.</p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                    <input
                        type="text"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        placeholder="e.g., circular economy"
                        className="flex-grow p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-oceanBlue"
                    />
                    <button
                        onClick={handleGenerateIdeas}
                        disabled={loading}
                        className="bg-coralOrange text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Generating...' : 'Generate Ideas'}
                    </button>
                </div>
                {loading && <div className="mt-6"><Spinner /></div>}
                {error && <p className="text-red-500 text-center mt-4">{error}</p>}
                {ideas.length > 0 && (
                    <div className="mt-8 space-y-4 max-w-3xl mx-auto">
                        <h3 className="font-bold text-xl text-charcoal">Generated Ideas:</h3>
                        {ideas.map((idea, index) => (
                            <div key={index} className="p-4 bg-warmGray-100 rounded-md">
                                <h4 className="font-bold text-oceanBlue">{idea.title}</h4>
                                <p className="text-charcoal">{idea.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </section>
            
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map(post => (
                        <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src={post.imageUrl} alt={post.title} className="w-full h-56 object-cover" />
                            <div className="p-6">
                                <p className="text-sm text-gray-500 mb-2">{post.date} by {post.author}</p>
                                <h3 className="text-xl font-bold font-heading text-charcoal mb-2">{post.title}</h3>
                                <p className="text-charcoal mb-4">{post.excerpt}</p>
                                <a href="#" className="font-bold text-coralOrange hover:underline">Read More &rarr;</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default NewsPage;
