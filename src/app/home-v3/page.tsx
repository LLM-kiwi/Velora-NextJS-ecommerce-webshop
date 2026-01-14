import React from "react";
import Link from "next/link";
import Image from "next/image";
import LuxuryHero from "@/components/homepage/variants/luxury/LuxuryHero";
import LuxuryProductCard from "@/components/homepage/variants/luxury/LuxuryProductCard";
import { Product } from "@/types/product.types";

const luxuryProducts: Product[] = [
    {
        id: 201,
        title: "Silk evening gown",
        srcUrl: "/images/pic1.png",
        gallery: ["/images/pic1.png"],
        price: 1250,
        discount: { amount: 0, percentage: 0 },
        rating: 5.0,
    },
    {
        id: 202,
        title: "Suede tailored blazer",
        srcUrl: "/images/pic2.png",
        gallery: ["/images/pic2.png"],
        price: 890,
        discount: { amount: 0, percentage: 0 },
        rating: 4.9,
    },
    {
        id: 203,
        title: "Hand-stitched leather bag",
        srcUrl: "/images/pic3.png",
        gallery: ["/images/pic3.png"],
        price: 2400,
        discount: { amount: 0, percentage: 0 },
        rating: 5.0,
    },
    {
        id: 204,
        title: "Cashmere scarf floral",
        srcUrl: "/images/pic4.png",
        gallery: ["/images/pic4.png"],
        price: 450,
        discount: { amount: 0, percentage: 15 },
        rating: 4.8,
    },
];

const luxuryBrands = ["PRADA", "GUCCI", "CHANEL", "HERMÈS", "ROLEX"];

export default function HomeV3() {
    return (
        <main className="bg-white min-h-screen">
            <LuxuryHero />

            {/* Editorial Section */}
            <section className="py-24 bg-[#fffefe]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-16 md:gap-32">
                        <div className="w-full md:w-1/2 relative aspect-[4/5]">
                            <Image
                                src="/images/pic1.png"
                                fill
                                alt="Editorial"
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                        </div>
                        <div className="w-full md:w-1/2 space-y-8">
                            <span className="text-xs uppercase tracking-[0.5em] text-[#c5a358]">The Atelier</span>
                            <h2 className="text-5xl md:text-7xl font-light font-serif text-[#1a1a1a] leading-tight">
                                Craftsmanship in every <span className="italic">detail.</span>
                            </h2>
                            <p className="text-[#555] leading-relaxed max-w-md">
                                Our artisans spend hundreds of hours perfecting each piece, ensuring that every stitch and seam meets the highest standards of luxury fashion.
                            </p>
                            <button className="text-sm uppercase tracking-widest border-b border-[#1a1a1a] pb-2 hover:text-[#c5a358] hover:border-[#c5a358] transition-all">
                                The Heritage Story
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Brand Bar */}
            <section className="py-16 border-y border-[#eee]">
                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-between items-center gap-8 px-4 opacity-50 grayscale">
                        {luxuryBrands.map((brand) => (
                            <span key={brand} className="text-[#1a1a1a] text-xl md:text-2xl font-light tracking-[0.4em] font-serif">
                                {brand}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Curated Selection Section */}
            <section className="container mx-auto py-24 px-4">
                <div className="text-center mb-20">
                    <span className="text-xs uppercase tracking-[0.5em] text-[#c5a358] mb-4 block">Selection</span>
                    <h2 className="text-4xl md:text-6xl font-normal text-[#1a1a1a] font-serif uppercase tracking-widest">Selected Works</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {luxuryProducts.map((product) => (
                        <LuxuryProductCard key={product.id} data={product} />
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <Link
                        href="/shop"
                        className="px-16 py-6 bg-transparent border border-[#1a1a1a] text-[#1a1a1a] uppercase text-xs tracking-[0.3em] hover:bg-[#1a1a1a] hover:text-white transition-all duration-700"
                    >
                        Explore All Creations
                    </Link>
                </div>
            </section>

            {/* Footer Newsletter Style */}
            <section className="bg-[#1a1a1a] py-24 text-white text-center">
                <div className="container mx-auto px-4 max-w-2xl">
                    <h2 className="text-3xl md:text-5xl font-serif font-light italic mb-8 mb-4 tracking-wider leading-tight">Join the Bespoke circle.</h2>
                    <p className="text-white/40 mb-12 uppercase tracking-widest text-xs">Exclusively for the few. Private access to new arrivals.</p>
                    <div className="flex flex-col sm:flex-row border border-white/20">
                        <input
                            type="text"
                            placeholder="ENTER YOUR EMAIL"
                            className="bg-transparent px-8 py-5 text-xs tracking-widest flex-1 border-b sm:border-b-0 sm:border-r border-white/20 focus:outline-none"
                        />
                        <button className="px-12 py-5 bg-white text-black text-xs font-bold tracking-widest hover:bg-[#c5a358] hover:text-white transition-all duration-700">
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
