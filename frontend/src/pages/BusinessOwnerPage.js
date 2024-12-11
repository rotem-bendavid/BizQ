/** 
 * TO DO LIST: (MISS HERE)
 * BusinessOwners table
 * 
 * BusinessOwners functions (getBusinessOwners,setBusinessOwners,isBusinessOwners)
 * 
 * DELETE Url address from the insta and facebook (also, add it to data)
 *    also, add the null feature (from signup form)
 * 
 * ADD navigation to next page while clicking on "schedule"
 * 
 * ALLOWS DYNAMIC LINKS TO SOCIAL MEDIA DATABASE FROM BUSINESS OWNERS SIGN IN REGISTERATION
 * 
*/

import { Box, Typography, Divider, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { SocialMediaIcons, BusinessOwnerContainer, AboutUs, ScheduleButton, ImagesGrid } from '../features/BusinessOwnersPage/BusinessOwnerComponents';
import { DATA } from '../features/BusinessOwnersPage/BusinessOwnersData';


const BusinessOwnerPage = () => {
  const { id } = useParams(); // Get BusinessOwners ID from URL
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const history = useHistory(); 

  useEffect(() => {
    const ownerId = parseInt(id, 10);
    const ownerData = DATA.find((owner) => owner.id === ownerId);

    setTimeout(() => {
      setData(ownerData || null);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (!data) {
    return (
      <Typography variant="h6" align="center" mt={4}>
        Business Owner not found.
      </Typography>
    );

  }

  const handleScheduleAppointment = () => {
    history.push(`/appointment/${id}`); // Navigate to the desired route
  };


  return (
    <BusinessOwnerContainer sx={{ width: '80%' }}>
      {/* Business Owner Name */}
      <Typography variant="h4" gutterBottom>
        {data.name}
      </Typography>

      {/* Divider */}
      <Divider sx={{ my: 1 }} />

      {/* Location */}
      <Typography variant="body1" color="textSecondary" gutterBottom>
        {data.location}
      </Typography>


      {/* Social Media */}
      <SocialMediaIcons socialMedia={data.socialMedia} name={data.name} />

      {/* Divider */}
      <Divider sx={{ my: 1 }} />

      {/* About Us */}
      <AboutUs aboutUs={data.aboutUs} />

      {/* Schedule Button */}
      <ScheduleButton onClick={handleScheduleAppointment} />




      {/* Images */}
      <ImagesGrid images={data.images} />

    </BusinessOwnerContainer>
  );
};

/*
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/BusinessOwners/${id}`); // Replace the id endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const ownerData = await response.json();
        setData(ownerData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);
*/



export default BusinessOwnerPage;
