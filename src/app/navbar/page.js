"use client"

import Link from "next/link";
import {SiCoffeescript} from "react-icons/si"
import {AiOutlineClose,AiOutlineMenuFold} from "react-icons/ai"
import { useState } from "react";
export default function Navbar() {
const [menu,setMenu] = useState(false);

const handleChange = () =>{
  setMenu(!menu);
};

const closeMenu =() =>{
  setMenu(false);
};

  return (
    <div className="fixed w-full z-10">
      <div>
        <div className="flex flex-row justify-between p-5 lg:px-32 px-5 bg-gradient-to-r from-orange-200 to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className="flex flex-row items-center cursor-pointer gap-2">
            <span>
                <SiCoffeescript size={25}/>
            </span>
            <h1 className="text-xl font-semibold">CafePulse</h1>
          </div>
      <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
      <Link href="/" spy={true} smooth={true} duration={500} className="group relative inline-block cursor-pointer hover:text-brightColor">Home <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span></Link>
    <Link href="menu" spy={true} smooth={true} duration={500} className="group relative inline-block cursor-pointer hover:text-brightColor">Menu <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span></Link>
    <Link href="about" spy={true} smooth={true} duration={500} className="group relative inline-block cursor-pointer hover:text-brightColor">About Us <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span></Link>
    <Link href="product" spy={true} smooth={true} duration={500} className="group relative inline-block cursor-pointer hover:text-brightColor">Products <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span></Link>
    <Link href="reviews" spy={true} smooth={true} duration={500} className="group relative inline-block cursor-pointer hover:text-brightColor">Reviews <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span> </Link>
     </nav>
          <div className="hidden lg:flex">
          <button className="px-6 py-1 border-white bg-orange-200 hover:bg-orange-400 transition-all rounded-full">Login</button>
          </div>

          <div className="md:hidden flex items-center">
         {
          menu ? (
            <AiOutlineClose size={25} onClick={handleChange}/>
          ): (
            <AiOutlineMenuFold size={25} onClick={handleChange}/>
          )
         }
          </div>
        </div>

        <div className={`${menu ? "translate-x-0" :"-translate-x-full"} lg:hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
        <Link href="home" spy={true} smooth={true} duration={500} onClick={closeMenu} className="group relative inline-block cursor-pointer hover:text-brightColor">Home <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span></Link>
    <Link href="Menu" spy={true} smooth={true} duration={500} onClick={closeMenu}  className="group relative inline-block cursor-pointer hover:text-brightColor">Menu <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span></Link>
    <Link href="About" spy={true} smooth={true} duration={500} onClick={closeMenu}  className="group relative inline-block cursor-pointer hover:text-brightColor">About Us <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span></Link>
    <Link href="Products" spy={true} smooth={true} duration={500} onClick={closeMenu}  className="group relative inline-block cursor-pointer hover:text-brightColor">Products <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span></Link>
    <Link href="Reviews" spy={true} smooth={true} duration={500} onClick={closeMenu}  className="group relative inline-block cursor-pointer hover:text-brightColor">Reviews <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span> </Link>
        
    <button className=" px-6 py-1 border-white bg-orange-200 hover:bg-orange-400 transition-all rounded-full">Login</button>
        </div>
        
      </div>
    </div>
  );
}
