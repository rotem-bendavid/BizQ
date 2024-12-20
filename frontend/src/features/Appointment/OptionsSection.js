import React, { useEffect, useState } from 'react';
import { Stack, Typography, CircularProgress } from '@mui/material';
import OptionComponent from './OptionComponent';
import { db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';

const OptionsSection = ({ userId, selectedTypeId, onTypeSelect }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const docRef = doc(db, 'businesses', userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          let services = data.services || {};
          services = Object.keys(services).map((key) => services[key]);
          setServices(services);
        } else {
          throw new Error('No services found for this user.');
        }
      } catch (err) {
        console.error('Error fetching services:', err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [userId]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color='error'>שגיאה בטעינת הנתונים: {error}</Typography>;
  }

  return (
    <Stack spacing={2} alignItems='center'>
      <Typography variant='h4' gutterBottom>
        מוצרים לבחירה
      </Typography>
      <Stack
        sx={{
          width: '100%',
          maxHeight: '40vh',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          backgroundColor: '#FFFFFF90',
          overflowY: 'auto',
        }}
        spacing={1}
        px={2}
        py={3}
      >
        {services.map((service, index) => (
          <OptionComponent 
            optionId={index} 
            optionObj={service}
            onSelect={onTypeSelect} // Pass the callback to handle selection
            selectedTypeId={selectedTypeId}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default OptionsSection;
