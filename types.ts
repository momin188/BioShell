export interface Product {
    id: number;
    name: string;
    category: 'Packaging' | 'Bioproduct';
    description: string;
    imageUrl: string;
    specs: { [key: string]: string };
}

export interface Hub {
    id: number;
    name: string;
    location: string;
    story: string;
    imageUrl: string;
    coordinates: { lat: number; lng: number };
}

export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    imageUrl: string;
}

export interface GeneratedBlogIdea {
    title: string;
    description: string;
}

export interface ProductDetails {
    detailedDescription: string;
    usageExamples: string[];
    relatedProductName: string;
}
