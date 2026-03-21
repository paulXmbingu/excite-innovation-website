"use client";

import React from "react";
import { LogoMark } from "@/components/logos/logo-mark"
// import { Button } from "@/components/base/buttons/button";
// import { LinkedIn, Instagram, X, YouTube } from "@/components/foundations/social-icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Excite! Innovation",
  description: "Premier digital product innovation company specializing in UIUX Research, Design & Software Engineering",
};


export const HomeScreen = () => {
  return (
    <div className="relative flex h-screen w-full flex-col md:flex-row bg-auto overflow-hidden">
      {/* Media Section */}
      <div className="relative flex h-1/2 w-full md:h-full md:w-1/2 items-center justify-center overflow-hidden">
        <video
          autoPlay
          playsInline
          preload="auto"
          muted
          loop
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/excit3/video/upload/v1774048209/18069232-hd_1920_1080_24fps_lbcxk8.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#EE2255]/90"></div>
      </div>

      {/* Details Section */}
      <div className="relative z-10 flex h-1/2 w-full md:h-full md:w-1/2 items-center justify-center px-4 py-8 md:px-12">
        <div className="flex max-w-140 flex-col items-center justify-center gap-8">
          {/* Logo */}
          <div className="relative m-6 flex w-48 items-center justify-center md:w-72 lg:w-80">
            <LogoMark />
          </div>

          {/* Text CTA */}
          <div className="flex flex-col items-center gap-8 w-full">
            <div className="flex w-full flex-col items-center gap-0">
              <div className="text-center text-base text-alpha-black">
                Premier digital product innovation company specializing in
              </div>
              <div className="text-center text-3xl font-bold tracking-tight text-brand-secondary sm:text-2xl md:text-4xl">
                UIUX Research, Design & Software Engineering
              </div>
            </div>

            {/* Social CTA */}
            <div className="flex flex-col items-center gap-0 w-full">
              <div className="text-gray-600">Follow us on our socials</div>
              {/* <div className="flex flex-wrap items-center justify-center gap-1">
                <Button 
                  color="tertiary"
                  size="sm"
                  iconLeading={<LinkedIn/>}
                  aria-label="Excite! Innovation LinkedIn button"
                  className="text-fg-quaternary hover:text-[#0a66c2]"
                  href="https://www.linkedin.com/company/exciteinnovation"
                  target="_blank"
                  rel="noopener noreferrer"
                />
                <Button 
                  color="tertiary"
                  size="sm"
                  iconLeading={<Instagram/>}
                  aria-label="Excite! Innovation Instagram button"
                  className="text-fg-quaternary hover:text-[#ff7a00]"
                  href="https://www.instagram.com/excitecompany"
                  target="_blank"
                  rel="noopener noreferrer"
                />
                <Button 
                  color="tertiary"
                  size="sm"
                  iconLeading={<X/>}
                  aria-label="Excite! Innovation Twitter button"
                  className="text-fg-quaternary hover:text-[#1d9bf0]"
                  href="https://www.twitter.com/excitecompany"
                  target="_blank"
                  rel="noopener noreferrer"
                />
                <Button 
                  color="tertiary"
                  size="sm"
                  iconLeading={<YouTube/>}
                  aria-label="Excite! Innovation YouTube button"
                  className="text-fg-quaternary hover:text-[#FF0000]"
                  href="https://www.youtube.com/@ExciteInnovation"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};