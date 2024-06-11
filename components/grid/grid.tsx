"use client";
import React, { useState, memo, useEffect, useRef } from "react";
import { motion, LayoutGroup } from "framer-motion";
import { images } from "@/constants";
import GridFilters from "../navigation/grid-filters";

const Grid = () => {
  const [columns, setColumns] = useState(4);
  const columnRefs = useRef([]);

  const handleButtonClick = (value: number) => {
    setColumns(value);
  };

  useEffect(() => {
    columnRefs.current = columnRefs.current.slice(0, columns);
  }, [columns]);

  const distributeImages = () => {
    const columnHeights = new Array(columns).fill(0);
    const distributedImages = images.map((src, index) => {
      const minColumn = columnHeights.indexOf(Math.min(...columnHeights));
      columnHeights[minColumn] += 1; 
      return { src, column: minColumn };
    });

    return distributedImages;
  };

  const distributedImages = distributeImages();

  return (
    <div>
      <div className="flex w-full justify-between mb-4">
        <GridFilters />
        <div className="flex justify-end mb-4 space-x-2">
          {[1, 2, 3, 4].map((value) => (
            <button
              key={value}
              onClick={() => handleButtonClick(value)}
              className={`px-2 py-2 rounded active:scale-125 transition-all ${
                columns === value ? "bg-zinc-200 text-white" : "bg-zinc-700"
              }`}
              aria-label={`Set columns to ${value}`}
            >
            </button>
          ))}
        </div>
      </div>
      <div className="flex gap-4">
        {Array.from({ length: columns }).map((_, colIndex) => (
          <motion.div
            key={colIndex}
            // @ts-ignore
            ref={(el) => (columnRefs.current[colIndex] = el)}
            className="flex-1 space-y-4"
            layout
          >
            <LayoutGroup>
              {distributedImages
                .filter((img) => img.column === colIndex)
                .map((img, index) => (
                  <motion.div
                    key={index}
                    layout
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="rounded-2xl overflow-hidden"
                  >
                    <img
                      src={img.src}
                      alt={`Image ${index}`}
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                ))}
            </LayoutGroup>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default memo(Grid);
