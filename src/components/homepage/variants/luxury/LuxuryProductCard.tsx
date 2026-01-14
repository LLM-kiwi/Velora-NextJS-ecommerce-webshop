import { Product } from "@/types/product.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LuxuryProductCard = ({ data }: { data: Product }) => {
    return (
        <div className="group relative bg-white overflow-hidden text-center">
            <div className="relative aspect-[3/4] w-full mb-6 overflow-hidden">
                <Image
                    src={data.srcUrl}
                    fill
                    alt={data.title}
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all duration-700" />

                <button className="absolute bottom-8 left-1/2 -translate-x-1/2 px-8 py-3 bg-white text-black text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-black hover:text-white">
                    Add to Bag
                </button>
            </div>

            <div className="space-y-1 px-4 pb-4">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a358]">Aelier Collection</span>
                <h3 className="text-[#1a1a1a] font-normal text-lg font-serif">
                    {data.title}
                </h3>

                <div className="flex items-center justify-center gap-3 py-1">
                    <span className="text-lg font-light text-[#1a1a1a]">$ {data.price}</span>
                    {data.discount.percentage > 0 && (
                        <span className="text-sm text-black/30 line-through">
                            $ {Math.round(data.price / (1 - data.discount.percentage / 100))}
                        </span>
                    )}
                </div>
            </div>

            <Link
                href={`/shop/product/${data.id}/${data.title.split(" ").join("-")}`}
                className="absolute inset-0 z-10"
            />
        </div>
    );
};

export default LuxuryProductCard;
