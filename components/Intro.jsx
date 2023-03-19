"use client";
import { Chip, Divider, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import profilepic from "../public/images/profilepic.jpg";
import { TypeAnimation } from "react-type-animation";
import axios from "axios";
import { motion } from "framer-motion";
function Intro() {
  const [skills, setSkills] = useState(["Coming Up"]);
  useEffect(() => {
    axios.get(`/api/skills`).then((res) => {
      let { data } = res.data;
      setSkills(data);
    });
  }, []);
  return (
    <motion.div
      className="flex   sm:flex-row flex-col-reverse  justify-center items-center min-h-screen  w-screen  "
      initial={{
        opacity: 0,
        y: -20,
        // scale: [-100],
      }}
      animate={{
        opacity: 1,
        // scale: [0],
        y: 0,
      }}
      transition={{
        duration: 1.0,
      }}
    >
      <motion.div whileHover={{ scale: 1.1 }}>
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
              <motion.div
                initial={{
                  y: -20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
              >
                <Typography variant="overline">Technolgies I know </Typography>
              </motion.div>

              <motion.div
                className="flex flex-wrap justify-between p-2 "
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={
                  {
                    // delay: 1,
                  }
                }
              >
                {skills.length &&
                  skills.map((skill, index) => {
                    return (
                      <motion.div
                        key={index}
                        initial={{
                          opacity: 0,
                          // y: 40,
                        }}
                        animate={{
                          opacity: 1,
                          // y: 0,
                        }}
                        transition={
                          {
                            // duration: 1.5,
                          }
                        }
                        whileHover={{
                          scale: 1.1,
                        }}
                      >
                        <Chip
                          sx={{
                            margin: "2px",
                          }}
                          key={index}
                          label={skill}
                          variant="filled"
                        />
                      </motion.div>
                    );
                  })}
              </motion.div>
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
      </motion.div>

      <div className="flex justify-center ">
        <div className="w-11/12  border-2 opacity-50 " />
      </div>
    </motion.div>
  );
}

export default Intro;
