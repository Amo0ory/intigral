"use client";
import React, { useEffect, useRef, useState } from "react";
import MovieCard from "../Cards/Movie";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { MdOutlineNavigateNext } from "react-icons/md";
import {motion, useInView} from 'framer-motion'
import { CarouselProps } from "@/app/types/global";
import CategoryCard from "../Cards/Category";

const Carousel = ({data, type,title}:CarouselProps) => {
     
    const [currentIndex, setCurrentIndex] = useState<number>(1);
    const [isLastVisible, setIsLastVisible] = useState(false);
    const [x, setX] = useState(0);
    const ref = useRef(null);
    const visibleLast = useRef(null);
    const isInView = useInView(visibleLast,{amount: "all"})
    
    const hanslevisible = (v:any) =>{
        return true
    }

  const handleNext = (ref:any) => {
    setCurrentIndex((prevIndex) =>
        prevIndex + 1 === data.length ? 0 : prevIndex + 1
    );
    setX(currentIndex * ref.current?.children[0]?.clientWidth)
    
    // setIsLastVisible(true)
  }
  const handlePrevious = (ref:any) => {
    setCurrentIndex((prevIndex) =>
    prevIndex - 1 < 0 ? data.length - 1 : prevIndex - 1
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

   return (
        <div className="relative w-[80vw]">
            <p className="my-[20px] text-white text-[18px] font-semibold">{title}</p>
            <div className=" flex flex-row items-center ">      
            <motion.div 
                className="max-w-[1380px] w-full flex flex-row space-x-[30px] "
                animate={{ x: -x }}
                ref={ref}
                >
                {
                data.map((value,index) => {
                    if(index === data.length -1){
                        if(type ==='movies'){
                            return (
                            <div 
                            ref={visibleLast}
                            key={value.id}
                            >
                            
                                <MovieCard
                            id={value.id}
                            title={value.title}
                            image={value.image}
                            withDetails={true}
                            description={value.description}
                    
                            />
                            </div>
                            )
                        }else{
                            return(
                            <div 
                            ref={visibleLast}
                            key={value.id}
                            >
                              <CategoryCard
                                id={value.id}
                                title={value.title}
                                image={value.image}
                                link={value.link}
                                />
                            </div>
                            )
                        }
                    }

                    if(type =='categories'){
                        return (
                            <CategoryCard
                            key={value.id}
                            id={value.id}
                            title={value.title}
                            image={value.image}
                            link={value.link}
                            />
                        )
                    }else{
                        return (
                            <MovieCard
                            key={value.id}
                            id={value.id}
                            title={value.title}
                            image={value.image}
                            withDetails={true}
                            description={value.description}
                    
                            />
                        );
                    }
                })
                }
            </motion.div>
            {currentIndex > 1 && <button
                onClick={() => handlePrevious(ref)}
                className="text-[46px] z-30 absolute left-0 rotate-180 w-[46px] h-[46px] rounded-full bg-white text-black"
            >
                <MdOutlineNavigateNext />
            </button>}
            {!isInView && <button
                onClick={() => handleNext(ref)}
                className="text-[46px] z-30 absolute right-0 w-[46px] h-[46px] rounded-full bg-white text-black"
            >
                <MdOutlineNavigateNext />
            </button>}
            </div>
        </div>
  );
};

export default Carousel;
