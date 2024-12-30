import React, { useEffect, useState } from 'react';
import {
  Scheduler,
  MonthView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
  DayView,
} from '@devexpress/dx-react-scheduler-material-ui';
import WestIcon from '@mui/icons-material/West';
import { Button, Paper, Stack } from '@mui/material';
import { ViewState } from '@devexpress/dx-react-scheduler';
import FrostedBackground from '../features/FrostedBackground';
import { useIsLoggedIn } from '../utils/auth';
import { getAllAppointments } from '../api/Appointment';

const SchedulerPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentViewName, setCurrentViewName] = useState('Month');
  const [schedulerData, setSchedulerData] = useState([]);
  const isLoggedIn = useIsLoggedIn();

  const CustomAppointment = ({ children, data, ...restProps }) => {
    const handleClick = () => {
      setCurrentDate(data?.startDate); // Change to the clicked day
      setCurrentViewName('Day');
    };

    return (
      <Appointments.Appointment {...restProps} onClick={handleClick}>
        {children}
      </Appointments.Appointment>
    );
  };
  const CustomTimeTableCell = ({ startDate, ...restProps }) => {
    const handleDayClick = () => {
      console.log(startDate);
      setCurrentDate(startDate); // Change to the clicked day
      setCurrentViewName('Day'); // Switch to Day view
    };

    return (
      <MonthView.TimeTableCell
        {...restProps}
        startDate={startDate}
        onClick={handleDayClick}
        style={{ cursor: 'pointer' }}
      />
    );
  };
  useEffect(() => {
    getAllAppointments(isLoggedIn).then((data) => {
      const updatedData = data?.data?.map((appointment) => ({
        ...appointment,
        title: `${appointment.clientName} - ${appointment.service}`, // Customize the title as needed
      }));

      console.log(updatedData);
      setSchedulerData(updatedData);
    });
  }, []);
  return (
    <Stack alignItems={'center'}>
      <FrostedBackground>
        {currentViewName !== 'Month' && (
          <Button
            sx={{
              position: 'absolute',
              right: '60px',
              top: '30px',
              zIndex: '9999',
            }}
            onClick={() => {
              setCurrentViewName('Month');
            }}
            variant='contained'
          >
            חזרה לתצוגה חודשית{' '}
          </Button>
        )}
        <Stack sx={{ backgroundColor: 'white' }}>
          <Scheduler data={schedulerData}>
            <ViewState
              currentDate={currentDate} // Dynamically bind currentDate
              onCurrentDateChange={(newDate) => setCurrentDate(newDate)} // Update state when toolbar changes the date
              currentViewName={currentViewName}
              onCurrentViewNameChange={(newViewName) =>
                setCurrentViewName(newViewName)
              } // Update state when the view changes
            />
            {currentViewName === 'Month' ? (
              <MonthView timeTableCellComponent={CustomTimeTableCell} />
            ) : (
              <DayView startDayHour={8} endDayHour={18} />
            )}{' '}
            <Toolbar />
            <DateNavigator />
            <TodayButton />
            <Appointments appointmentComponent={CustomAppointment} />
          </Scheduler>
        </Stack>
      </FrostedBackground>
    </Stack>
  );
};

export default SchedulerPage;
