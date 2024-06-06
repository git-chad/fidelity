"use client";
import React, { useState, memo } from "react";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import { images } from "@/constants";
import GridFilters from "../navigation/grid-filters";

const Grid = () => {
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
      <div className="flex w-full justify-between mb-4">
        <GridFilters/>
        <div className="flex justify-end mb-4 space-x-2">
          {[1, 2, 3, 4].map((value) => (
            <button
              key={value}
              onClick={() => handleButtonClick(value)}
              className={`px-2 py-2 rounded active:scale-125 transition-all ${
                columns === value ? "bg-zinc-200 text-white" : "bg-zinc-700"
              }`}
              aria-label={`Set columns to ${value}`}
            ></button>
          ))}
        </div>
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

export default memo(Grid);
