import Image from "next/image";
import Link from "next/link";
import React from "react";

const UrbanHero = () => {
    return (
        <header className="relative w-full h-[600px] md:h-[800px] bg-black overflow-hidden flex items-center">
            <div className="absolute inset-0 opacity-60">
                <Image
                    src="/images/urban-hero.png"
                    fill
                    alt="Streetwear Hero"
                    className="object-cover"
                    priority
                />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-0">
                <div className="max-w-2xl">
                    <h1 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter leading-none mb-6">
                        URBAN <span className="text-[#ccff00]">DROPS</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg border-l-4 border-[#ccff00] pl-4">
                        Exclusive streetwear for the bold and the restless. Explore the latest in oversized fits and techwear aesthetics.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="/shop"
                            className="px-8 py-4 bg-[#ccff00] text-black font-black uppercase text-lg transform -skew-x-12 hover:scale-105 transition-all"
                        >
                            Shop New Drops
                        </Link>
                        <Link
                            href="/shop"
                            className="px-8 py-4 border-2 border-white text-white font-black uppercase text-lg transform -skew-x-12 hover:bg-white hover:text-black transition-all"
                        >
                            Collection list
                        </Link>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 right-10 hidden md:block">
                <div className="flex flex-col items-end gap-2">
                    <span className="text-[#ccff00] font-mono text-sm tracking-widest">SEASON_01 // 2026</span>
                    <div className="w-48 h-1 bg-[#ccff00]"></div>
                </div>
            </div>
        </header>
    );
};

export default UrbanHero;
