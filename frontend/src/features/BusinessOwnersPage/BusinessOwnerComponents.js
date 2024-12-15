import React from 'react';
import { Facebook, Instagram } from '@mui/icons-material';
import { Box, IconButton, Container, Typography, List, ListItem, ListItemText , Button, Grid} from '@mui/material';

export const BusinessOwnerContainer = ({ children, sx }) => (
    <Container>
        <Box
            sx={{
                textAlign: 'center',
                mt: 4,
                p: 2,
                width: '70%',
                minHeight: '20vh',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                backgroundColor: '#FFFFFF90',
                boxShadow: 2,
                overflowY: 'auto',
                margin: 'auto',
                '&::-webkit-scrollbar': {
                    display: 'none',
                },
                '-ms-overflow-style': 'none',
                'scrollbar-width': 'none',
            }}
        >
            {children}
        </Box>
    </Container>
);

export const SocialMediaIcons = ({ socialsMedia, name }) => (
    <Box display="flex" justifyContent="center" gap={1}>
        {socialsMedia.facebook && (
            <IconButton
                color="primary"
                href={`https://www.facebook.com/${encodeURIComponent(socialsMedia.facebook)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
            >
                <Facebook />
            </IconButton>
        )}

        {socialsMedia.instagram && (
            <IconButton
                color="secondary"
                href={`https://www.instagram.com/${encodeURIComponent(socialsMedia.instagram)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
            >
                <Instagram />
            </IconButton>
        )}
        <IconButton
            href={`https://waze.com/ul?q=${encodeURIComponent(name)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Waze"
        >
            <img
                src="../static/socialMediaIcons/Waze_icon.png"
                alt="Waze"
                style={{ width: 26, height: 26 }}
            />

        </IconButton>
        { socialsMedia.googleMaps && <IconButton
            color="secondery"
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(socialsMedia.googleMaps)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Maps"
        >
            <img
                src="../static/socialMediaIcons/GoogleMapsIcon.png"
                alt="Waze"
                style={{ width: 26, height: 26 }}
            />
        </IconButton>}
    </Box>
)

export const AboutUs = ({ aboutUs }) => (
    <div>
        <Typography variant="h5" gutterBottom>
            About Us
        </Typography>
        <List style={{ direction: 'rtl', textAlign: 'center', padding: 0, margin: 0 }}>
            {aboutUs.map((description, index) => (
                <ListItem key={index} style={{ justifyContent: 'center', paddingTop: 0, paddingBottom: 0 }}>
                    <ListItemText primary={description} style={{ textAlign: 'center', margin: 0, lineHeight: '1.2' }} />
                </ListItem>
            ))}
        </List>
    </div>
);

export const ScheduleButton = ({ onClick }) => (
    <Button
        variant="contained"
        color="primary"
        style={{
            marginTop: '20px',
            fontSize: '16px',
            fontWeight: 'bold',
            textTransform: 'none',
            padding: '10px 20px',
            borderRadius: '30px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
        }}
        onClick={onClick}
    >
        קבע תור
    </Button>
);

export const ImagesGrid = ({ images }) => (
    <Box sx={{ marginTop: '20px' }}>
      <Grid container spacing={2} justifyContent="center">
        {images.map((image, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <img
              src={image}
              alt={""}
              loading="lazy"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '10px',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );


export default SocialMediaIcons;