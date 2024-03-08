import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'gradient-blur' :'background: linear-gradient(89.04deg, #000000 24.06%, rgba(0, 0, 0, 0) 99.24%)',
        'blurred':'rgba(0, 0, 0, 0.7)'
      },
      colors:{
        accent:'#D40000',
        grey:'#CDCDCD',
        btn_grey:'#D9D9D9',
        icon_grey:'#F8F8F8',
        unfocused:'#686868',
        nav_black:'#101010'
      }
    },
  },
  plugins: [],
};
export default config;
