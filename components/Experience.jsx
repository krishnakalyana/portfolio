"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment/moment";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { motion } from "framer-motion";
function Experience() {
  const [experienceData, setexperienceData] = useState([]);
  const handleExpOpen = (index, open) => {
    let tempExperienceData = [...experienceData];
    tempExperienceData[index].open = !open;
    setexperienceData(tempExperienceData);
  };
  useEffect(() => {
    axios.get("/api/experience").then((res) => {
      let { data } = res.data;
      setexperienceData(data);
    });
  }, []);
  return (
    <>
      <div className=" flex justify-center w-screen  ">
        <div className="  flex  content-center justify-center w-11/12 p-2 ">
          Experience
          <div className="w-full h-0 border-2 mt-3 ml-2 opacity-50" />
        </div>
      </div>

      {experienceData.map((exp, index) => {
        return (
          <motion.div
            key={index}
            className=" flex justify-center w-screen  p-2"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
          >
            <Paper key={index} elevation={4} className="w-11/12 p-4">
              <Accordion
                expanded={exp.open}
                onChange={() => handleExpOpen(index, exp.open)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{exp.designation}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="flex justify-between">
                    <Typography>{exp.designation}</Typography>
                    <Typography variant="overline">{exp.company}</Typography>
                  </div>
                  <div className="flex justify-between">
                    <Typography variant="overline">
                      {`${moment(exp.startDate).format(
                        "MMMM  yyyy"
                      )} to ${moment(exp.endDate).format("MMMM  yyyy")}`}
                    </Typography>
                    <Typography variant="overline">{`(${exp.companyLocation})`}</Typography>
                  </div>
                  <Typography variant="caption">
                    {exp.companyDescription}
                  </Typography>
                  <div>
                    {exp.achievements.length ? (
                      <div className="mt-4">
                        <Typography>Achievements:</Typography>
                        <List dense={true} className="p-4">
                          {exp.achievements.map((item, index) => {
                            return (
                              <ListItem key={index}>
                                <ListItemIcon>
                                  <FiberManualRecordIcon
                                    sx={{
                                      fontSize: "5px",
                                    }}
                                  />
                                </ListItemIcon>
                                <ListItemText
                                  primary={item.achievement}
                                  // secondary={secondary ? 'Secondary text' : null}
                                />
                              </ListItem>
                            );
                          })}
                        </List>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </AccordionDetails>
              </Accordion>
            </Paper>
          </motion.div>
        );
      })}
    </>
  );
}

export default Experience;
