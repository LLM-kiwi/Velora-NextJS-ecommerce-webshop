import { Product } from "@/types/product.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TechProductCard = ({ data }: { data: Product }) => {
    return (
        <div className="group relative bg-[#121214] border border-white/5 rounded-lg overflow-hidden transition-all hover:border-blue-500/50 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]">
            <div className="relative aspect-square w-full p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Image
                    src={data.srcUrl}
                    fill
                    alt={data.title}
                    className="object-contain p-8 transition-transform duration-500 group-hover:scale-110"
                />
                {data.discount.percentage > 0 && (
                    <div className="absolute top-4 right-4 bg-blue-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        -{data.discount.percentage}%
                    </div>
                )}
            </div>

            <div className="p-5 border-t border-white/5 space-y-3">
                <div className="flex justify-between items-start">
                    <h3 className="text-white font-medium text-sm leading-tight max-w-[70%]">
                        {data.title}
                    </h3>
                    <span className="text-white font-mono text-sm">${data.price}</span>
                </div>

                <div className="flex items-center gap-4 text-[10px] font-mono text-white/30 uppercase tracking-wider">
                    <span>In Stock</span>
                    <div className="w-1 h-1 rounded-full bg-white/20" />
                    <span>Next Day Delivery</span>
                </div>

                <button className="w-full py-2.5 bg-white/5 border border-white/10 text-white text-xs font-semibold rounded hover:bg-white hover:text-black transition-all">
                    Quick Buy
                </button>
            </div>

            <Link
                href={`/shop/product/${data.id}/${data.title.split(" ").join("-")}`}
                className="absolute inset-0 z-10"
            />
        </div>
    );
};

export default TechProductCard;
