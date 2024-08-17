import express, { Request, Response } from 'express';
import { createAppointment } from '../controllers/appointmentController';

const router = express.Router();

// Create a new appointment
router.post('/', createAppointment);

export default router;