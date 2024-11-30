import React, { useState } from 'react';
import {
  Typography,
  Stack,
  TextField,
  MenuItem,
  Button,
  IconButton,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { WEEK_DAYS, CATEGORIES } from '../features/SignUpPage/data';
import FrostedBackground from '../features/FrostedBackground';

const SignUpPage = () => {
  const [services, setServices] = useState([{ name: '', price: '', time: '' }]);
  const [workingDays, setWorkingDays] = useState([]);
  const [workingHours, setWorkingHours] = useState({ from: '', to: '' });

  const handleServiceChange = (index, field, value) => {
    const updatedServices = [...services];
    updatedServices[index][field] = value;
    setServices(updatedServices);
  };

  const addService = () => {
    setServices([...services, { name: '', price: '', time: '' }]);
  };

  const removeService = (index) => {
    setServices(services.filter((_, i) => i !== index));
  };

  const toggleWorkingDay = (day) => {
    if (workingDays.includes(day)) {
      setWorkingDays(workingDays.filter((d) => d !== day));
    } else {
      setWorkingDays([...workingDays, day]);
    }
  };

  return (
    <Stack spacing={2} alignItems="center" sx={{ paddingBottom: 4 }}>
      <FrostedBackground>
        <Typography variant="h3" mb={4}>
          הרשמה לבעלי עסקים
        </Typography>

        {/* Personal Information Section */}
        <Typography variant="h5">Personal Information</Typography>
        <Stack spacing={2} mb={4}>
          <TextField variant="outlined" label="First Name" fullWidth required />
          <TextField variant="outlined" label="Last Name" fullWidth required />
          <TextField variant="outlined" label="Email" fullWidth type="email" required />
          <TextField variant="outlined" label="Password" fullWidth type="password" required />
          <TextField variant="outlined" label="Confirm Password" fullWidth type="password" required />
        </Stack>

        {/* Business Information Section */}
        <Typography variant="h5">Business Information</Typography>
        <Stack spacing={2} mb={4}>
          <TextField variant="outlined" label="Business Name" fullWidth required />
          <TextField variant="outlined" label="Phone Number" fullWidth required />
          <TextField
            select
            variant="outlined"
            label="Category"
            fullWidth
            required
          >
            {CATEGORIES.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            variant="outlined"
            label="Description"
            fullWidth
            multiline
            rows={5}
          />
          <TextField variant="outlined" label="City" fullWidth required />
          <TextField variant="outlined" label="Street" fullWidth required />
          <TextField variant="outlined" label="Number" fullWidth required />
          <TextField variant="outlined" label="Floor" fullWidth />
          <TextField variant="outlined" label="Apt. Number" fullWidth />
        </Stack>

        {/* Working Time Section */}
        <Typography variant="h5">Working Time</Typography>
        <Stack spacing={2} mb={4} alignItems="center">
          <Typography>Choose Working Days</Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            {WEEK_DAYS.map((day) => (
              <FormControlLabel
                key={day}
                control={
                  <Checkbox
                    checked={workingDays.includes(day)}
                    onChange={() => toggleWorkingDay(day)}
                  />
                }
                label={day}
              />
            ))}
          </Stack>
          <Stack spacing={2} alignItems="center">
            <Typography>Choose Working Hours</Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap">
              <TextField
                label="From"
                type="time"
                value={workingHours.from}
                onChange={(e) => setWorkingHours({ ...workingHours, from: e.target.value })}
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                label="To"
                type="time"
                value={workingHours.to}
                onChange={(e) => setWorkingHours({ ...workingHours, to: e.target.value })}
                InputLabelProps={{ shrink: true }}
              />
            </Stack>
          </Stack>
        </Stack>

        {/* Services Section */}
        <Typography variant="h5">Services</Typography>
        <Stack spacing={2} mb={4}>
          {services.map((service, index) => (
            <Stack key={index} direction="row" spacing={2} alignItems="center">
              <TextField
                label="Service Name"
                variant="outlined"
                value={service.name}
                onChange={(e) => handleServiceChange(index, 'name', e.target.value)}
              />
              <TextField
                label="Price"
                variant="outlined"
                type="number"
                value={service.price}
                onChange={(e) => handleServiceChange(index, 'price', e.target.value)}
              />
              <TextField
                label="Time (Minutes)"
                variant="outlined"
                type="number"
                value={service.time}
                onChange={(e) => handleServiceChange(index, 'time', e.target.value)}
              />
              <IconButton onClick={() => removeService(index)}>
                <RemoveCircleIcon />
              </IconButton>
            </Stack>
          ))}
          <Button startIcon={<AddCircleIcon />} onClick={addService} variant="contained">
            Add Service
          </Button>
        </Stack>

        {/* Submit Button */}
        <Stack alignItems="center">
          <Button variant="contained" color="primary" sx={{ width: '200px' }}>
            Submit
          </Button>
        </Stack>
      </FrostedBackground>
    </Stack>
  );
};

export default SignUpPage;
