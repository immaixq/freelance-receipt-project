import express, { Request, Response } from 'express';
import Receipt from '../models/Receipt';
import { createReceipt } from '../controllers/receiptController';

const router = express.Router();

// Create a new receipt
router.post('/create', createReceipt);

export default router;
