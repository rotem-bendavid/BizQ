import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import {
  Stack,
  Typography,
  CircularProgress,
  Card,
  CardContent,
  Button,
  TextField,
  IconButton,
} from '@mui/material';
import FrostedBackground from '../features/FrostedBackground';
import SearchIcon from '@mui/icons-material/Search';
import { getLocationByIP } from '../api/Location';

const FilteredBusinessesPage = () => {
  const { category } = useParams();
  const history = useHistory();
  const [businesses, setBusinesses] = useState([]);
  const [filteredBusinesses, setFilteredBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [userCity, setUserCity] = useState('');

  useEffect(() => {
    const fetchLocationAndBusinesses = async () => {
      setLoading(true);

      try {
        const location = await getLocationByIP();
        const city = location?.city || 'Unknown';
        setUserCity(city);

        const businessesRef = collection(db, 'businesses');
        let q;

        if (category && category !== 'all') {
          q = query(businessesRef, where('category', '==', category));
        } else {
          q = query(businessesRef); // Get all businesses if "all" category
        }

        const querySnapshot = await getDocs(q);
        const fetchedBusinesses = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Apply location filtering only if a specific category is selected
        const locationFilteredBusinesses =
          category === 'all'
            ? fetchedBusinesses // Show all businesses without filtering by location
            : fetchedBusinesses.filter(
                (business) =>
                  business.address?.city === city || business.address?.city === 'Unknown'
              );
              console.log("")
        setBusinesses(locationFilteredBusinesses);
        setFilteredBusinesses(locationFilteredBusinesses);
      } catch (error) {
        console.error('Error fetching businesses or location:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLocationAndBusinesses();
  }, [category]);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = businesses.filter(
      (business) =>
        business.businessName.toLowerCase().includes(value) ||
        (business.description && business.description.toLowerCase().includes(value))
    );
    setFilteredBusinesses(filtered);
  };

  const navigateToBusiness = (id) => {
    history.push(`/BusinessOwner/${id}`);
  };

  if (loading) return <CircularProgress sx={{ margin: 'auto' }} />;

  return (
    <Stack alignItems="center"  >
      <FrostedBackground>
        <Stack spacing={3} >
          {/* Show user city */}
          {category !== 'all' && (
            <Typography variant="h6" align="center" sx={{ marginBottom: '10px' }}>
              Showing results for your city: {userCity}
            </Typography>
          )}

          {/* Search Bar */}
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{
              backgroundColor: 'white',
              borderRadius: '20px',
              padding: '10px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              marginBottom: '20px',
            }}
          >
            <TextField
              fullWidth
              placeholder="חפש לפי שם או תיאור"
              value={searchTerm}
              onChange={handleSearch}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '20px',
                },
              }}
            />
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Stack>

          {/* Businesses List */}
          <Stack
            spacing={3}
            sx={{
              height: '100%',
              overflowY: 'auto',
              padding: '10px',
              borderRadius: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              '&::-webkit-scrollbar': {
                width: '8px',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#ccc',
                borderRadius: '4px',
              },
              '&::-webkit-scrollbar-thumb:hover': {
                backgroundColor: '#aaa',
              },
            }}
          >
            {filteredBusinesses.length > 0 ? (
              filteredBusinesses.map((business) => (
                <Card
                  key={business.id}
                  onClick={() => navigateToBusiness(business.id)}
                  sx={{
                    borderRadius: '15px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                    cursor: 'pointer',
                    '&:hover': {
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h6">{business.businessName}</Typography>
                    <Typography>
                      {business.description || 'No description available.'}
                    </Typography>
                    <Typography>{`City: ${business.address?.city || 'N/A'}`}</Typography>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Typography variant="body1" align="center">
                לא נמצאו עסקים תואמים
              </Typography>
            )}
          </Stack>
        </Stack>
      </FrostedBackground>
    </Stack>
  );
};

export default FilteredBusinessesPage;
