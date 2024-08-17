import express, { Application } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/users';
import receiptRoutes from './routes/receipts';
import appointmentRoutes from './routes/appointments';
import cors from 'cors';

// Load env vars
dotenv.config();
const app: Application = express();
app.use(cors()); // Enable CORS for all origins

// Middlewares
app.use(express.json());
// MongoDB Connection
mongoose.connect(process.env.MONGO_URI as string, 
  {
    dbName: process.env.MONGO_DB_NAME
  }
)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/receipts', receiptRoutes);
app.use('/api/appointments', appointmentRoutes);


// Global Error Handler
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
