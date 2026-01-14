import Image from "next/image";
import Link from "next/link";
import React from "react";

const TechHero = () => {
    return (
        <header className="relative w-full h-[600px] md:h-[800px] bg-[#0a0a0c] overflow-hidden flex items-center border-b border-white/5">
            <div className="absolute inset-0">
                <Image
                    src="/images/tech-hero.png"
                    fill
                    alt="Tech Hero"
                    className="object-cover opacity-80"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/80 to-transparent" />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-0">
                <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-6">
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                        V.24 PERFORMANCE AUDIO
                    </div>
                    <h1 className="text-5xl md:text-8xl font-medium text-white tracking-tight leading-[0.9] mb-8">
                        Precision <br /> <span className="text-[#888]">by Design.</span>
                    </h1>
                    <p className="text-lg text-white/50 mb-10 max-w-sm leading-relaxed font-light">
                        Engineered to perfection. Experience the next generation of premium tech accessories with unmatched industrial quality.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="/shop"
                            className="px-8 py-4 bg-white text-black font-semibold rounded-sm hover:bg-blue-500 hover:text-white transition-all duration-300"
                        >
                            Order Now
                        </Link>
                        <Link
                            href="/shop"
                            className="px-8 py-4 backdrop-blur-md bg-white/5 border border-white/10 text-white font-semibold rounded-sm hover:bg-white/10 transition-all"
                        >
                            Technical Specs
                        </Link>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 right-10 hidden md:flex items-center gap-8 text-white/20 font-mono text-[10px] tracking-widest uppercase">
                <div className="flex flex-col gap-1">
                    <span>LATENCY: 1.2MS</span>
                    <span>WEIGHT: 280G</span>
                </div>
                <div className="w-[1px] h-8 bg-white/10"></div>
                <div className="flex flex-col gap-1">
                    <span>FRQ: 20HZ - 40KHZ</span>
                    <span>SNR: 110DB</span>
                </div>
            </div>
        </header>
    );
};

export default TechHero;
