"use client";

import { Button } from "@/components/ui/button";
import InputGroup from "@/components/ui/input-group";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Image from "next/image";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const NewsLetterSection = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);


  const handleSubscribe = () => {
    setIsSubscribed(true);
  };

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 py-9 md:py-11 px-6 md:px-16 max-w-frame mx-auto bg-black rounded-[20px]">
      <p
        className={cn([
          integralCF.className,
          "font-bold text-[32px] md:text-[40px] text-white mb-9 md:mb-0",
        ])}
      >
        STAY UP TO DATE ABOUT OUR LATEST OFFERS
      </p>
      <div className="flex items-center">
        <div className="flex flex-col w-full max-w-[349px] mx-auto">
          {!isSubscribed ? (
            <>
              <InputGroup className="flex bg-white mb-[14px]">
                <InputGroup.Text>
                  <Image
                    priority
                    src="/icons/envelope.svg"
                    height={20}
                    width={20}
                    alt="email"
                    className="min-w-5 min-h-5"
                  />
                </InputGroup.Text>
                <InputGroup.Input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="bg-transparent placeholder:text-black/40 placeholder:text-sm sm:placeholder:text-base"
                  maxLength={255}
                  aria-label="Email address for newsletter"
                />
              </InputGroup>
              <Button
                variant="secondary"
                className="text-sm sm:text-base font-medium bg-white h-12 rounded-full px-4 py-3"
                aria-label="Subscribe to Newsletter"
                type="button"
                onClick={handleSubscribe}
                data-testid="newsletter-btn"
              >
                Subscribe to Newsletter
              </Button>
            </>
          ) : (
             <div
               data-testid="success-message"
               className="flex flex-col items-center justify-center h-full text-white bg-black/10 rounded-xl p-4 animate-in fade-in zoom-in duration-300"
               aria-live="polite"
               role="status"
             >
               <FaCheckCircle className="text-green-500 text-4xl mb-2" />
               <p className="text-lg font-medium text-center">You have subscribed!</p>
               <p className="text-sm text-white/60 text-center">You&apos;ll hear from us soon.</p>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsLetterSection;
