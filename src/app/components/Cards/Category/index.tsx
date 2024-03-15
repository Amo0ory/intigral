import Image from 'next/image'
import React from 'react'
import {CategoryProps} from '@/app/types/global'
 
const CategoryCard = ({id,image, title, link}: CategoryProps) => {
  return (
    <a href={link} className='relative'>
        <div
        style={{
            width:'200px',
            height:'120px',
            backgroundImage:`url("${image}")`,
            backgroundSize:'contain'
        }}
        />
        <span className='absolute bg-black/70 top-0 text-[32px] w-full h-full flex items-center justify-center'>
            {title}
        </span>
    </a>
  )
}

export default CategoryCard