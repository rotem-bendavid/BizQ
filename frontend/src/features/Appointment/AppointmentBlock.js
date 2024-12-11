import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import OptionsSection from './OptionsSection';
import ScheduleSection from './ScheduleSection';
import AppointmentTimeSelection from './AppointmentTimeSelection';
import AppointmentSummary from './AppointmentSummary';
import { Button, Stack } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const AppointmentBlock = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const history = useHistory(); // Use history for navigation

  // Centralized state to store user choices
  const [appointmentData, setAppointmentData] = useState({
    typeName: null,
    typeId: null,
    date: null,
    time: null,
    comment: '',
  });

  useEffect(() => {
    console.log('Appointment Data changed:', appointmentData);
  }, [appointmentData]);

  const handleSubmit = async () => {
    console.log("handleSubmit: ", appointmentData);
    
    // Validate required fields
    const requiredFields = [
      { field: 'typeId', label: 'סוג פגישה' },
      { field: 'date', label: 'תאריך' },
      { field: 'time', label: 'שעה' },
    ];

    // ROTEM TODO: make it work
    const missingFields = requiredFields.filter(({ field }) => !appointmentData[field]?.trim());

    if (missingFields.length > 0) {
      alert(`אנא מלאו את הערך בשדה ${missingFields[0].label}`);
      return;
    }

    // Submit the appointment data
    try {
      // Mock API call - Replace with actual API logic
      console.log('Submitting appointment data:', appointmentData);
      alert('Appointment Scheduled Successfully!');
      history.push('/appointments'); // Navigate to another page after successful submission
    } catch (error) {
      console.error(error);
      alert('קרתה שגיאה בתהליך קביעת הפגישה. נסו שנית');
    }
  };

  const sections = [
    <OptionsSection
      onTypeSelect={(typeId, typeName) => {
        setAppointmentData((prev) => ({
          ...prev, 
          typeId, 
          typeName, // Set both typeId and typeName at the same time
        }));
      }}
    />,
    <ScheduleSection 
      onDateSelect={(date) => setAppointmentData((prev) => ({ ...prev, date }))}
    />,
    <AppointmentTimeSelection 
      selectedDate={appointmentData.date} 
      onTimeSelect={(time) => setAppointmentData((prev) => ({ ...prev, time }))}
    />,
    <AppointmentSummary
      selectedOption={appointmentData.typeName}
      selectedDate={appointmentData.date} 
      selectedTime={appointmentData.time}
      specialRequest={appointmentData.comment}
      onSpecialRequestChange={(comment) => setAppointmentData((prev) => ({ ...prev, comment }))}
      onSubmit={handleSubmit}
    />,
  ];

  const handleLeftClick = () => {
    if (currentSection === 0) {
      history.goBack();
    } else {
      setCurrentSection((prev) => prev - 1); // Move to the previous section
    }
  };

  const handleRightClick = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection((prev) => prev + 1); // Move to the next section
    }
  };

  return (
    <Stack
      alignItems="center"
      height="80vh"
      justifyContent="space-between"
      direction="row"
      width="100%"
    >
      <Button
        variant="contained"
        onClick={handleLeftClick}
        disabled={currentSection === 0 && history.length === 0} // Optional: disable if no history
      >
        <ArrowCircleLeftIcon />
      </Button>

      {sections[currentSection]}

      <Button
        variant="contained"
        onClick={handleRightClick}
        style={{ visibility: currentSection < sections.length - 1 ? 'visible' : 'hidden' }} // Hide the button visually
      >
        <ArrowCircleRightIcon />
      </Button>
    </Stack>
  );
};

export default AppointmentBlock;
