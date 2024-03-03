import React from "react";
import { motion } from "framer-motion";

type LinkProps = {
  href: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
};

const Link: React.FC<LinkProps> = ({ href, target, rel, children }) => {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.3 }}
      className="flex pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500"
      href={href}
      target={target}
      rel={rel}
    >
      {children}
    </motion.a>
  );
};

export default Link;
