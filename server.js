import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import indexRoute from './Routes/ContactRoute.js';
import connectDB from './Config/conectDb.js';

dotenv.config();

const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(cors()); // ✅ Allow all origins
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', indexRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
