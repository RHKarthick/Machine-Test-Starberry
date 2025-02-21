import React from "react";
import { Typography, CircularProgress, Box } from "@mui/material";
import Sections from "../utilities/sections";
import { useAppContext } from "../context/appContext";
import SortAndFilterHeader from "../components/propertyPage/sortAndFilterHeader";
import PropertyList from "../components/propertyPage/propertyList";

const PropertyPage = () => {
  const { loading, handleClickCards, properties } = useAppContext();

  return (
    <div>
      <Sections heading="Header" size={2} />
      <Typography variant="h5" align="center" sx={{ my: 4 }}>
        Property for Sales
      </Typography>
      <SortAndFilterHeader />
      {loading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : (
        <PropertyList
          properties={properties}
          handleClickCards={handleClickCards}
        />
      )}
      <Sections heading="Footer" size={6} />
    </div>
  );
};

export default PropertyPage;
