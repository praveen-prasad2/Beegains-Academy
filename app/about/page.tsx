"use client";

import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Define pages array
const pages = ["/page1.png", "/page2.png", "/page3.png", "/page4.png"];

const FlipBook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const controls = useAnimation();

  const nextPage = async () => {
    if (currentPage < pages.length - 1 && !isFlipping) {
      setIsFlipping(true);
      await controls.start({ rotateY: -180, transition: { duration: 0.8, ease: "easeInOut" } });
      setCurrentPage((prev) => prev + 1);
      controls.set({ rotateY: 0 });
      setIsFlipping(false);
    }
  };

  const prevPage = async () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      await controls.start({ rotateY: 180, transition: { duration: 0.8, ease: "easeInOut" } });
      setCurrentPage((prev) => prev - 1);
      controls.set({ rotateY: 0 });
      setIsFlipping(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-8">
      <div className="relative w-[1000px] h-[700px] bg-white rounded-lg shadow-2xl perspective-2000">
        {/* Left page (Previous page) */}
        <div className="absolute left-0 top-0 w-1/2 h-full bg-white overflow-hidden rounded-l-lg z-10">
          <Image
            src={pages[Math.max(0, currentPage - 1)]}
            alt={`Page ${currentPage}`}
            className="w-full h-full object-cover"
            width={500}
            height={700}
          />
        </div>

        {/* Right page with flip animation */}
        <motion.div
          className="absolute right-0 top-0 w-1/2 h-full origin-left z-20"
          style={{ perspective: 2000, transformStyle: "preserve-3d" }}
          animate={controls}
        >
          {/* Back of flipping page */}
          <motion.div
            className="absolute inset-0 bg-white rounded-r-lg overflow-hidden shadow-lg"
            style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
          >
            <Image
              src={pages[Math.min(pages.length - 1, currentPage + 1)]}
              alt={`Page ${currentPage + 2}`}
              className="w-full h-full object-cover"
              width={500}
              height={700}
            />
          </motion.div>
          {/* Front of flipping page */}
          <motion.div
            className="absolute inset-0 bg-white rounded-r-lg overflow-hidden shadow-lg"
            style={{ backfaceVisibility: "visible" }}
          >
            <Image
              src={pages[currentPage]}
              alt={`Page ${currentPage + 1}`}
              className="w-full h-full object-cover"
              width={500}
              height={700}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation controls */}
      <div className="mt-8 flex gap-6">
        <Button onClick={prevPage} disabled={currentPage === 0 || isFlipping} className="px-8 py-3 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-700 transition-colors">
          Previous
        </Button>
        <Button onClick={nextPage} disabled={currentPage === pages.length - 1 || isFlipping} className="px-8 py-3 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-700 transition-colors">
          Next
        </Button>
      </div>
    </div>
  );
};

export default FlipBook;
