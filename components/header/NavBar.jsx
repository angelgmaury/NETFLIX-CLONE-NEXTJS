"use client";
import React, { useEffect, useState, useCallback } from "react";
import LogoutCard from "./LogoutCard";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { BsBell, BsSearch } from "react-icons/bs";

import MenuMobile from "./MenuMobile";
import { motion } from "framer-motion";

function NavBar() {
  const [isScrolling, setIsScrolling] = useState(false);

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 66);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  const variants = {
    active: {
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.4,
      },
    },
    inactive: {
      y: 4,
      rotate: 180,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <header
      className={`${
        isScrolling ? " bg-zinc-900 bg-opacity-90 transition duration-500" : ""
      } w-full fixed flex items-center z-40`}
    >
      <div className={`flex md:px-16 px-8 pt-6 items-center pb-6`}>
        <Image
          src="/images/logo.png"
          alt="netflix-logo"
          width={120}
          height={30}
          priority={true}
          className="mr-5 cursor-pointer w-16 mt-1 h-4 md:w-[120px] md:h-[30px]"
        />
        <ul className="hidden lg:flex w-full gap-5 items-center">
          <li className="text-zinc-100">Home</li>
          <li>Series</li>
          <li>Films</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>

        <div
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative text-white"
          onClick={toggleMobileMenu}
        >
          <p className="text-sm md:text-lg">Browse</p>

          <motion.div
            animate={showMobileMenu ? "inactive" : "active"}
            variants={variants}
          >
            <FontAwesomeIcon
              icon={faSortDown}
              className={`cursor-pointer relative transition-all duration-150 mb-0.5`}
            />
          </motion.div>

          {showMobileMenu ? <MenuMobile /> : null}
        </div>

        {/* <div className="relative right-20 text-zinc-200 flex items-center gap-6">
          <BsSearch className="cursor-pointer" />
          <BsBell className="cursor-pointer" />
        </div> */}
      </div>
      <LogoutCard variants={variants} />
    </header>
  );
}

export default NavBar;
