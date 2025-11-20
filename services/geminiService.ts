import { GoogleGenAI, Type } from "@google/genai";
import { Product } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateBlogIdeas = async (topic: string) => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Generate 3 blog post ideas about "${topic}". For each idea, provide a catchy title and a short, one-sentence description.`,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        ideas: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.OBJECT,
                                properties: {
                                    title: {
                                        type: Type.STRING,
                                        description: "The catchy title of the blog post."
                                    },
                                    description: {
                                        type: Type.STRING,
                                        description: "A short, one-sentence description of the blog post."
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });

        const jsonText = response.text;
        const parsedJson = JSON.parse(jsonText);
        return parsedJson.ideas || [];

    } catch (error) {
        console.error("Error generating content with Gemini:", error);
        throw new Error("Failed to generate blog ideas. Please check your API key and try again.");
    }
};

export const generateProductDetails = async (product: Product, allProducts: Product[]) => {
    const otherProductNames = allProducts
        .filter(p => p.id !== product.id)
        .map(p => p.name)
        .join(', ');

    const prompt = `
        Given the following product, generate some richer details for a customer viewing it on a website.
        Product Name: ${product.name}
        Category: ${product.category}
        Description: ${product.description}
        Specifications: ${JSON.stringify(product.specs)}

        Please generate the following in JSON format:
        1. A detailed, engaging description (about 2-3 sentences long).
        2. A list of 3 creative usage examples as a string array.
        3. Suggest ONE related product from the following list: [${otherProductNames}].
    `;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        detailedDescription: {
                            type: Type.STRING,
                            description: "A detailed, engaging description of the product (2-3 sentences)."
                        },
                        usageExamples: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.STRING,
                            },
                            description: "A list of 3 creative usage examples for the product."
                        },
                        relatedProductName: {
                            type: Type.STRING,
                            description: `The name of a single related product from this list: ${otherProductNames}`
                        }
                    },
                    required: ["detailedDescription", "usageExamples", "relatedProductName"]
                }
            }
        });
        
        const jsonText = response.text;
        const parsedJson = JSON.parse(jsonText);
        return parsedJson;

    } catch (error) {
        console.error("Error generating product details with Gemini:", error);
        throw new Error("Failed to generate enhanced product details.");
    }
};
