import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import React from "react";

type DressStyleCardProps = {
  title: string;
  url: string;
  className?: string;
  src: string;
  alt: string;
};

const DressStyleCard = ({ title, url, className, src, alt }: DressStyleCardProps) => {
  return (
    <Link
      href={url}
      className={cn([
        "w-full md:h-full rounded-[20px] bg-white bg-top text-2xl md:text-4xl font-bold text-left py-4 md:py-[25px] px-6 md:px-9 relative overflow-hidden",
        className,
      ])}
    >
      <span className="relative z-10">{title}</span>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top -z-10"
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
      />
    </Link>
  );
};

// Memoized to prevent unnecessary re-renders when parent animations update
export default React.memo(DressStyleCard);
