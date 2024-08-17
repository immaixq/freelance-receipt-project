import { Request, Response } from 'express';
import Appointment from '../models/Appointment';

// Create a new appointment
// Create a new appointment
export const createAppointment = async (req: Request, res: Response) => {
    const { client, date, time, description} = req.body;

    // Validate required fields
    if (!client || !date || !time) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    const appointment = new Appointment({
        client,
        date,
        time,
        description,
    });

    try {
        await appointment.save();
        res.status(201).json(appointment); // Return the created appointment
    } catch (error) {
        console.error('Error creating appointment:', error);
        res.status(500).json({ message: 'Error creating appointment' });
    }
};
// Get all appointments for a user
export const getAppointments = async (req: Request, res: Response) => {
    const userId = req.params.userId;
    try {
        const appointments = await Appointment.find({ userId });
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching appointments' });
    }
};

// Update an appointment
export const updateAppointment = async (req: Request, res: Response) => {
    // Logic to update an appointment
};

// Delete an appointment
export const deleteAppointment = async (req: Request, res: Response) => {
    // Logic to delete an appointment
};
