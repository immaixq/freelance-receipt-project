import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  hourlyRate: number;
  createdAt: Date;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  hourlyRate: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

export default model<IUser>('User', UserSchema);
