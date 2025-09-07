// components/HeroSection.tsx

import React, { useState, useEffect } from "react";
import { SparklesIcon } from "@heroicons/react/16/solid";
import { letterText } from "@/lib/constants";
import { Button1, Button2 } from "./Button"; // Assuming you already have Button components
import { HeroCard } from "./HeroCard"; // Assuming HeroCard is a custom component
import { Motion } from "./Motion";

const HeroSection: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isWriting, setIsWriting] = useState(false);

  useEffect(() => {
    if (isWriting && charIndex < letterText.length) {
      const timer = setTimeout(() => {
        setDisplayText((prevText) => prevText + letterText[charIndex]);
        setCharIndex((prevIndex) => prevIndex + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [charIndex, isWriting]);

  const startWriting = () => {
    setDisplayText("");
    setCharIndex(0);
    setIsWriting(true);
  };

  return (
    <section id="about" className="relative w-full px-16 py-16">
      {/* Hero Section */}
      <Motion
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row items-center justify-start mt-22 sm:mt-7 md:mt-12 lg:mt-16 w-full z-[20] gap-6 sm:gap-3 md:gap-5 lg:gap-10"
      >
        {/* Left Section */}
        <div className="flex flex-col ml-2 sm:ml-0 md:ml-0 lg:ml-32 justify-center gap-2 sm:gap-5 md:gap-4 text-start md:text-left sm:text-left w-full">
          <Motion
            initial="hidden"
            animate="visible"
            className="welcome-box w-[200px] sm:w-[260px] md:w-[300px] py-[6px] sm:py-[8px] px-[4px] border rounded-xl border-[#7042f88b] opacity-[0.9] mx-auto md:mx-0"
          >
            <span className="flex items-center justify-start">
              <SparklesIcon className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 mr-2 sm:mr-3 text-[#b494ff]" />
              <h1 className="Welcome-text text-[12px] sm:text-[14px] md:text-[16px] xs:text-[333px] text-center sm:text-center">
                FullStack Developer Portfolio
              </h1>
            </span>
          </Motion>
          <Motion
            initial="hidden"
            animate="visible"
            className="my-3 sm:my-4 md:my-5 z-[10]"
          >
            <h2 className="Welcome-text uppercase tracking-wide text-base sm:text-lg md:text-md lg:text-xl text-blue-100 text-center md:text-left">
              Dynamic Web Design With Next.js
            </h2>
          </Motion>
          <Motion
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 mt-3 text-6xl font-bold text-white max-w-[700px] sm:max-w-[600px] w-auto h-auto"
          >
            <span>
              Providing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                the best{" "}
              </span>
              project experience
            </span>
          </Motion>
          <Motion
            initial="hidden"
            animate="visible"
            className="flex flex-col mt-3 mb-0 text-3xl font-bold text-white max-w-[600px] w-auto h-auto"
          >
            <span>
              I&apos;m
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                Balgobind Chaudhary{" "}
              </span>
            </span>
          </Motion>
          <Motion
            initial="hidden"
            animate="visible"
            className="text-lg text-gray-400 my-5 max-w-[600px]"
          >
            Full Stack Software Developer with experience in MERN Stack Web
            Development.
            {displayText}
          </Motion>
          <Motion
            initial="hidden"
            animate="visible"
            className="flex mx-auto md:mx-0 gap-5"
          >
            <Button1 startWriting={startWriting} />
            <Button2 />
          </Motion>
        </div>

        {/* Right Section - Image */}
        <Motion
          initial="hidden"
          animate="visible"
          className="relative flex top-0 flex-col sm:flex-row items-center justify-center w-full p-4 sm:p-6 lg:p-8"
        >
          <HeroCard />
        </Motion>
      </Motion>
    </section>
  );
};

export default HeroSection;
