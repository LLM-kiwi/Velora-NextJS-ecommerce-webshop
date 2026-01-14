"use client";

import React, { useState } from "react";
import Image from "next/image";
import InputGroup from "@/components/ui/input-group";
import { useRouter } from "next/navigation";

const SearchForm = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/shop?q=${searchQuery}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="hidden md:flex bg-[#F0F0F0] mr-3 lg:mr-10 w-full max-w-[577px] rounded-full"
    >
      <InputGroup className="bg-transparent">
        <InputGroup.Text>
          <Image
            priority
            src="/icons/search.svg"
            height={20}
            width={20}
            alt="search"
            className="min-w-5 min-h-5"
          />
        </InputGroup.Text>
        <InputGroup.Input
          type="search"
          name="search"
          placeholder="Search for products..."
          className="bg-transparent placeholder:text-black/40"
          aria-label="Search for products"
          maxLength={100}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </InputGroup>
    </form>
  );
};

export default SearchForm;
