import { Schema, model, Document } from 'mongoose';

interface IAppointment extends Document {
  user: Schema.Types.ObjectId;
  client: string;
  date: Date;
  time: String;
  description?: string;
  createdAt: Date;
}

const AppointmentSchema = new Schema<IAppointment>({
  user: { type: Schema.Types.ObjectId, ref: 'User'},
  client: { type: String},
  date: { type: Date, required: true },
  time: { type: String, required: true },
  description: String,
  createdAt: { type: Date, default: Date.now }
});

export default model<IAppointment>('Appointment', AppointmentSchema);
