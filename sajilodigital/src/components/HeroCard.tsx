"use client";

import { Image } from "@heroui/react";
import { motion } from "framer-motion";
import { Motion } from "./Motion";

export const HeroCard =()=> {
  return (
    <div className="flex justify-center items-center bg-opacity-0">
      <Motion
        initial="hidden"
        animate="visible"
        className="flex items-center justify-center top-10 w-190 h-auto bg-opacity-0 shadow-lg overflow-hidden"
      >
        <Motion
          initial="hidden"
          animate="visible"
          className="inset-2 bg-opacity-0 sm:w-100 md:w-200 lg:w-200"
        >
          <Image
            src="/profile01.png"
            alt="Balgobind Chaudhary"
            className=" objectFit-cover sm:w-200 md:w-200 lg:w-200"
          />
        </Motion>
      </Motion>
    </div>
  );
}
