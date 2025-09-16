"use client";
import { motion } from "motion/react";
import { Highlight } from "@/components/ui/hero-highlight";

export function HeroText() {
  return (
    <>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-7xl font-bold text-black max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto mb-8 "
      >
        <span className="block mb-2">Welcome to the</span>
        <Highlight className="text-black dark:text-white">
          Future of Inventory
        </Highlight>
      </motion.h1>
    </>
  );
}
