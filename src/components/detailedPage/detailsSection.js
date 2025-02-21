import React from "react";
import {
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
    <Box sx={{ display: "grid", gap: "1rem" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "2px solid #ccc",              
        }}
      >
        <Box></Box>
        <Box>
          <IconButton>
            <Share />
          </IconButton>
          <IconButton>
            <FavoriteBorder />
          </IconButton>
        </Box>
      </Box>


      {/* Property Details */}
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography variant="h4" color="text.primary">
            €{selectedPropertDetail.attributes.price}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {selectedPropertDetail.attributes.bedroom} bed | 58 sqm
          </Typography>
        </Box>
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
        <Box>
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
        </Box>
      </Box>

     {/* Facts and Features */}
      <Box>
        <Typography
          variant="h6"
          sx={{
            borderBottom: "2px solid #ccc",
            mb: 2,
          }}
        >
          Facts & Features
        </Typography>
        <Box>
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
        </Box>
      </Box>

      {/* Agent Details */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}>
        <Avatar
          src={selectedPropertDetail.attributes.crm_negotiator_id.profile_img}
          alt="Reka Demeter"
          sx={{ width: 56, height: 56 }}
        />
        <Box>
          <Typography variant="body1" color="text.primary">
            <strong>Reka Demeter</strong>
          </Typography>
          <Typography variant="body2">Real Estate Broker</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
            <Typography sx={{ color: "grey" }}>+377 93 25 86 66</Typography>
            <span>|</span>
            <Link
              href="mailto:example@example.com"
              sx={{ color: "grey", textDecoration: "underline" }}
            >
              Email
            </Link>
          </Box>
        </Box>
      </Box>

      {/* Map */}
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
    </Box>
  );
};

export default DetailsSection;
