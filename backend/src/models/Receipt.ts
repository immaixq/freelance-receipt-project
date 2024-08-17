import { Schema, model, Document } from 'mongoose';

interface IReceipt extends Document {
  user: Schema.Types.ObjectId;
  appointment: Schema.Types.ObjectId;
  totalAmount: number;
  isPaid: boolean;
  paidAt?: Date;
  createdAt: Date;
}

const ReceiptSchema = new Schema<IReceipt>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  appointment: { type: Schema.Types.ObjectId, ref: 'Appointment', required: true },
  totalAmount: { type: Number, required: true },
  isPaid: { type: Boolean, default: false },
  paidAt: Date,
  createdAt: { type: Date, default: Date.now }
});

export default model<IReceipt>('Receipt', ReceiptSchema);
