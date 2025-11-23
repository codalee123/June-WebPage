import React from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AppRoutes } from '../Utils/route'
import {Button} from '../component/button'
import MobileSidebar from './MobileSidebar'

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: AppRoutes.about },
  { name: "Solutions", path:AppRoutes.solutions },
  { name: "Products", path: AppRoutes.products },
  { name: "Contact", path: AppRoutes.contact },
];

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  return (

   <> 
      <nav className="fixed top-0 left-0 z-50 flex items-center justify-between w-full py-2 text-white bg-black/40 px-20 max-md:px-4 max-lg:px-10 backdrop-blur-md">
        <Link to={AppRoutes.home}>
          <section className="flex items-center font-bold ">
            <div className="overflow-hidden w-30 max-sm:w-25">
              <img src="/June-Logo.svg" className="w-full " />
            </div>
          </section>
        </Link>

        {/* NAV ITEMS — MAPPED */}
        <div className="max-lg:hidden flex items-center gap-6 text-white">

          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={
                ({ isActive }) =>
                  `font-medium text-white text-base font-georama px-4 py-2 transition-colors ${
                    isActive ? "bg-purple-500" : "hover:text-gray-300 "
                  }`
            }
            >
              {link.name}
            </NavLink>
          ))}

        </div>

        {/* Mobile menu button */}
        <div
          className="max-lg:block hidden  cursor-pointer "
          onClick={() => setMenuOpen(true)}
        >
        <img src="/menu.svg" alt="" />
        </div>

        <a
          href="mailto:olawunmibello1@gmail.com"
          target="_blank"
          className="max-lg:hidden"
        >

          <Button text={"Get in Touch"} logo={"/arrow-right.svg"}/>

        </a>
      </nav>  
      {/* MOBILE SIDEBAR COMPONENT */}
        <MobileSidebar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          navLinks={navLinks}
        />
    </>
 
  ) 
}

export default Navbar