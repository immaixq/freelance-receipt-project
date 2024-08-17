import { Request, Response } from 'express';
import Receipt from '../models/Receipt';

// Create a new receipt
export const createReceipt = async (req: Request, res: Response) => {
    const { userId, amount, description } = req.body;
    const receipt = new Receipt({ userId, amount, description });

    try {
        await receipt.save();
        res.status(201).json(receipt);
    } catch (error) {
        res.status(500).json({ message: 'Error creating receipt' });
    }
};

// Get all receipts for a user
export const getReceipts = async (req: Request, res: Response) => {
    const userId = req.params.userId;
    try {
        const receipts = await Receipt.find({ userId });
        res.json(receipts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching receipts' });
    }
};

// Update a receipt
export const updateReceipt = async (req: Request, res: Response) => {
    // Logic to update a receipt
};

// Delete a receipt
export const deleteReceipt = async (req: Request, res: Response) => {
    // Logic to delete a receipt
};
