import Image from 'next/image'
import React from 'react'

 
const CategoryCard = ({image, label}: {image:string,label:string}) => {
  return (
    <div className='relative'>
        <div
        style={{
            width:'200px',
            height:'120px',
            backgroundImage:`url("${image}")`,
            backgroundSize:'contain'
        }}
        />
        <span className='absolute bg-black/70 top-0 text-[32px] w-full h-full flex items-center justify-center'>
            {label}
        </span>
    </div>
  )
}

export default CategoryCard