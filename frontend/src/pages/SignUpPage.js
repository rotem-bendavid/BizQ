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
  CircularProgress,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { WEEK_DAYS, CATEGORIES } from '../features/SignUpPage/data';
import FrostedBackground from '../features/FrostedBackground';
import { registerBusiness } from '../api/RegisterApi';

const SignUpPage = () => {
  const [services, setServices] = useState([{ name: '', price: '', time: '' }]);
  const [workingDays, setWorkingDays] = useState([]);
  const [workingHours, setWorkingHours] = useState({ from: '', to: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [businessData, setBusinessData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    businessName: '',
    phone: '',
    category: '',
    description: '',
    city: '',
    street: '',
    houseNumber: '',
    floor: '',
    apartment: '',
    instagram: '',
    facebook: '',
  });

  const handleInputChange = (field, value) => {
    setBusinessData({ ...businessData, [field]: value });
  };

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

  const handleRegister = async () => {
    // Validate required fields
    const requiredFields = [
      { field: 'firstName', label: 'שם פרטי' },
      { field: 'lastName', label: 'שם משפחה' },
      { field: 'email', label: 'אימייל' },
      { field: 'password', label: 'סיסמא' },
      { field: 'confirmPassword', label: 'אימות סיסמא' },
      { field: 'businessName', label: 'שם העסק' },
      { field: 'phone', label: 'מספר טלפון' },
      { field: 'category', label: 'קטגוריה' },
      { field: 'city', label: 'עיר' },
      { field: 'street', label: 'רחוב' },
      { field: 'houseNumber', label: 'מספר בית' },
    ];

    const missingFields = requiredFields.filter(
      ({ field }) => !businessData[field]?.trim()
    );

    if (missingFields.length > 0) {
      alert(`אנא מלאו את הערך בשדה ${missingFields[0].label} `);
      return;
    }

    // Additional validation: passwords match
    if (businessData.password !== businessData.confirmPassword) {
      alert('הסיסמאות אינן זהות');
      return;
    }
    setIsLoading(true);
    // Proceed with form submission
    const dataToSubmit = {
      ...businessData,
      address: {
        city: businessData.city,
        street: businessData.street,
        houseNumber: businessData.houseNumber,
        floor: businessData.floor,
        apartment: businessData.apartment,
      },
      services,
      workingDays,
      workingHours,
    };

    try {
      const response = await registerBusiness(dataToSubmit);

      if (response.success) {
        localStorage.setItem('userId', response?.data?.userId);
        window.location.href = '/';
      }
    } catch (error) {
      console.error(error);
      alert('קרתה שגיאה בתהליך ההרשמה נסו שוב');
    }
    setIsLoading(false);
  };

  return (
    <Stack spacing={2} alignItems='center' sx={{ paddingBottom: 4 }}>
      <FrostedBackground>
        <Typography variant='h3' mb={4}>
          הרשמה לבעלי עסקים
        </Typography>

        {/* Personal Information Section */}
        <Typography variant='h5'>פרטים אישיים</Typography>
        <Stack spacing={2} mb={4}>
          <TextField
            variant='outlined'
            label='שם פרטי'
            fullWidth
            required
            onChange={(e) => handleInputChange('firstName', e.target.value)}
          />
          <TextField
            variant='outlined'
            label='שם משפחה'
            fullWidth
            required
            onChange={(e) => handleInputChange('lastName', e.target.value)}
          />
          <TextField
            variant='outlined'
            label='אימייל'
            fullWidth
            type='email'
            required
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
          <TextField
            variant='outlined'
            label='סיסמא'
            fullWidth
            type='password'
            required
            onChange={(e) => handleInputChange('password', e.target.value)}
          />
          <TextField
            variant='outlined'
            label='אימות סיסמא'
            fullWidth
            type='password'
            required
            onChange={(e) =>
              handleInputChange('confirmPassword', e.target.value)
            }
          />
        </Stack>

        {/* Business Information Section */}
        <Typography variant='h5'>פרטי העסק</Typography>
        <Stack spacing={2} mb={4}>
          <TextField
            variant='outlined'
            label='שם העסק'
            fullWidth
            required
            onChange={(e) => handleInputChange('businessName', e.target.value)}
          />
          <TextField
            variant='outlined'
            label='מספר טלפון'
            fullWidth
            required
            onChange={(e) => handleInputChange('phone', e.target.value)}
          />
          <TextField
            select
            variant='outlined'
            label='קטוגוריה'
            fullWidth
            required
            onChange={(e) => handleInputChange('category', e.target.value)}
          >
            {CATEGORIES.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            variant='outlined'
            label='תיאור העסק'
            fullWidth
            multiline
            rows={5}
            onChange={(e) => handleInputChange('description', e.target.value)}
          />
          <TextField
            variant='outlined'
            label='עיר'
            fullWidth
            required
            onChange={(e) => handleInputChange('city', e.target.value)}
          />
          <TextField
            variant='outlined'
            label='רחוב'
            fullWidth
            required
            onChange={(e) => handleInputChange('street', e.target.value)}
          />
          <TextField
            variant='outlined'
            label='מספר בית'
            fullWidth
            required
            onChange={(e) => handleInputChange('houseNumber', e.target.value)}
          />
          <TextField
            variant='outlined'
            label='קומה'
            fullWidth
            onChange={(e) => handleInputChange('floor', e.target.value)}
          />
          <TextField
            variant='outlined'
            label='מספר דירה'
            fullWidth
            onChange={(e) => handleInputChange('apartment', e.target.value)}
          />
          <TextField
            variant="outlined"
            label="Instagram account name"
            fullWidth
            onChange={(e) => handleInputChange('instagram', e.target.value)}
          />
          <TextField
            variant="outlined"
            label="Facebook account name"
            fullWidth
            onChange={(e) => handleInputChange('facebook', e.target.value)}
          />
        </Stack>

        {/* Working Time Section */}
        <Typography variant='h5'>שעות עבודה</Typography>
        <Stack spacing={2} mb={4} alignItems='center'>
          <Typography>בחר ימי עבודה</Typography>
          <Stack direction='row' spacing={2} flexWrap='wrap'>
            {WEEK_DAYS.map((day, index) => (
              <FormControlLabel
                key={day}
                control={
                  <Checkbox
                    checked={workingDays.includes(index)}
                    onChange={() => toggleWorkingDay(index)}
                  />
                }
                label={day}
              />
            ))}
          </Stack>
          <Stack spacing={2} alignItems='center'>
            <Typography>בחר שעות עבודה</Typography>
            <Stack direction='row' spacing={2} flexWrap='wrap'>
              <TextField
                label='עד שעה'
                type='time'
                value={workingHours.to}
                onChange={(e) =>
                  setWorkingHours({ ...workingHours, to: e.target.value })
                }
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                label='משעה'
                type='time'
                value={workingHours.from}
                onChange={(e) =>
                  setWorkingHours({ ...workingHours, from: e.target.value })
                }
                InputLabelProps={{ shrink: true }}
              />
            </Stack>
          </Stack>
        </Stack>

        {/* Services Section */}
        <Typography variant='h5'>שירותים</Typography>
        <Stack spacing={2} mb={4}>
          {services.map((service, index) => (
            <Stack key={index} direction='row' spacing={2} alignItems='center'>
              <TextField
                label='שם טיפול'
                variant='outlined'
                value={service.name}
                onChange={(e) =>
                  handleServiceChange(index, 'name', e.target.value)
                }
              />
              <TextField
                label='מחיר'
                variant='outlined'
                type='number'
                value={service.price}
                onChange={(e) =>
                  handleServiceChange(index, 'price', e.target.value)
                }
              />
              <TextField
                label='זמן בדקות'
                variant='outlined'
                type='number'
                value={service.time}
                onChange={(e) =>
                  handleServiceChange(index, 'time', e.target.value)
                }
              />
              <IconButton onClick={() => removeService(index)}>
                <RemoveCircleIcon />
              </IconButton>
            </Stack>
          ))}
          <Button
            startIcon={<AddCircleIcon />}
            onClick={addService}
            variant='contained'
          >
            הוספת טיפול
          </Button>
        </Stack>

        {/* Submit Button */}
        <Stack alignItems='center'>
          <Button
            variant='contained'
            color='primary'
            sx={{ width: '200px' }}
            onClick={handleRegister}
          >
            {isLoading ? (
              <CircularProgress
                size={24}
                sx={{ color: 'white' }}
              ></CircularProgress>
            ) : (
              'הרשמה'
            )}
          </Button>
        </Stack>
      </FrostedBackground>
    </Stack>
  );
};

export default SignUpPage;
