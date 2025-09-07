"use client"; // only for App Router


// import BackgroundIcons from "@/components/BackgroundIcons";
import CardCarousel from "@/components/CardCarousel";
import { Technologies} from "@/components/TechnologiesMastered";
// import { useState } from "react";

export const  HomeComponent = () => {
//   const [email, setEmail] = useState("");

//   const handleNewsletterSubmit = (e:any) => {
//     e.preventDefault();
//     console.log("Newsletter subscription:", email);
//     setEmail("");
//   };

  return (
    <section>
      <div className="w-full min-h-screen bg-background dark:bg-background-dark text-text dark:text-text-dark overflow-hidden">
        {/* <BackgroundIcons /> */}

        {/* Hero Section */}
        <section
          id="home"
          className="relative w-full mx-auto min-h-screen flex flex-col items-center justify-center"
        >
          <CardCarousel />
          <Technologies/>
        </section>
      </div>
    </section>
  );
}
