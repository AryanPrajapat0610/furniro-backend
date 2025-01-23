const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const cardRoutes = require('./Routes/cardRoute');
const dbconnect = require('./config/dbconnect');

const { createCard,getCards}=  require("./controller/cardController");
const app = express();
const PORT = 4000; // Choose your preferred port

// Middleware
dbconnect();
app.use(bodyparser.json());
app.use(
  cors({
    origin: "*",
    credentials: true
  })
);
// Routes
app.post('/api/cards/createCard', createCard); // Use cardRoutes for /api/cards
app.post('/api/cards/getCards', getCards); // Use cardRoutes for /api/cards

// Base Route (optional)
app.get('/', (req, res) => {
  res.send('Welcome to the Card API!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
