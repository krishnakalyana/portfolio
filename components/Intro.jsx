"use client";
import { Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import profilepic from "../public/images/profilepic.jpg";
import { TypeAnimation } from "react-type-animation";
function Intro() {
  return (
    <div className="flex   sm:flex-row flex-col-reverse  justify-center items-center h-screen w-screen ">
      <div className="">
        <TypeAnimation
          sequence={[
            "Hi I'm",
            2000,
            "Hi I'm, Krishna",
            1000,
            "Hi I'm, Krishna Kalyana",
            700,
          ]}
          wrapper="h2"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "2rem" }}
        />
      </div>
      <div className="">
        <Image
          // loader={myLoader}
          src={profilepic}
          alt="Picture of me"
          style={{
            width: "100%",
            height: "20rem",
            borderRadius: "50%",
            opacity: "0.8",
          }}
          // width={20}
          // height={20}
          // layout="responsive"
        />
      </div>
    </div>
  );
}

export default Intro;
