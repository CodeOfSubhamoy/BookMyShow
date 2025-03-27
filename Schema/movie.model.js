import { model, Schema } from "mongoose";

const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "This is mandatory"],
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    releaseDate: {
      type: Date,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
    caste: {
      type: String,
      required: true,
    },
    language: {
      type: [String],
      enum: ["English", "Hindi"],
      required: true,
    },
    genre: {
      type: [String],
      enum: ["Thrillar", "Action", "Fantasy"],
      required: true,
    },
    poster: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
const Movie = model("movie", movieSchema);
export default Movie;
