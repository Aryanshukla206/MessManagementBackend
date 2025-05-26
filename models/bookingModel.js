import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    userName: { type: String, required: true },
    contactNumber: { type: String, required: true },
    mealType: { type: String, enum: ['breakfast', 'lunch', 'dinner'], required: true },
    date: { type: Date, required: true },
    quantities: { type: Map, of: Number, required: true },
    hasDiscount: { type: Boolean, default: false },
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
    timestamp: { type: Date, default: Date.now }
});

const Booking = mongoose.model('Booking', BookingSchema);
export default Booking;