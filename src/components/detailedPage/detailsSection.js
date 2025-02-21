import React from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  Link,
  IconButton,
  Avatar,
} from "@mui/material";
import { FavoriteBorder, Share } from "@mui/icons-material";

const DetailsSection = (props) => {
  const { selectedPropertDetail } = props;
  return (
    <Grid container spacing={2}>
      {/* Top Icons */}
      <Grid item xs={12}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end", 
            alignItems: "center",
            borderBottom: "2px solid #ccc",
          }}
        >
          <IconButton>
            <Share />
          </IconButton>
          <IconButton>
            <FavoriteBorder />
          </IconButton>
        </Box>
      </Grid>

      {/* Property Details */}
      <Grid item xs={12}>
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <Typography variant="h4" color="text.primary">
              €{selectedPropertDetail.attributes.price}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" color="text.secondary">
              {selectedPropertDetail.attributes.bedroom} bed | 58 sqm
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" sx={{ fontSize: "15px" }}>
          {selectedPropertDetail.attributes.title}
        </Typography>
        <Link
          href="#contact"
          underline="always"
          sx={{ color: "#D66D3C", mt: 1, display: "inline-block" }}
        >
          Please contact us
        </Link>
        <Button
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: "#333333",
            color: "#fff",
            px: 4,
            width: "90%",
          }}
        >
          Contact Agent
        </Button>
      </Grid>

      {/* Facts and Features */}
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ borderBottom: "2px solid #ccc", mb: 2 }}>
          Facts & Features
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>Neighbourhood:</strong> Fontvieille
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>Price per sqm:</strong> €37,931
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>Brochure:</strong>{" "}
          <Link
            href="/path/to/brochure.pdf"
            sx={{ color: "grey" }}
            target="_blank"
            rel="noopener"
          >
            Download Brochure
          </Link>
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>Floor plan:</strong>{" "}
          <Link
            href="/path/to/floorplan.pdf"
            sx={{ color: "grey" }}
            target="_blank"
            rel="noopener"
          >
            View Floorplan
          </Link>
        </Typography>
      </Grid>

      {/* Agent Details */}
      <Grid item xs={12}>
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <Avatar
              src={
                selectedPropertDetail.attributes.crm_negotiator_id.profile_img
              }
              alt="Reka Demeter"
              sx={{ width: 56, height: 56 }}
            />
          </Grid>
          <Grid item>
            <Typography variant="body1" color="text.primary">
              <strong>Reka Demeter</strong>
            </Typography>
            <Typography variant="body2">Real Estate Broker</Typography>
            <Grid container alignItems="center" spacing={1} sx={{ mt: 1 }}>
              <Grid item>
                <Typography sx={{ color: "grey" }}>+377 93 25 86 66</Typography>
              </Grid>
              <Grid item>
                <span>|</span>
              </Grid>
              <Grid item>
                <Link
                  href="mailto:example@example.com"
                  sx={{ color: "grey", textDecoration: "underline" }}
                >
                  Email
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Map */}
      <Grid item xs={12}>
        <Box
          sx={{
            backgroundColor: "#eaeaea",
            height: "90px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 2,
          }}
        >
          Map Section
        </Box>
      </Grid>
    </Grid>
  );
};

export default DetailsSection;
