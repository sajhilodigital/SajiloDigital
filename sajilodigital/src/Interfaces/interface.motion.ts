// src/types/motion.d.ts
import { HTMLMotionProps } from "framer-motion";

declare module "framer-motion" {
  export type MotionDivProps = HTMLMotionProps<"div">;
}


export type MyComponentProps = {
  children: React.ReactNode;
  initial: string;
  animate: string;
  className: string;
};
