import React, { useState } from "react";
import {Typography, Box } from "@mui/material";


const Sections = (props) => {
  //Used for the header and footer sections
 const {heading,size} = props;
  return (
    <Box sx={{ py: size, textAlign: "center", bgcolor: "#f5f5f5"}}>
      <Typography variant="h4">{heading}</Typography>
    </Box>
  );
};

export default Sections;
