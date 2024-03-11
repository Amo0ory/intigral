import React from "react";
import { ButtonProps } from "@/app/types/global";
const Button = ({ type = null, label, className, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${
        type === "primary"
          ? "bg-accent text-white"
          : type === "secondary"
          ? "bg-[#A8A8A8] text-black"
          : "bg-[#D9D9D9] text-black"
      }
                    ${className}
                    `}
    >
      {label}
    </button>
  );
};

export default Button;
