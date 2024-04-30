// In solarController.js
const axios = require('axios');
require('dotenv').config();

exports.getSolarData = async (req, res) => {
  const { latitude, longitude } = req.body;
  try {
    const solarData = await axios.get(`${process.env.SOLAR_API_URL}&lat=${latitude}&lng=${longitude}`);
    res.json(solarData.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
