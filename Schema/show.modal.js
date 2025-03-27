import mongoose, { model, Schema } from "mongoose";

const showSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "movies",
    required: true,
  },
  theater: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "theater",
    required: true,
  },
  totalSeats: {
    type: Number,
    required: true,
  },
  bookedSeats: {
    type: [String],
    default: [],
    required: true,
  },
  ticketPrice: {
    type: Number,
    required: true,
  },
});
const Show = model("shows", showSchema);
export default Show;
