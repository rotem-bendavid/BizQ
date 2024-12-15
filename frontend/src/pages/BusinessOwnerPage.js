/** 
 * TO DO LIST: (MISS HERE)
 * 
 * ADD IN THE REGISTERATION PAGE THE SOCIALS MEDIA NAMES
*/

import { Box, Typography, Divider, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { SocialMediaIcons, BusinessOwnerContainer, ScheduleButton, ImagesGrid } from '../features/BusinessOwnersPage/BusinessOwnerComponents';
import { doc, getDoc } from 'firebase/firestore';
import db from '../firebase';


const BusinessOwnerPage = ({ userId }) => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchBusinessData = async () => {
      try {
        const docRef = doc(db, 'businesses', userId || id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setData(data);
        } else {
          setError('לא נמצא בעל עסק');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBusinessData();
  }, [userId, id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" align="center" color="error" mt={4}>
        שגיאה בטעינת הנתונים: {error}
      </Typography>
    );
  }

  return (
    <BusinessOwnerContainer sx={{ width: '80%' }}>
      {/* Business Owner Name */}
      <Typography variant="h4" gutterBottom>
        {data.businessName}
      </Typography>

      {/* Divider */}
      <Divider sx={{ my: 1 }} />

      {/* Location */}
      <Typography variant="body1" color="textSecondary" gutterBottom>
        {data.address.city +',' + data.address.street +',' + data.address.houseNumber}
      </Typography>

      {/* Social Media */}
      <SocialMediaIcons socialsMedia={data.socialsMedia || {}} name={data.name} />

      {/* Divider */}
      <Divider sx={{ my: 1 }} />

      {/* About Us */}
      <div>
        <Typography variant="h5" gutterBottom>
          אודות
        </Typography>
        <Typography variant="body1" style={{ textAlign: 'center', marginTop: '10px' }}>
          {data.description || 'אין תיאור'}
        </Typography>
      </div>

      {/* Schedule Button */}
      <ScheduleButton
        onClick={() => history.push('/appointment', { userId: id })}
      />

      {/* Images */}
      <ImagesGrid images={data.images || []} />
    </BusinessOwnerContainer>
    
  );
};

export default BusinessOwnerPage;