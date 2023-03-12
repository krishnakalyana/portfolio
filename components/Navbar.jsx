"use client";
import { Button } from "@mui/material";
import React from "react";

function Navbar() {
  return (
    <div className=" flex justify-center w-screen ">
      <div className="w-11/12  flex flex-row-reverse ">
        <Button>About Me</Button>
        <Button>Experience </Button>
      </div>
    </div>
  );
}

export default Navbar;
