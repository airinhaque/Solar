const express = require('express');
require('dotenv').config(); // For loading environment variables from a .env file

const app = express();
app.use(express.json()); // For parsing application/json

// Define your API endpoints here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

// In server.js
const solarRoutes = require('./routes/solarRoutes');

app.use('/api/solar', solarRoutes);

// Now create a new directory `routes`, and inside that a file `solarRoutes.js`
// In server.js
app.use(express.static('public'));
