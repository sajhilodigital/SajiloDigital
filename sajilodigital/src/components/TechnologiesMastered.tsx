import { motion } from "framer-motion";
import {
    FaNodeJs,
    FaReact,
    FaWordpress
} from "react-icons/fa";
import {
    SiAdobeaftereffects,
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiAdobepremierepro,
    SiMongodb,
    SiNextdotjs,
    SiPostgresql,
    SiTailwindcss,
    SiTypescript
} from "react-icons/si";
import { FadeInSection } from "./FadeInSection";

export const Technologies = () => {
  return (
    <>
      {/* Technologies Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className=" mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-16">
            Technologies We{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Master
            </span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <FaReact />, name: "React" },
              { icon: <SiNextdotjs />, name: "Next.js" },
              { icon: <SiTailwindcss />, name: "Tailwind CSS" },
              { icon: <SiTypescript />, name: "TypeScript" },
              { icon: <FaNodeJs />, name: "Node.js" },
              { icon: <SiMongodb />, name: "MongoDB" },
              { icon: <FaWordpress />, name: "WordPress" },
              { icon: <SiPostgresql />, name: "PostgreSQL" },
              { icon: <SiAdobeillustrator />, name: "Illustrator" },
              { icon: <SiAdobephotoshop />, name: "Photoshop" },
              { icon: <SiAdobeaftereffects />, name: "After Effects" },
              { icon: <SiAdobepremierepro />, name: "Premiere Pro" },
            ].map((tech, index) => (
                <div
                  key={index}
                   className="flex flex-col items-center justify-center p-6 bg-background-light dark:bg-background-light-dark rounded-xl hover:transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-4xl mb-3 text-primary">{tech.icon}</div>
                  <span className="text-text-light-secondary dark:text-text-dark-secondary">
                    {tech.name}
                  </span>
                </div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};
