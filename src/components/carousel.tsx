import React, { useRef, useState, useEffect } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

type Slide = {
  src: string;
  title: string;
};

interface CarouselProps {
  slides: Slide[];
  visibleCount?: number;
}

const Carousel: React.FC<CarouselProps> = ({ slides, visibleCount = 8 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Buttons
  const handlePrev = () => setIndex((i) => Math.max(0, i - 1));
  const handleNext = () =>
    setIndex((i) => Math.min(slides.length - visibleCount, i + 1));

  // Sync scroll when index changes
  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // one slide width = container width / visibleCount
    const slideWidth = container.offsetWidth / visibleCount;

    container.scrollTo({
      left: index * slideWidth,
      behavior: 'smooth',
    });
  }, [index, visibleCount]);

  // Dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.2; // drag speed
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <Box className="relative w-full">
      {/* Container */}
      <Box
        ref={containerRef}
        className="flex overflow-hidden cursor-grab active:cursor-grabbing gap-4"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {slides.map((slide, i) => (
          <Box
            key={i}
            className="relative flex-shrink-0 min-w-[150px] h-[100px] bg-cover bg-center rounded-lg overflow-hidden"
            sx={{
              backgroundImage: `url(${slide.src})`,
            }}
          >
            <Box className="absolute inset-0 bg-black/10" />
            {/* Title overlay */}
            <Typography className="absolute bottom-2 left-2 text-white px-2 py-1 font-semibold">
              {slide.title}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Prev button (left) */}
      {index > 0 && (
        <IconButton
          onClick={handlePrev}
          className="absolute top-1/2 left-0 -translate-y-1/2 bg-background-default/70 hover:bg-background-default"
        >
          <ChevronLeft />
        </IconButton>
      )}

      {/* Next button (right) */}
      {index < slides.length - visibleCount && (
        <IconButton
          onClick={handleNext}
          className="absolute top-1/2 right-0 -translate-y-1/2 bg-background-default/70 hover:bg-background-default"
        >
          <ChevronRight />
        </IconButton>
      )}
    </Box>
  );
};

export default Carousel;
