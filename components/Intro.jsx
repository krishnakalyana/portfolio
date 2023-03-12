"use client";
import { Chip, Divider, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import profilepic from "../public/images/profilepic.jpg";
import { TypeAnimation } from "react-type-animation";
import axios from "axios";
function Intro() {
  const [skills, setSkills] = useState(["Coming Up..."]);
  useEffect(() => {
    axios.get(`/api/skills`).then((res) => {
      let { data } = res.data;
      setSkills(data);
    });
  }, []);
  return (
    <div className="flex   sm:flex-row flex-col-reverse  justify-center items-center min-h-screen  w-screen  ">
      <Paper
        elevation={4}
        className="flex   sm:flex-row flex-col-reverse items-center p-4 "
      >
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
          <div className=" w-80 p-3 ">
            <Typography variant="overline">Technolgies I know </Typography>
            <div className="flex flex-wrap justify-between p-2 ">
              {skills.length &&
                skills.map((skill, index) => {
                  return (
                    // <div className="  p-2" key={index}>
                    //   {" "}
                    <Chip
                      sx={{
                        margin: "2px",
                      }}
                      key={index}
                      label={skill}
                      variant="filled"
                    />
                    // </div>
                  );
                })}
            </div>
          </div>
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
          />
        </div>
      </Paper>
      <div className="flex justify-center ">
        <div className="w-11/12  border-2 opacity-50 " />
      </div>
    </div>
  );
}

export default Intro;
