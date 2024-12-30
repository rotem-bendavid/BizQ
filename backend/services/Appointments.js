const admin = require('firebase-admin'); // Assuming firebase-admin is initialized

const db = admin.firestore();

const getTodayAppointments = async (req, res) => {
  const { date, businessId } = req.body;
  try {
    // Query the appointments collection
    const appointmentsQuerySnapshot = await db
      .collection('appointments')
      .where('date', '==', date) // Filter by date
      .where('businessId', '==', businessId) // Filter by businessId
      .get();

    // Extract data from the query snapshot
    const appointments = [];
    appointmentsQuerySnapshot.forEach((doc) => {
      appointments.push({ id: doc.id, ...doc.data() });
    });

    // Return the appointments in the response
    return res.status(200).json({
      success: true,
      data: appointments,
    });
  } catch (error) {
    console.error('Error fetching appointments:', error);

    // Error handling
    return res.status(500).json({
      success: false,
      message: 'An error occurred while fetching appointments.',
    });
  }
};
const getAllAppointments = async (req, res) => {
  const { businessId } = req.body;
  try {
    // Query the appointments collection
    const appointmentsQuerySnapshot = await db
      .collection('appointments')
      .where('businessId', '==', businessId) // Filter by businessId
      .get();

    // Extract data from the query snapshot
    const appointments = [];
    appointmentsQuerySnapshot.forEach((doc) => {
      appointments.push({ id: doc.id, ...doc.data() });
    });

    // Return the appointments in the response
    return res.status(200).json({
      success: true,
      data: appointments,
    });
  } catch (error) {
    console.error('Error fetching appointments:', error);

    // Error handling
    return res.status(500).json({
      success: false,
      message: 'An error occurred while fetching appointments.',
    });
  }
};
module.exports = {
  getTodayAppointments,
  getAllAppointments,
};
