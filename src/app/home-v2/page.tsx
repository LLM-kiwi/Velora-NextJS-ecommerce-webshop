import React from "react";
import UrbanHero from "@/components/homepage/variants/urban/UrbanHero";
import UrbanProductCard from "@/components/homepage/variants/urban/UrbanProductCard";
import { Product } from "@/types/product.types";

const streetProducts: Product[] = [
    {
        id: 101,
        title: "Heavyweight Oversized Hoodie",
        srcUrl: "/images/pic1.png",
        gallery: ["/images/pic1.png"],
        price: 85,
        discount: { amount: 0, percentage: 10 },
        rating: 4.8,
    },
    {
        id: 102,
        title: "Cargo Techwear Pants",
        srcUrl: "/images/pic2.png",
        gallery: ["/images/pic2.png"],
        price: 120,
        discount: { amount: 0, percentage: 0 },
        rating: 4.7,
    },
    {
        id: 103,
        title: "Graphic Tee 'Night City'",
        srcUrl: "/images/pic3.png",
        gallery: ["/images/pic3.png"],
        price: 45,
        discount: { amount: 0, percentage: 20 },
        rating: 4.9,
    },
    {
        id: 104,
        title: "Urban Buckle Belt",
        srcUrl: "/images/pic4.png",
        gallery: ["/images/pic4.png"],
        price: 35,
        discount: { amount: 0, percentage: 0 },
        rating: 4.5,
    },
];

const urbanBrands = ["STUSSY", "SUPREME", "OFF-WHITE", "BAPE", "PALACE"];

export default function HomeV2() {
    return (
        <main className="bg-black min-h-screen">
            <UrbanHero />

            {/* Brands Section */}
            <section className="bg-white/5 py-10 border-y border-white/10">
                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-between items-center gap-8 px-4">
                        {urbanBrands.map((brand) => (
                            <span key={brand} className="text-white/40 text-2xl md:text-4xl font-black italic tracking-tighter hover:text-[#ccff00] transition-colors cursor-default">
                                {brand}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* New Drops Section */}
            <section className="container mx-auto py-20 px-4">
                <div className="flex items-end justify-between mb-12 border-b-2 border-white/10 pb-4">
                    <h2 className="text-4xl md:text-6xl font-black text-white italic">NEW_DROPS</h2>
                    <div className="text-[#ccff00] font-mono text-sm">[ VIEW ALL ]</div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {streetProducts.map((product) => (
                        <UrbanProductCard key={product.id} data={product} />
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="container mx-auto py-20 px-4">
                <div className="bg-[#ccff00] p-12 md:p-24 flex flex-col md:flex-row items-center justify-between text-black transform -skew-x-2">
                    <div className="max-w-xl text-center md:text-left mb-8 md:mb-0">
                        <h2 className="text-5xl md:text-7xl font-black italic mb-4 leading-none">JOIN THE SYNDICATE</h2>
                        <p className="font-bold uppercase tracking-widest">Get 20% off your first drop. No caps.</p>
                    </div>
                    <div className="flex w-full md:w-auto gap-2">
                        <input
                            type="text"
                            placeholder="YOUR@EMAIL.COM"
                            className="bg-black text-white px-6 py-4 flex-1 md:w-80 font-bold focus:outline-none"
                        />
                        <button className="bg-white text-black px-8 py-4 font-black uppercase hover:bg-black hover:text-white transition-all">
                            ENLIST
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
