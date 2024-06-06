"use client";
import React, { useState, memo } from "react";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import { images } from "@/constants";

const GridOld = () => {
  const [columns, setColumns] = useState(4);

  const handleButtonClick = (value: number) => {
    setColumns(value);
  };

  const breakpointColumnsObj = {
    default: columns,
    1100: Math.max(columns - 1, 1),
    700: Math.max(columns - 2, 1),
    500: Math.max(columns - 3, 1),
  };

  return (
    <div>
      <div className="flex justify-center mb-4 space-x-2">
        {[1, 2, 3, 4].map((value) => (
          <button
            key={value}
            onClick={() => handleButtonClick(value)}
            className={`px-4 py-2 rounded ${
              columns === value ? "bg-zinc-900 text-white" : "bg-zinc-800"
            }`}
            aria-label={`Set columns to ${value}`}
          >
            {value}
          </button>
        ))}
      </div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            layout
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src={src}
                alt={`Image ${index}`}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        ))}
      </Masonry>
    </div>
  );
};

export default memo(GridOld);
