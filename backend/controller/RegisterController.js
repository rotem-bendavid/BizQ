// controllers/businessController.js
const { registerBusiness } = require('../services/RegisterService'); // Import the registerBusiness function from services

const registerBusinessController = async (req, res) => {
  const businessData = req.body; // Receive business data from the request body

  try {
    // Step 1: Call the registerBusiness function from the service
    const response = await registerBusiness(businessData);

    // Step 2: Handle success response
    return res.status(200).json(response); // Resource created successfully
  } catch (error) {
    console.error('Error during registration:', error);

    // Step 3: Handle specific errors propagated from the service
    const statusCode = error.statusCode || 500; // Default to 500 for unhandled errors
    const errorMessage = error.errorMessage || 'Internal Server Error';

    return res.status(statusCode).json({
      success: false,
      message: errorMessage,
    });
  }
};

module.exports = registerBusinessController;
