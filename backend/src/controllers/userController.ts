import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';

// Register user
export const registerUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password, hourlyRate } = req.body;
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }
        user = new User({ name, email, password, hourlyRate });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save()
        .then(() => console.log('User created'))
        .catch((err) => console.error('Error creating user:', err));
        const payload = { user: { id: user.id } };
        jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: 3600 }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (err) {
        if (err instanceof Error) {
            console.error('Error:', err.message);
            if (err.stack) {
                console.error('Stack:', err.stack);
            }
        } else {
            console.error('Unknown error:', err);
        }
        res.status(500).send('Server error');
    }
};

// Login user
export const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }
        const payload = { user: { id: user.id } };
        jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: 3600 }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (err) {
        if (err instanceof Error) {
            console.error('Error:', err.message);
            if (err.stack) {
                console.error('Stack:', err.stack);
            }
        } else {
            console.error('Unknown error:', err);
        }
        res.status(500).send('Server error');
    }
};

// Get user profile
export const getUserProfile = async (req: Request, res: Response) => {
    // Logic to get user profile
};
