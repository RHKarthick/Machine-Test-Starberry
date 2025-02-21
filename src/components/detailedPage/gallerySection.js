import React, { useState } from "react";
import { Grid, Card, CardMedia } from "@mui/material";
import ImageViewer from "react-simple-image-viewer";

const GallerySection = ({ selectedPropertDetail }) => {
  const images = selectedPropertDetail?.attributes?.images || [];
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openImageViewer = (index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  };

  const closeImageViewer = () => {
    setIsViewerOpen(false);
  };

  return (
    <>
      <Grid container direction="column" spacing={2}>
        {/* Main Image */}
        {images.length > 0 && (
          <Grid item>
            <Card sx={{ borderRadius: 2, overflow: "hidden" }}>
              <CardMedia
                component="img"
                image={images[0].url}
                alt="Main view of the property"
                sx={{ width: "100%", height: "auto", cursor: "pointer" }}
                onClick={() => openImageViewer(0)}
              />
            </Card>
          </Grid>
        )}

        {/* Other Images */}
        <Grid item container spacing={1}>
          {images.slice(1).map((image, index) => (
            <Grid item xs={12} sm={6} key={index + 1}>
              <CardMedia
                component="img"
                image={image.url}
                alt={`Property Image ${index + 2}`}
                sx={{ borderRadius: 1, width: "100%", cursor: "pointer" }}
                onClick={() => openImageViewer(index + 1)}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Image Viewer Modal */}
      {isViewerOpen && (
        <ImageViewer
          src={images.map((img) => img.url)}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </>
  );
};

export default GallerySection;
