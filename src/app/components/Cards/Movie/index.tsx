"use client";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import Rating from "@/app/components/UI/Rating";
import Button from "@/app/components/UI/Button";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { MovieProps, MovieModalProps } from "@/app/types/global";
const MovieCard = ({
  id,
  image,
  title,
  withDetails = false,
  description = "",
}: MovieProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const handleOpen = () => {
    setIsHovered(true);
  };
  const handleClose = () => {
    setIsHovered(false);
  };
  return (
    <Fragment>
      <div className="relative">
        <motion.div
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          
          className="relative z-10"
        >
          <div
            style={{
              width: "200px",
              height: "120px",
              backgroundImage: `url("${image}")`,
              backgroundSize: "contain",
            }}
          />
          <span className="text-[14px]">{title}</span>
        </motion.div>
        {withDetails && isHovered && (
          <Modal
            id={id}
            rating={0}
            isOpen={isHovered}
            setIsOpen={setIsHovered}
            isFavourite={false}
            image={image}
            title={title}
            description={description}
          />
        )}
      </div>
    </Fragment>
  );
};

export default MovieCard;

const Modal = ({
  image,
  title,
  description,
  isFavourite = false,
  setIsOpen = () => null
}: MovieModalProps) => {
  const hanlderPlayTrailer = () => {
    // Function to play Trailer
    console.log("play trailer");
  };
  const handlePlayNow = () => {
    // Function to play Video Now
    console.log("play now");
  };

  const handleFavourite = () => {
    console.log("handler favourite");
  };
  return (
    <motion.div
      className="absolute z-40 top-0 bg-white min-h-[410px] w-[340px]"
      // open={isOpen}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      initial={{
        scale:.5,
        opacity:0,
        y:'-50%'
      }}
      animate={{
        scale:1,
        opacity:1
      }}
       transition={{
        duration:0.5
       }}
    >
      <Image src={image} width={340} height={188} alt={title} />
      <div className="px-[10px] pt-[15px] pb-[12px]">
        <p className="text-[20px]">
          <strong>{title}</strong>
        </p>
        <p className="text-[#313131] text-[14px] font-normal mb-[10px]">
          {description}
        </p>
        <div className="w-full flex flex-row justify-between">
          <Rating rating={2} />
          <a href="#" className="underline">
            Read more
          </a>
        </div>
        <div className="flex flex-row justify-between items-center mt-[6px] mb-[12px]">
          <div className="space-x-[30px]">
            <Button
              type="primary"
              label="Play Now"
              className="w-[100px] h-[40px] font-semibold"
              onClick={handlePlayNow}
            />
            <Button
              type="secondary"
              label="Watch Trailer"
              className="w-[100px] h-[40px] px-[3px] text-[14px] font-semibold"
              onClick={hanlderPlayTrailer}
            />
          </div>
          <div>
            <button onClick={handleFavourite}>
              {isFavourite ? (
                <FaHeart className="text-red-500 text-[28px]" />
              ) : (
                <CiHeart className="text-red-500 text-[28px]" />
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
