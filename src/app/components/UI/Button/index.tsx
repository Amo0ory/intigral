import React from 'react'

const Button = ({type = '', label, className, onClick}:{type:'primary' | 'secondary' | '', label:string, className?:string,onClick?:() =>void}) => {
  return (
    <button
        onClick={onClick} 
        className={
            `${type === 'primary'? 
                "bg-accent text-white" : 
                type === 'secondary'? "bg-[#A8A8A8] text-black": 
                    "bg-[#D9D9D9] text-black"}
                    ${className}
                    `}>
        {label}
    </button>
  )
}

export default Button