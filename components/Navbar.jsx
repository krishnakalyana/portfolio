"use client";
import { Button } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
function Navbar({ swiitchToExp }) {
  return (
    <motion.div
      className=" flex justify-center w-screen "
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.0,
      }}
    >
      <div className="w-11/12  flex flex-row-reverse ">
        <Button>Resume</Button>
        <Button>About Me</Button>
        <Button onClick={() => swiitchToExp()}>Experience </Button>
      </div>
    </motion.div>
  );
}

export default Navbar;
