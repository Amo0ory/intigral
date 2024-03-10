'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Rating from '@/app/components/UI/Rating'
import Button from '@/app/components/UI/Button'
import { CiHeart } from 'react-icons/ci'
import { FaHeart } from 'react-icons/fa'
import {AnimatePresence, motion} from 'framer-motion'
  
const MovieCard = ({image, label,withDetails = false, description = ''}: {image:string,label:string, withDetails?:boolean, description?:string}) => {
    const [isHovered, setIsHovered] = useState<boolean>(false)

    const handleOpen = () =>{
        console.log(isHovered)
        setIsHovered(true)
    }
    const handleClose = () =>{
        console.log(isHovered)
        setIsHovered(false)
    }
  return (
    <motion.div 
    onHoverStart={handleOpen}
    onHoverEnd={handleClose}
    className='relative'>
        <div
        style={{
            width:'200px',
            height:'120px',
            backgroundImage:`url("${image}")`,
            backgroundSize:'contain'
        }}
        />
        <span className='text-[14px]'>
            {label}
        </span>
        
      {withDetails &&
          <Modal isOpen={isHovered} isFavourite={false} image={image} label={label} description={description}/>}
    </motion.div>
  )
}

export default MovieCard


const Modal = ({image, label, description, isFavourite= false, isOpen= false}:{image:string, label:string, description:string, isFavourite?:boolean,isOpen:boolean}) =>{
    const hanlderPlayTrailer = () =>{ 
        // Function to play Trailer
        console.log('play trailer')
    }
    const handlePlayNow = () =>{
        // Function to play Video Now
        console.log('play now')
    }

    const handleFavourite = () =>{
        console.log('handler favourite')
    }
    return(
      
        <dialog
        className='absolute top-0 bg-white h-[410px] w-[340px]'
        open={isOpen}
        >
            <Image
            src={image}
            width={340}
            height={188}
            alt={label}
            />
            <div className="px-[10px] pt-[15px] pb-[12px]">
                <p className='text-[20px]'>
                    <strong>{label}</strong>
                </p>
                <p className='text-[#313131] text-[14px] font-normal mb-[10px]'>{description}</p>
                <div className='w-full flex flex-row justify-between'>
                    <Rating rating={2}/>
                    <a href='#' className='underline'>
                        Read more
                    </a>
                </div>
                <div className='flex flex-row justify-between items-center mt-[6px] mb-[12px]'>
                    <div className='space-x-[30px]'>
                    <Button
                        type='primary'
                        label='Play Now'
                        className='w-[100px] h-[40px] font-semibold'
                        onClick={handlePlayNow}
                    />
                    <Button
                        type='secondary'
                        label='Watch Trailer'
                        className='w-[100px] h-[40px] px-[3px] text-[14px] font-semibold'
                        onClick={hanlderPlayTrailer}
                    />
                    </div>
                    <div>
                        <button
                        onClick={handleFavourite}
                        >
                        {
                        isFavourite ?  
                                <FaHeart className='text-red-500 text-[28px]' /> : <CiHeart className='text-red-500 text-[28px]' />
                            }
                        </button>
                    </div>
                </div>
            </div>
         </dialog>
    )


}