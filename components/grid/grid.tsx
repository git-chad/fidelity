"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { images, titles } from "@/constants";

const Grid: React.FC = () => {
  const [columns, setColumns] = useState<number>(4);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColumns(Number(e.target.value));
  };

  useEffect(() => {
    if (containerRef.current) {
      const gridItems = Array.from(containerRef.current.children) as HTMLElement[];
      const columnHeights = Array(columns).fill(0);
      const positions: { x: number; y: number }[] = [];

      gridItems.forEach((item, i) => {
        const column = columnHeights.indexOf(Math.min(...columnHeights));
        const x = column * (item.offsetWidth + 16);
        const y = columnHeights[column];
        positions.push({ x, y });
        columnHeights[column] += item.offsetHeight + 16;
      });

      gridItems.forEach((item, i) => {
        gsap.to(item, {
          x: positions[i].x,
          y: positions[i].y,
          duration: 0.2,
          ease: "easeInOut",
        });
      });

      containerRef.current.style.height = `${Math.max(...columnHeights)}px`;
    }
  }, [columns]);

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
      <div ref={containerRef} className="relative">
        {images.map((src, index) => (
          <div
            key={index}
            className="p-2 absolute"
            style={{
              width: columns === 1 ? '100%' : `calc(100% / ${columns} - 16px)`,
            }}
          >
            <div className="rounded overflow-hidden">
              <img
                src={src}
                alt={`Image ${index}`}
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{titles[index]}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
