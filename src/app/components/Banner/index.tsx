import React from 'react'
import {banner} from '@/app/assets/data/banner'
import Rating from '../UI/Rating'
import Button from '../UI/Button'
import Image from 'next/image'
const Banner = () => {
  return (
    <div className='pl-[60px] w-full'>
        <Image 
            className='absolute left-0 w-[100%] h-full right-0 top-0 z-[-1]'
            alt={banner.title}
            src={banner.image} 
            width={1440} 
            height={730}
        /> 
        <div className='absolute z-0 left-0 bottom-0 w-[100%] h-[329px] bg-gradient-to-t from-black to-black/0 opacity-25' />
        <div className='absolute z-0 left-10 bottom-0 w-[329.35px] h-[100%] bg-gradient-to-r from-black to-black/0 opacity-25' />
        <div className='relative z-10'>
            <h1 className='text-[48px] font-semibold mb-[33px]'>{banner.title}</h1>
            <p className='w-[344px] mb-[30px]'>{banner.description}</p>
            <Rating
                className='text-white'
                rating={8}
            />
            <p className='mt-[20px]'>
                <span className='text-[#D40000] font-semibold mx-1'>
                    2B+ 
                </span>
                Streams
            </p>
            <div className='space-x-[20px] mt-[30px]'>
            <Button className='w-[140px] h-[46px] text-[18px] font-semibold' label='Play' type='primary' />
            <Button className='w-[140px] h-[46px] text-[18px] font-semibold' label='Watch Trailer' type={null}/>
            </div>
        </div>
    </div>
 
  )
}

export default Banner