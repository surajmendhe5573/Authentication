const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoute= require('./routes/userRoute');
const ProductRoute= require('./routes/productRoute');
const contactRoute= require('./routes/contactRoute')

const app = express();
app.use(express.json()); // parse incoming data

const port = process.env.PORT || 7000;
const MongoURL = process.env.MONGO_URI || 'mongodb://localhost:27017/defaultdb';

// MongoDB Connection
mongoose.connect(MongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


app.use('/users', userRoute);   // user routes
app.use('/products', ProductRoute);   // product routes
app.use('/contact', contactRoute); // contact route

// node project