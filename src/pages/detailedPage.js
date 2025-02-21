import React from "react";
import Sections from "../utilities/sections";
import { Box } from "@mui/material";
import { useAppContext } from "../context/appContext";
import DetailsSection from "../components/detailedPage/detailsSection";
import GallerySection from "../components/detailedPage/gallerySection";

const DetailedPage = () => {
  const { selectedPropertDetail } = useAppContext();

  return (
    <div>
      <Sections heading="Header" size={2} />
      {selectedPropertDetail ? ( 
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
            gap: "1.5rem",
            padding: "1rem",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <GallerySection selectedPropertDetail={selectedPropertDetail} />
          <DetailsSection selectedPropertDetail={selectedPropertDetail} />
        </Box>
      ) : (
        <Box sx={{ textAlign: "center", mt: 4 }}>Loading...</Box> 
      )}
      <Sections heading="Footer" size={6} />
    </div>
  );
};

export default DetailedPage;
