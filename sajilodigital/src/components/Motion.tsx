// components/Motion.tsx

import { motion } from "framer-motion";

type MyComponentProps = {
  children: React.ReactNode;
  initial: string;
  animate: string;
  className: string; 
};


export const Motion = ({
  children,
  initial,
  animate,
  className,
}: MyComponentProps) => {
  return (
    <motion.div initial={initial} animate={animate} className={className}>
      {children}
    </motion.div>
  );
};
