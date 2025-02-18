"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const pages = [
  "/page1.png",
  "/page2.png",
  "/page3.png",
  "/page4.png"
];

export default function FlipBook() {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="relative w-[400px] h-[600px] bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Wrapper for the page turning effect */}
        <motion.div
          key={currentPage}
          className="absolute w-full h-full"
          initial={{
            rotateY: -180,
            opacity: 0,
            scale: 1.05,
            transformOrigin: "right center",
            perspective: 1500,
          }}
          animate={{
            rotateY: 0,
            opacity: 1,
            scale: 1,
          }}
          exit={{
            rotateY: 180,
            opacity: 0,
            scale: 1.05,
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          {/* The front side of the page */}
          <motion.img
            src={pages[currentPage]}
            alt={`Page ${currentPage + 1}`}
            className="w-full h-full object-cover"
            style={{
              backfaceVisibility: "hidden",
              transformStyle: "preserve-3d",
            }}
          />
        </motion.div>
      </div>
      <div className="mt-4 flex gap-4">
        <Button onClick={prevPage} disabled={currentPage === 0}>
          Previous
        </Button>
        <Button onClick={nextPage} disabled={currentPage === pages.length - 1}>
          Next
        </Button>
      </div>
    </div>
  );
}
