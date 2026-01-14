import Image from "next/image";
import React from "react";

const brandsData: { id: string; srcUrl: string; width: number; height: number }[] = [
  {
    id: "versace",
    srcUrl: "/icons/versace-logo.svg",
    width: 167,
    height: 34,
  },
  {
    id: "zara",
    srcUrl: "/icons/zara-logo.svg",
    width: 92,
    height: 38,
  },
  {
    id: "gucci",
    srcUrl: "/icons/gucci-logo.svg",
    width: 157,
    height: 36,
  },
  {
    id: "prada",
    srcUrl: "/icons/prada-logo.svg",
    width: 195,
    height: 32,
  },
  {
    id: "calvin-klein",
    srcUrl: "/icons/calvin-klein-logo.svg",
    width: 208,
    height: 34,
  },
];

const Brands = () => {
  return (
    <div className="bg-black">
      <div className="max-w-frame mx-auto flex flex-wrap items-center justify-center md:justify-between py-5 md:py-0 sm:px-4 xl:px-0 space-x-7">
        {brandsData.map((brand) => (
          <Image
            key={brand.id}
            priority
            src={brand.srcUrl}
            height={brand.height}
            width={brand.width}
            alt={brand.id}
            className="h-auto w-auto max-w-[116px] lg:max-w-48 max-h-[26px] lg:max-h-9 my-5 md:my-11"
          />
        ))}
      </div>
    </div>
  );
};

export default Brands;
