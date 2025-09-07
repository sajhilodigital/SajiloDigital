"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  {
    title: "Photography",
    description: "Lorem ipsum dolor sit amet.",
    image: "/images/photo1.jpg",
  },
  {
    title: "Travel",
    description: "Consectetur adipisicing elit.",
    image: "/images/photo2.jpg",
  },
  {
    title: "Adventure",
    description: "Doloremque nesciunt fugiat.",
    image: "/images/photo3.jpg",
  },
  {
    title: "Nature",
    description: "Sit ex doloremque eveniet.",
    image: "/images/photo4.jpg",
  },
  {
    title: "Wildlife",
    description: "Neque dicta reprehenderit.",
    image: "/images/photo5.jpg",
  },
];

export default function CardCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % cards.length);
  const handlePrev = () =>
    setActiveIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden ">
      <div className="relative md:w-[900px] md:h-[500px] flex items-center justify-center [perspective:1600px]">
        {cards.map((card, index) => {
          // Calculate the angle and position of each card
          const offset = (index - activeIndex + cards.length) % cards.length;
          const angle = (360 / cards.length) * offset;
          const distance = 500; // Controls the distance between cards
          const transformValue = `rotateY(${angle}deg) translateZ(${distance}px)`;

          return (
            <div
              key={index}
              className="absolute"
              style={{
                transformOrigin: "50% 50% -500px",
                transform: transformValue,
                transition: "transform 0.8s ease-in-out",
              }}
            >
              <Card className="w-[400px] h-[500px] bg-[#1e293b] border border-blue-500 shadow-lg rounded-xxl overflow-hidden">
                <div
                  className="h-40 bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
                <CardContent className="p-4 text-center">
                  <h3 className="text-white font-semibold text-lg">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2 line-clamp-3">
                    {card.description}
                  </p>
                  <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="absolute left-5">
        <Button
          onClick={handlePrev}
          className="bg-transparent text-gray-950 rounded-full px-4 py-2 hover:bg-transparent"
        >
          <ChevronLeft />{" "}
        </Button>
      </div>
      <div className="absolute right-5">
        <Button
          onClick={handleNext}
          className="bg-transparent text-gray-950 rounded-full px-4 py-2 hover:bg-transparent"
        >
          <ChevronRight />
        </Button>
      </div>
    </section>
  );
}
