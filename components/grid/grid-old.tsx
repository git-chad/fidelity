"use client";
import React, { useState } from "react";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import { images, titles } from "@/constants";

const GridOld = () => {
  const [columns, setColumns] = useState(4);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColumns(Number(e.target.value));
  };

  const breakpointColumnsObj = {
    default: columns,
    1100: Math.max(columns - 1, 1),
    700: Math.max(columns - 2, 1),
    500: Math.max(columns - 3, 1),
  };

  return (
    <div>
      <div className="flex justify-center mb-4">
        <input
          type="range"
          min="1"
          max="4"
          value={columns}
          onChange={handleSliderChange}
          className="w-1/5"
        />
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
            <div className="rounded">
              <img
                src={src}
                alt={`Image ${index}`}
                className="w-full h-auto object-cover"
              />
                <h2 className="text-lg font-semibold">{titles[index]}</h2>
            </div>
          </motion.div>
        ))}
      </Masonry>
    </div>
  );
};

export default GridOld;
