'use client'
import { HTMLMotionProps, motion } from "framer-motion"
import Image from "next/image"
import { FC, useState ,SVGProps} from "react"
import { BiCameraMovie } from "react-icons/bi"
import { BsCameraReels } from "react-icons/bs"
import { CiSearch } from "react-icons/ci"
import { IoIosTrendingUp } from "react-icons/io"
import { IoSettingsOutline } from "react-icons/io5"
import { RiHome2Line } from "react-icons/ri"
 
const Navigation: FC  = () => {
  const [width, setWidth] = useState<number>(80)
  const [open, setOpen] = useState<boolean>(false)
  const handleWidth = () =>{
    if(width <= 80){
      handleOpen()
    }
  }

  const handleClose =() =>{
    setOpen(false);
    setWidth(80)
  }
 
  const handleOpen =() =>{
      setWidth(300)
      setOpen(true)
  }
 
  return (
    <div className="">
    <motion.header 
    initial={{
      width: width
    }}
    animate={{
      width:width
    }}
    className="max-w-[340px] bg-black z-50 absolute h-full pr-[23px] py-[30px] pl-[15px] ">
        <nav className="relative flex flex-col h-full justify-between items-stretch overflow-hidden z-30">
          <div className="flex flex-row space-x-2 items-center" >
            <Image 
              width={60} 
              height={48} 
              className="rotate-90 min-w-[56px] min-h-[48]"
              src='https://s3-alpha-sig.figma.com/img/1c17/0b3b/8fa454f24dc605168c7a04d07aee8980?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oxNmgRPIO1ND829db94JE9e3dUCCbHOt8LLdv2g5ZbT2pU~~xv6NjG9BPRJwPYbRZMvkykP9~I10bBjEOZqIfCYetDKchcLZYK0TlSuzYyWza5KHjeT8-Pj7f8eNqigd7U9zVukI-i6wUD-b8JJHtOhafcePNfJUX~wSuCxrI9qR9AJ94a4UE9vFtx4GAguj0HpAu565apzR~E1F2vOAUFNCw3Jok-jQYMYiEcTPqhmOtrUHQ29eJnZSDMx3~uZf8Mu52mRjOaEUyXq-YMVAkB41BcFUdAn3piZ6SLBvD4vQZAnFS9D5VbLL1Pg~VSmsAhEs8~oQrjKKGdsj3CMyLw__' alt='logo'/>
            <h2 className="text-[32px]">Play</h2>
          </div>
         <ul className="space-y-12 min-w-full">
            <Item onClick={handleWidth} open={open} title='Search' Icon={CiSearch}/>
            <Item onClick={handleWidth} open={open} title='Home' Icon={RiHome2Line}/>
            <Item onClick={handleWidth} open={open} title='Trending' Icon={IoIosTrendingUp}/>
            <Item onClick={handleWidth} open={open} title='Web Series' Icon={BsCameraReels}/>
            <Item onClick={handleWidth} open={open} title='Movies' Icon={BsCameraReels}/>
         </ul>
         <div className="space-y-7 min-w-[212px]">
          <button className="flex flex-row w-full  justify-between text-[22px]"> 
            <svg height="60" width="60" xmlns="http://www.w3.org/2000/svg">
              <circle r="15" cx="30" cy="30" fill="#D9D9D9" />
            </svg>
            ux_dhruv
          </button>
          <button className="flex flex-row w-full justify-between text-[22px]">
              <IoSettingsOutline className="text-[30px] w-[60px]"/>
            Settings
          </button>
         </div>
        </nav>
         {open && <motion.div 
         initial={{
          opacity:0
         }}
         animate={{
          opacity:1
         }}
         transition={{
          duration:0.5
         }}
         style={{
          background:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 29%)"
         }}
         onClick={handleClose} className="absolute z-10 top-0 w-screen h-screen "/>}
    </motion.header>
    </div>
  )
}

export default Navigation

interface ItemProps {
  title: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
  onClick: () => void;
  open?: boolean
}
const Item: FC<ItemProps> = ({ title, Icon, onClick, open }) => { 
  const [isHovered, setHovered] = useState(false)
 
  return (
    <motion.li 
    onClick={onClick}
    onHoverStart={(e) =>{
      setHovered(true)
     } }
     onHoverEnd={(e) =>{
      setHovered(false)
     }}
    className="flex flex-row text-unfocused hover:text-white  cursor-pointer min-w-[216px] w-full transition-colors duration-200 justify-between items-center text-[22px]">
      <Icon className="text-[30px] w-[60px]"/>
      {<motion.span 
     className="relative flex flex-col w-[60px] text-center items-center whitespace-nowrap">
         {!open && isHovered && <motion.hr 
        className="absolute left-[-50px] top-[20px] w-full m-0 p-0 border-none h-[2px] bg-accent" />}
      </motion.span>}
      <motion.span 
        
      className="relative flex flex-col w-1/2 text-center items-center whitespace-nowrap">
        {title}
        {open && isHovered && <motion.hr 
        className="absolute top-full w-full m-0 p-0 border-none h-[2px] bg-accent" />}
      </motion.span>
    </motion.li>
  )
}

 