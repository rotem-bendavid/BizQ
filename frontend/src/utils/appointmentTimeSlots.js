// Calculates available start times for appointments within the working hours, avoiding conflicts with already scheduled appointments
// The function gets the business working hours, duration of the desired appointment, and a list of existing scheduled appointments as input
// It returns an array of available time slots that can accommodate the new appointment without overlapping with existing appointments

/* EXAMPLE 1:
*   const startWorkingTime = "09:00";
    const endWorkingTime = "17:00";
    const appointmentTime = "00:30"; 
    const scheduledAppointments = [
        { startTime: "09:30", endTime: "10:00" },
       { startTime: "12:00", endTime: "13:00" },
       { startTime: "15:00", endTime: "15:30" }];


    RESPONSE:
    ['09:00', '10:00', '10:30', '11:00', '11:30', '13:00', '13:30', '14:00', '14:30', '15:30', '16:00', '16:30']
*/

/* EXAMPLE 2:
*   const startWorkingTime = "09:00";
    const endWorkingTime = "17:00";
    const appointmentTime = "00:45"; 
    const scheduledAppointments = [
        { startTime: "09:30", endTime: "10:00" },
       { startTime: "12:00", endTime: "13:00" },
       { startTime: "15:00", endTime: "15:30" }];


    RESPONSE:
    [ '10:00', '10:45', '13:00', '13:45', '15:30', '16:15' ]
*/

export function calculateAvailableAppointmentStartTimes(startWorkingTime, endWorkingTime, appointmentTime, scheduledAppointments) {
    // Convert time strings ("09:00") to minutes since start of the day
    const timeToMinutes = (time) => {
        const [hours, minutes] = time.split(':').map(Number);
        return hours * 60 + minutes;
    };

    // Convert minutes back to time string
    const minutesToTime = (minutes) => {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
    };

    // Parse inputs to minutes
    const startWorkMinutes = timeToMinutes(startWorkingTime);
    const endWorkMinutes = timeToMinutes(endWorkingTime);
    const appointmentDuration = timeToMinutes(appointmentTime);

    // Sort scheduled appointments by start time
    scheduledAppointments.sort((a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime));

    // Initialize an array for available start times
    let availableTimes = [];
    let currentStart = startWorkMinutes;

    // Iterate through scheduled appointments
    for (let appointment of scheduledAppointments) {
        const appointmentStart = timeToMinutes(appointment.startTime);
        const appointmentEnd = timeToMinutes(appointment.endTime);

        // Check for gaps before this appointment
        while (currentStart + appointmentDuration <= appointmentStart) {
            availableTimes.push(minutesToTime(currentStart));
            currentStart += appointmentDuration;
        }

        // Move currentStart to the end of the current appointment if necessary
        currentStart = Math.max(currentStart, appointmentEnd);
    }

    // Check for gaps after the last appointment
    while (currentStart + appointmentDuration <= endWorkMinutes) {
        availableTimes.push(minutesToTime(currentStart));
        currentStart += appointmentDuration;
    }

    return availableTimes;
}