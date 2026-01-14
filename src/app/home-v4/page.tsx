import React from "react";
import Link from "next/link";
import TechHero from "@/components/homepage/variants/tech/TechHero";
import TechProductCard from "@/components/homepage/variants/tech/TechProductCard";
import { Product } from "@/types/product.types";

const techProducts: Product[] = [
    {
        id: 301,
        title: "Noise-Cancelling Headphones V2",
        srcUrl: "/images/pic1.png",
        gallery: ["/images/pic1.png"],
        price: 349,
        discount: { amount: 0, percentage: 0 },
        rating: 4.9,
    },
    {
        id: 302,
        title: "Smartwatch Ultra Series",
        srcUrl: "/images/pic2.png",
        gallery: ["/images/pic2.png"],
        price: 799,
        discount: { amount: 0, percentage: 5 },
        rating: 4.8,
    },
    {
        id: 303,
        title: "Mechanical Keyboard Pro",
        srcUrl: "/images/pic3.png",
        gallery: ["/images/pic3.png"],
        price: 199,
        discount: { amount: 0, percentage: 10 },
        rating: 4.7,
    },
    {
        id: 304,
        title: "4K Cinematic Drone",
        srcUrl: "/images/pic4.png",
        gallery: ["/images/pic4.png"],
        price: 1200,
        discount: { amount: 0, percentage: 0 },
        rating: 5.0,
    },
];

const techBrands = ["APPLE", "SONY", "BOSE", "LOGITECH", "DJI"];

export default function HomeV4() {
    return (
        <main className="bg-[#0a0a0c] min-h-screen">
            <TechHero />

            {/* Brands Bar */}
            <section className="py-12 bg-white/5 border-b border-white/5">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex flex-wrap justify-between items-center gap-10 opacity-20 hover:opacity-100 transition-opacity duration-500">
                        {techBrands.map((brand) => (
                            <span key={brand} className="text-white text-xl md:text-2xl font-bold tracking-widest font-mono">
                                {brand}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Specs Section */}
            <section className="container mx-auto py-24 px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-12 flex flex-col justify-between overflow-hidden relative">
                        <div className="relative z-10 max-w-md">
                            <span className="text-blue-400 font-mono text-xs uppercase mb-4 block">Innovation</span>
                            <h2 className="text-4xl md:text-6xl font-medium text-white mb-6 leading-tight">Advanced Haptic Feedback.</h2>
                            <p className="text-white/50 mb-8 leading-relaxed">
                                Our proprietary drive system delivers precise tactile response that bridges the gap between digital and physical sensations.
                            </p>
                            <button className="px-8 py-3 bg-white text-black font-bold rounded-sm text-sm">Explore Tech</button>
                        </div>
                    </div>
                    <div className="bg-[#121214] border border-white/10 rounded-2xl p-12 flex flex-col justify-center items-center text-center">
                        <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-8 border border-blue-500/30">
                            <span className="w-8 h-8 rounded-full bg-blue-500 animate-pulse" />
                        </div>
                        <h3 className="text-white text-2xl font-medium mb-4">Zero Latency</h3>
                        <p className="text-white/40 text-sm leading-relaxed">
                            Proprietary wireless protocol designed for professional reliability and speed.
                        </p>
                    </div>
                </div>
            </section>

            {/* Product List Section */}
            <section className="container mx-auto py-24 px-4 bg-gradient-to-b from-[#0a0a0c] to-black">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                    <div>
                        <span className="text-blue-400 font-mono text-xs mb-2 block uppercase tracking-tighter">Hardware Selection</span>
                        <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight">Essential Gear.</h2>
                    </div>
                    <Link href="/shop" className="text-white/50 hover:text-white font-mono text-xs uppercase tracking-widest transition-colors">
                        - Catalog Index -
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {techProducts.map((product) => (
                        <TechProductCard key={product.id} data={product} />
                    ))}
                </div>
            </section>

            {/* Subscription Section */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto backdrop-blur-3xl bg-white/5 border border-white/10 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                        <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">Stay calibrated.</h2>
                        <p className="text-white/40 mb-10 max-w-md mx-auto leading-relaxed">
                            Get the latest updates on performance hardware and exclusive technical reports.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
                            <input
                                type="text"
                                placeholder="Serial@Protocol.com"
                                className="bg-black/50 border border-white/10 text-white px-6 py-4 rounded-lg flex-1 focus:outline-none focus:border-blue-500/50 transition-all font-mono text-sm"
                            />
                            <button className="bg-white text-black font-bold px-10 py-4 rounded-lg hover:bg-blue-500 hover:text-white transition-all">
                                CONNECT
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}


