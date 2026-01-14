import { Product } from "@/types/product.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Star } from "lucide-react";

const UrbanProductCard = ({ data }: { data: Product }) => {
    return (
        <div className="group relative bg-[#111] border-2 border-white/10 p-4 transform transition-all hover:-translate-y-2 hover:border-[#ccff00] hover:shadow-[8px_8px_0px_0px_#ccff00]">
            <div className="relative aspect-square w-full mb-4 overflow-hidden bg-white/5">
                <Image
                    src={data.srcUrl}
                    fill
                    alt={data.title}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {data.discount.percentage > 0 && (
                    <div className="absolute top-2 left-2 bg-[#ccff00] text-black font-black px-2 py-1 text-xs uppercase transform -skew-x-12">
                        OFF {data.discount.percentage}%
                    </div>
                )}
            </div>

            <div className="space-y-2">
                <h3 className="text-white font-black uppercase tracking-tight text-lg truncate">
                    {data.title}
                </h3>

                <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                            key={i}
                            size={12}
                            className={i < Math.floor(data.rating) ? "fill-[#ccff00] text-[#ccff00]" : "text-white/20"}
                        />
                    ))}
                    <span className="text-white/40 text-xs ml-1">{data.rating}</span>
                </div>

                <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-white">$ {data.price}</span>
                    {data.discount.percentage > 0 && (
                        <span className="text-sm text-white/30 line-through tracking-tighter">
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

export default UrbanProductCard;
