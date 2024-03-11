"use client";
import React, { useRef, useState } from "react";
import MovieCard from "../Cards/Movie";
import { movies } from "@/app/assets/data/movies";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { MdOutlineNavigateNext } from "react-icons/md";
import {motion} from 'framer-motion'
const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(1);
    const [x, setX] = useState(0);
    const ref = useRef(null);
console.log('currentIndex')
console.log(currentIndex)
  const handleNext = (ref) => {
    setCurrentIndex((prevIndex) =>
    prevIndex + 1 === movies.length ? 0 : prevIndex + 1
  );
  setX(currentIndex * ref.current?.children[0]?.clientWidth)
    console.log(ref.current?.children[0].clientWidth)
    // setX( (previous)  =>{
    //     previous + (currentIndex + ref.current?.children[0]?.clientWidth)
    // })
  }
  const handlePrevious = (ref) => {
    setCurrentIndex((prevIndex) =>
    prevIndex - 1 < 0 ? movies.length - 1 : prevIndex - 1
    );
    setX( x -  ref.current?.children[0]?.clientWidth)
  };
 
  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };

//   console.log(ref.current?.children[0].clientWidth)
  return (
    <div className="relative flex flex-row items-center ">
      <motion.div 
        className="max-w-[1380px] w-full flex flex-row space-x-[30px] "
        animate={{ x: -x }}
        ref={ref}
        >
        {movies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              image={movie.image}
              withDetails={true}
              description={movie.description}
            />
          );
        })}
      </motion.div>
    {currentIndex > 1 && <button
        onClick={() => handlePrevious(ref)}
        className="text-[46px] z-30 absolute left-0 rotate-180 w-[46px] h-[46px] rounded-full bg-white text-black"
      >
        <MdOutlineNavigateNext />
      </button>}
      <button
        onClick={() => handleNext(ref)}
        className="text-[46px] z-30 absolute right-0 w-[46px] h-[46px] rounded-full bg-white text-black"
      >
        <MdOutlineNavigateNext />
      </button>
    </div>
  );
};

export default Carousel;
