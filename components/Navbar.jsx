"use client";
import { Button } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
function Navbar({ swiitchToExp,switchToAbout }) {
  const onButtonClick = () => {
     
    // using Java Script method to get PDF file
    fetch("Krishna-Kalyana-S.pdf").then((response) => {
        response.blob().then((blob) => {
         
            // Creating new object of PDF file
            const fileURL =
                window.URL.createObjectURL(blob);
                 
            // Setting various property values
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "Krishna-Kalyana.pdf";
            alink.click();
        })
      })
  }
  return (
    <motion.div
      className=" flex justify-center w-screen sticky "
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
      <div className="w-11/12  flex flex-row-reverse " >
       
        <Button onClick={onButtonClick}>Resume</Button>
        <Button onClick={()=>switchToAbout()}>About Me</Button>
        <Button onClick={() => swiitchToExp()}>Experience </Button>
       
      </div>
    </motion.div>
  );
}

export default Navbar;
