"use client";

import React, { useState } from "react";
import { motion, useAnimation, PanInfo } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Define pages array
const pages = ["/page1.png", "/page2.png", "/page3.png", "/page4.png"];

const FlipBook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [dragProgress, setDragProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const controls = useAnimation();

  // Function to calculate page curl shadow intensity
  const getCurlShadow = (progress: number): string => {
    const intensity = Math.sin(progress * Math.PI) * 0.2;
    return `rgba(0, 0, 0, ${intensity})`;
  };

  const handleDrag = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const progress = Math.min(Math.max(info.offset.x / 200, -1), 1);
    setDragProgress(progress);
  };

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent
  ) => {
    setIsDragging(false);
    const threshold = 0.3;

    if (Math.abs(dragProgress) > threshold) {
      if (dragProgress > 0 && currentPage > 0) {
        prevPage();
      } else if (dragProgress < 0 && currentPage < pages.length - 1) {
        nextPage();
      }
    }

    setDragProgress(0);
  };

  const nextPage = async () => {
    if (currentPage < pages.length - 1) {
      await controls.start({
        rotateY: -180,
        transition: {
          duration: 0.8,
          ease: [0.4, 0, 0.2, 1],
        },
      });
      setCurrentPage((prev) => prev + 1);
      controls.set({ rotateY: 0 });
    }
  };

  const prevPage = async () => {
    if (currentPage > 0) {
      await controls.start({
        rotateY: 180,
        transition: {
          duration: 0.8,
          ease: [0.4, 0, 0.2, 1],
        },
      });
      setCurrentPage((prev) => prev - 1);
      controls.set({ rotateY: 0 });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-8">
      <div className="relative w-[1000px] h-[700px] bg-white rounded-lg shadow-2xl perspective-2000">
        {/* Book binding effect */}
        <div className="absolute left-1/2 top-0 w-8 h-full bg-gradient-to-r from-gray-300 via-gray-200 to-transparent transform -translate-x-1/2 z-20" />

        {/* Left page */}
        <div className="absolute left-0 top-0 w-1/2 h-full bg-white overflow-hidden rounded-l-lg">
          <Image
            src={pages[Math.max(0, currentPage - 1)]}
            alt={`Page ${currentPage}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right page with curl effect */}
        <motion.div
          className="absolute right-0 top-0 w-1/2 h-full origin-left"
          style={{ perspective: 2000, transformStyle: "preserve-3d" }}
          animate={controls}
          drag="x"
          dragConstraints={{ left: -200, right: 200 }}
          dragElastic={0.1}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onDragStart={() => setIsDragging(true)}
        >
          {/* Front of page */}
          <motion.div
            className="absolute inset-0 bg-white rounded-r-lg overflow-hidden"
            style={{
              backfaceVisibility: "hidden",
              boxShadow: isDragging
                ? `${getCurlShadow(dragProgress)} -10px 0 15px`
                : "none",
            }}
          >
            <Image
              src={pages[currentPage]}
              alt={`Page ${currentPage + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation controls */}
      <div className="mt-8 flex gap-6">
        <Button
          onClick={prevPage}
          disabled={currentPage === 0}
          className="px-8 py-3 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-700 transition-colors"
        >
          Previous
        </Button>
        <Button
          onClick={nextPage}
          disabled={currentPage === pages.length - 1}
          className="px-8 py-3 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-700 transition-colors"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default FlipBook;
