"use client";
import Image from "next/image";

import { useState, useCallback } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

import LogOut from "./LogOut";

function LogoutCard({ variants }) {
  const [isActive, setIsActive] = useState(false);

  const handleIsActive = () => {
    setIsActive((current) => !current);
  };

  return (
    <div className="absolute right-0 px-8 md:px-16 top-0.5 md:top-1 text-white z-50">
      <div
        className="flex items-center gap-3 pt-[22px]"
        onClick={handleIsActive}
      >
        <Image
          src="/images/default-slate.png"
          height={35}
          width={35}
          className="rounded-md cursor-pointer w-[25px] h-[25px] md:h-[35px] md:w-[35px]"
          priority={true}
          alt="Avatar-User"
        />
        <motion.div
          animate={isActive ? "inactive" : "active"}
          variants={variants}
        >
          <FontAwesomeIcon
            icon={faSortDown}
            className={`cursor-pointer transition-all duration-150 mb-1`}
          />
        </motion.div>
      </div>

      {isActive && <LogOut />}
    </div>
  );
}

export default LogoutCard;
