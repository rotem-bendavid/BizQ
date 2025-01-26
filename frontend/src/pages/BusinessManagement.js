import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Stack,
  TextField,
  Button,
  Typography,
  CircularProgress,
} from '@mui/material';
import FrostedBackground from '../features/Generics/FrostedBackground';
import { getAuth, signOut } from 'firebase/auth';
import { db } from '../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const BusinessManagement = () => {
  const history = useHistory();
  const [business, setBusiness] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchAuthAndBusiness = async () => {
      setLoading(true);
      try {
        const auth = getAuth();
        const currentUser = auth.currentUser;

        if (!currentUser) {
          history.replace('/Login');
          return;
        }

        const uid = currentUser.uid;
        setUserId(uid);

        const docRef = doc(db, 'businesses', uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setBusiness(docSnap.data());
          setFormData(docSnap.data());
        } else {
          history.replace('/Login');
        }
      } catch (error) {
        console.error('Error fetching business details:', error);
        history.replace('/Login');
      } finally {
        setLoading(false);
      }
    };

    fetchAuthAndBusiness();
  }, [history]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveChanges = async () => {
    try {
      const docRef = doc(db, 'businesses', userId);
      await updateDoc(docRef, formData);
      console.log('Business details updated successfully!');
      setEditing(false);
    } catch (error) {
      console.error('Error updating business details:', error);
    }
  };

  const handleLogOut = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      history.replace('/Login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  if (loading) return <CircularProgress sx={{ margin: 'auto' }} />;

  if (!business) {
    return (
      <Typography variant="h6" align="center">
        No business data found. Please check your login credentials.
      </Typography>
    );
  }

  return (
    <Stack alignItems="center" sx={{ height: '100%', padding: '20px' }}>
      <FrostedBackground>
        <Stack spacing={3} sx={{ padding: '20px', width: '100%', maxWidth: '800px' }}>
          <Typography variant="h4" align="center">
            Business Management
          </Typography>

          {/* Editable Form */}
          <Stack spacing={2}>
            <TextField
              name="businessName"
              label="Business Name"
              value={formData.businessName || ''}
              onChange={handleInputChange}
              disabled={!editing}
              fullWidth
            />
            <TextField
              name="description"
              label="Description"
              value={formData.description || ''}
              onChange={handleInputChange}
              disabled={!editing}
              fullWidth
            />
            <TextField
              name="city"
              label="City"
              value={formData.address?.city || ''}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  address: { ...formData.address, city: e.target.value },
                })
              }
              disabled={!editing}
              fullWidth
            />
            <TextField
              name="street"
              label="Street"
              value={formData.address?.street || ''}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  address: { ...formData.address, street: e.target.value },
                })
              }
              disabled={!editing}
              fullWidth
            />
            <TextField
              name="phone"
              label="Phone"
              value={formData.phone || ''}
              onChange={handleInputChange}
              disabled={!editing}
              fullWidth
            />
          </Stack>

          {/* Buttons */}
          <Stack direction="row" spacing={2} justifyContent="center">
            {editing ? (
              <Button variant="contained" onClick={handleSaveChanges}>
                Save Changes
              </Button>
            ) : (
              <Button variant="contained" onClick={() => setEditing(true)}>
                Edit Details
              </Button>
            )}
            <Button variant="outlined" onClick={handleLogOut}>
              Log Out
            </Button>
          </Stack>
        </Stack>
      </FrostedBackground>
    </Stack>
  );
};

export default BusinessManagement;
