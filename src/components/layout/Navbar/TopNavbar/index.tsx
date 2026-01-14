"use client";

import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Link from "next/link";
import React from "react";
import { NavMenu } from "../navbar.types";
import { MenuList } from "./MenuList";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MenuItem } from "./MenuItem";
import Image from "next/image";
import ResTopNavbar from "./ResTopNavbar";
import CartBtn from "./CartBtn";
import SearchForm from "./SearchForm";

const data: NavMenu = [
  {
    id: 0,
    label: "Home Styles",
    type: "MenuList",
    children: [
      {
        id: 1,
        label: "Modern Minimalist",
        url: "/",
        description: "Clean, versatile, and contemporary.",
      },
      {
        id: 2,
        label: "Urban & Streetwear",
        url: "/home-v2",
        description: "Dark, bold, and neo-brutalist.",
      },
      {
        id: 3,
        label: "Luxury & Editorial",
        url: "/home-v3",
        description: "Elegant, sophisticated, and serif-based.",
      },
      {
        id: 4,
        label: "Minimal Tech",
        url: "/home-v4",
        description: "Industrial, sleek, and high-performance.",
      },
    ],
  },
  {
    id: 1,
    label: "Shop",
    type: "MenuList",
    children: [
      {
        id: 11,
        label: "Men's Clothes",
        url: "/shop#men-clothes",
        description: "In attractive and spectacular colors and designs",
      },
      {
        id: 12,
        label: "Women's Clothes",
        url: "/shop#women-clothes",
        description: "Ladies, your style and tastes are important to us",
      },
      {
        id: 13,
        label: "Kids' Clothes",
        url: "/shop#kids-clothes",
        description: "For all ages, with happy and beautiful colors",
      },
      {
        id: 14,
        label: "Bags and Shoes",
        url: "/shop#bag-shoes",
        description: "Suitable for men, women and all tastes and styles",
      },
    ],
  },
  {
    id: 2,
    type: "MenuItem",
    label: "On Sale",
    url: "/shop#on-sale",
    children: [],
  },
  {
    id: 3,
    type: "MenuItem",
    label: "New Arrivals",
    url: "/shop#new-arrivals",
    children: [],
  },
  {
    id: 4,
    type: "MenuItem",
    label: "Brands",
    url: "/shop#brands",
    children: [],
  },
];

const TopNavbar = () => {
  return (
    <nav className="sticky top-0 bg-white z-20">
      <div className="flex relative max-w-frame mx-auto items-center justify-between md:justify-start py-5 md:py-6 px-4 xl:px-0">
        <div className="flex items-center">
          <div className="block md:hidden mr-4">
            <ResTopNavbar data={data} />
          </div>
          <Link
            href="/"
            className={cn([
              integralCF.className,
              "text-2xl lg:text-[32px] mb-2 mr-3 lg:mr-10",
            ])}
          >
            VELORA
          </Link>
        </div>
        <NavigationMenu className="hidden md:flex mr-2 lg:mr-7">
          <NavigationMenuList>
            {data.map((item) => (
              <React.Fragment key={item.id}>
                {item.type === "MenuItem" && (
                  <MenuItem label={item.label} url={item.url} />
                )}
                {item.type === "MenuList" && (
                  <MenuList data={item.children} label={item.label} />
                )}
              </React.Fragment>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <SearchForm />
        <div className="flex items-center">
          <Link
            href="/shop"
            className="block md:hidden mr-[14px] p-1"
            aria-label="Search"
          >
            <Image
              priority
              src="/icons/search-black.svg"
              height={100}
              width={100}
              alt="search"
              className="max-w-[22px] max-h-[22px]"
            />
          </Link>
          <CartBtn />
          <Link href="/#signin" className="p-1" aria-label="Sign in">
            <Image
              priority
              src="/icons/user.svg"
              height={100}
              width={100}
              alt="user"
              className="max-w-[22px] max-h-[22px]"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
