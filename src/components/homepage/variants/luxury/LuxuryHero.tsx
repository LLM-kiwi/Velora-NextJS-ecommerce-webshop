import Image from "next/image";
import Link from "next/link";
import React from "react";

const LuxuryHero = () => {
    return (
        <header className="relative w-full h-[600px] md:h-[900px] bg-[#faf9f6] overflow-hidden flex items-center">
            <div className="absolute top-0 right-0 w-full md:w-1/2 h-full">
                <Image
                    src="/images/luxury-hero.png"
                    fill
                    alt="Luxury Fashion Hero"
                    className="object-cover"
                    priority
                />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-0">
                <div className="max-w-xl">
                    <span className="text-sm uppercase tracking-[0.5em] text-[#c5a358] mb-4 block">New Collection 2026</span>
                    <h1 className="text-6xl md:text-9xl font-light text-[#1a1a1a] leading-none mb-8 font-serif">
                        Timeless <br /> <span className="italic">Elegance</span>
                    </h1>
                    <p className="text-lg text-[#555] mb-12 max-w-sm leading-relaxed">
                        Curated pieces for the modern connoisseur. Discover our exclusive collection of high-end garments and accessories.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6">
                        <Link
                            href="/shop"
                            className="px-12 py-5 bg-[#1a1a1a] text-white font-medium uppercase text-sm tracking-widest hover:bg-[#c5a358] transition-all duration-700"
                        >
                            Explore Collection
                        </Link>
                        <Link
                            href="/shop"
                            className="px-12 py-5 border border-[#1a1a1a] text-[#1a1a1a] font-medium uppercase text-sm tracking-widest hover:bg-[#1a1a1a] hover:text-white transition-all duration-700"
                        >
                            Our Heritage
                        </Link>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block animate-bounce">
                <div className="w-[1px] h-16 bg-[#c5a358]"></div>
            </div>
        </header>
    );
};

export default LuxuryHero;
