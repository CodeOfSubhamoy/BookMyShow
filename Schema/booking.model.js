import mongoose, { model, Schema } from "mongoose";

const bookingSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: [true, "This is mandatory"],
    },
    transationId: {
      type: String,
      required: true,
    },
    seats: {
      type: [String],
      required: true,
    },
    showId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "shows",
      required: true,
    },
  },
  { timestamps: true }
);
const Booking = model("booking", bookingSchema);
export default Booking;
