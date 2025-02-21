import React from "react";
import {
  Grid,
  Stack,
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
      <Grid item xs={12}>
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          borderBottom="2px solid #ccc"
        >
          <IconButton>
            <Share />
          </IconButton>
          <IconButton>
            <FavoriteBorder />
          </IconButton>
        </Stack>
      </Grid>

      <Grid item xs={12}>
        <Stack spacing={1}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="h4" color="text.primary">
              €{selectedPropertDetail.attributes.price}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {selectedPropertDetail.attributes.bedroom} bed | 58 sqm
            </Typography>
          </Stack>
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
        </Stack>
      </Grid>

      <Grid item xs={12}>
        <Stack spacing={1}>
          <Typography variant="h6" sx={{ borderBottom: "2px solid #ccc", mb: 2 }}>
            Facts & Features
          </Typography>
          <Typography variant="body2">
            <strong>Neighbourhood:</strong> Fontvieille
          </Typography>
          <Typography variant="body2">
            <strong>Price per sqm:</strong> €37,931
          </Typography>
          <Typography variant="body2">
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
          <Typography variant="body2">
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
        </Stack>
      </Grid>

      <Grid item xs={12}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar
            src={selectedPropertDetail.attributes.crm_negotiator_id.profile_img}
            alt="Reka Demeter"
            sx={{ width: 56, height: 56 }}
          />
          <Stack spacing={0.5}>
            <Typography variant="body1" color="text.primary">
              <strong>Reka Demeter</strong>
            </Typography>
            <Typography variant="body2">Real Estate Broker</Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography sx={{ color: "grey" }}>+377 93 25 86 66</Typography>
              <span>|</span>
              <Link
                href="mailto:example@example.com"
                sx={{ color: "grey", textDecoration: "underline" }}
              >
                Email
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Grid>

      <Grid item xs={12}>
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            backgroundColor: "#eaeaea",
            height: "90px",
            borderRadius: 2,
          }}
        >
          Map Section
        </Stack>
      </Grid>
    </Grid>
  );
};

export default DetailsSection;
