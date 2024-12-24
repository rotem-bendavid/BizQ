import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import OptionsSection from './OptionsSection';
import ScheduleSection from './ScheduleSection';
import AppointmentTimeSelection from './AppointmentTimeSelection';
import AppointmentSummary from './AppointmentSummary';
import { Button, Stack } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { scheduleAppointment } from '../../api/ScheduleAppointment';

const AppointmentBlock = ({ setIsAppointmentMode, businessData }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const history = useHistory(); // Use history for navigation

  // Centralized state to store user choices
  const [appointmentData, setAppointmentData] = useState({
    clientName: null,
    clientMail: null,
    clientPhone: null,
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
    console.log('handleSubmit: ', appointmentData);

    // Validate required fields
    const requiredFields = [
      { field: 'typeId', label: 'בחירה מוצר' },
      { field: 'date', label: 'תאריך' },
      { field: 'time', label: 'שעה' },
      { field: 'clientName', label: 'שם הלקוח' },
      { field: 'clientMail', label: 'מייל הלקוח' },
      { field: 'clientPhone', label: 'טלפון הלקוח' },
    ];

    const missingFields = requiredFields.filter(({ field }) => {
      const value = appointmentData[field];
      return (
        value === null ||
        value === undefined ||
        (typeof value === 'string' && value.trim() === '')
      );
    });

    if (missingFields.length > 0) {
      alert(`אנא מלאו את הערך בשדה: ${missingFields[0].label}`);
      return;
    }

    const dataToSubmit = {
      businessId: businessData?.id,
      ...appointmentData,
    };

    // Submit the appointment data
    try {
      const response = await scheduleAppointment(dataToSubmit);

      if (response.success) {
        alert('Appointment Scheduled Successfully!');
        window.location.href = '/';
      }
    } catch (error) {
      console.error(error);
      alert('קרתה שגיאה בתהליך קביעת הפגישה. נסו שנית');
    }
  };
  const sections = [
    <OptionsSection
      services={businessData?.services}
      selectedTypeId={appointmentData.typeId}
      onTypeSelect={(typeId, typeName) => {
        setAppointmentData((prev) => ({
          ...prev,
          typeId,
          typeName,
        }));
        setCurrentSection((prev) => prev + 1);
      }}
    />,
    <ScheduleSection
      selectedDate={appointmentData.date}
      onDateSelect={(date) => {
        setAppointmentData((prev) => ({ ...prev, date }));
        setCurrentSection((prev) => prev + 1);
      }}
      workingDays={businessData.workingDays}
    />,
    <AppointmentTimeSelection
      selectedDate={appointmentData.date}
      selectedTime={appointmentData.time}
      onTimeSelect={(time) => {
        setAppointmentData((prev) => ({ ...prev, time }));
        setCurrentSection((prev) => prev + 1); // Move to next section after selection
      }}
      businessData={businessData}
    />,
    <AppointmentSummary
      selectedOption={appointmentData.typeName}
      selectedDate={appointmentData.date}
      selectedTime={appointmentData.time}
      specialRequest={appointmentData.comment}
      clientName={appointmentData.clientName}
      clientMail={appointmentData.clientMail}
      clientPhone={appointmentData.clientPhone}
      onSpecialRequestChange={(comment) =>
        setAppointmentData((prev) => ({ ...prev, comment }))
      }
      onClientNameChange={(name) =>
        setAppointmentData((prev) => ({ ...prev, clientName: name }))
      }
      onClientMailChange={(mail) =>
        setAppointmentData((prev) => ({ ...prev, clientMail: mail }))
      }
      onClientPhoneChange={(phone) =>
        setAppointmentData((prev) => ({ ...prev, clientPhone: phone }))
      }
      onSubmit={handleSubmit}
    />,
  ];

  const handleLeftClick = () => {
    if (currentSection === 0) {
      setIsAppointmentMode(false);
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
      alignItems='center'
      height='80vh'
      justifyContent='space-between'
      direction='row'
      width='100%'
    >
      <Button
        variant='contained'
        onClick={handleLeftClick}
        disabled={currentSection === 0 && history.length === 0} // Optional: disable if no history
      >
        <ArrowCircleLeftIcon />
      </Button>

      {sections[currentSection]}

      <Button
        variant='contained'
        onClick={handleRightClick}
        style={{
          visibility:
            currentSection < sections.length - 1 ? 'visible' : 'hidden',
        }} // Hide the button visually
      >
        <ArrowCircleRightIcon />
      </Button>
    </Stack>
  );
};

export default AppointmentBlock;
