import React from "react";
import Sections from "../utilities/sections";
import { Box, Grid } from "@mui/material";
import { useAppContext } from "../context/appContext";
import DetailsSection from "../components/detailedPage/detailsSection";
import GallerySection from "../components/detailedPage/gallerySection";

const DetailedPage = () => {
  const { selectedPropertDetail } = useAppContext();
  return (
    <div>
      <Sections heading="Header" size={2} />
      {selectedPropertDetail ? (
        <Grid
          container
          sx={{
            padding: "2%",
            columnGap: "2%",
          }}
        >
          <Grid item xs={12} md={7}>
            <GallerySection selectedPropertDetail={selectedPropertDetail} />
          </Grid>
          <Grid item xs={12} md={4.5}>
            <DetailsSection selectedPropertDetail={selectedPropertDetail} />
          </Grid>
        </Grid>
      ) : (
        <Box sx={{ textAlign: "center", mt: 4 }}>Loading...</Box>
      )}
      <Sections heading="Footer" size={6} />
    </div>
  );
};

export default DetailedPage;
