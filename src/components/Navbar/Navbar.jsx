//src/components/Navbar/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import NavLinks from "./NavLinks";
import Button from "../Button";
import {FaAlignJustify, FaX} from 'react-icons/fa6'

const Navbar = () => {
 const [open,setOpen]= useState(false)

  return (
    <nav className="bg-white ">
      <div className="flex items-center font-medium justify-around">
        <div className=" flex items-center justify-between z-50 p-5 md:w-auto w-full ">
          <img className="md:cursor-pointer w-20 h-15 z-50"  src={Logo} alt="logo" />
          {/* hamburger icon */}
          <div className="text-3xl md:hidden block" onClick={()=>setOpen(!open)}> 
           {open?<FaX/>:<FaAlignJustify/>}
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 ">
          <li>
           <Link to='' className=" py-7 px-3 inline-block">
              Home
           </Link>
          </li>
          <NavLinks/>
        </ul>
        <div className="md:block hidden">
              <Button/>

        </div>
        {/* mobile view */}
        <ul className={`md:hidden bg-white absolute w-full h-[100vh] bottom-0 py-25 pl-4 duration-500  ${open? 'left-0':'left-[-100%]'}`}>
          <li >
           <Link to='' className=" py-7 px-3 inline-block">
              Home
           </Link>
          </li>
          <NavLinks/>
          <div className="py-5">
            <Button/>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
