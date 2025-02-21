import React from "react";
import {
  Grid2,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";
import Sections from "../utilities/sections";
import { useAppContext } from "../context/appContext";
import SortAndFilterHeader from "../components/propertyPage/sortAndFilterHeader";

const PropertyPage = () => {
  const { loading, handleClickCards, properties } = useAppContext();

  return (
    <div>
      {/* Header */}
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
        <Box sx={{ flexGrow: 1 , pt: 2}}>
          <Grid2
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {properties.map((property, index) => (
              <Grid2 key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                <Card
                  sx={{
                    maxWidth: 400,
                    mx: "auto",
                    textAlign: "center",
                    backgroundColor: "transparent",
                    boxShadow: "none",
                  }}
                  onClick={() => handleClickCards(property.attributes.crm_id)}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={property.attributes.thumbnail}
                    alt={property.attributes.title}
                  />

                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant="h6">
                      {property.attributes.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        height: "40px", 
                        overflow: "hidden",
                      }}
                    >
                      {property.attributes.slug}
                    </Typography>
                    <Typography variant="h6" color="black" sx={{ mt: 1 }}>
                      €{property.attributes.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid2>
            ))}
          </Grid2>
        </Box>
      )}
      <Sections heading="Footer" size={6} />
    </div>
  );
};

export default PropertyPage;
