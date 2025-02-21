import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const SortAndFilterHeader = () => {
  const filters = [
    "All Bedrooms",
    "Any Neighbourhood",
    "Min Price",
    "Max Price",
    "Sort by",
    "57 Results",
  ];

  return (
    <Box
      sx={{
        width: "100%",
        borderBottom: "1px solid #ddd", 
        pb: 1, 
        pt: 1,
        borderTop: "1px solid #ddd",
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ textAlign: "center" }}
      >
        {filters.map((filter, index) => (
          <Grid item xs={6} sm={4} md={2} key={index}>
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 500,
              }}
            >
              {filter}
              <ArrowDropDownIcon
                sx={{
                  display: index === filters.length - 1 ? "none" : "inline",
                }}
              />
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SortAndFilterHeader;
