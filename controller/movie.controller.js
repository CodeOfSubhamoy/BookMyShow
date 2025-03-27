import Movie from "../Schema/movie.model.js";

//add theater
export const addMovie = async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    const movieDetails = await newMovie.save();

    res.status(200).send({
      success: true,
      ...movieDetails,
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};
export const getMovieById = async (req, res) => {
  try {
    const movieDetails = await Movie.findById({
      _id: req.params.movieId,
    });
    console.log("res ", movieDetails);
    if (movieDetails) {
      res.send(movieDetails);
    } else {
      res.status(500).send({
        success: false,
        message: "No Movie exist with this Id",
      });
    }
  } catch (e) {
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};
// get all theaters
export const getAllMovies = async (req, res) => {
  try {
    const movieDetails = await Movie.find();
    res.send(movieDetails);
  } catch (e) {
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};
// get theaters by owners
export const getTheaterByOwner = async (req, res) => {
  try {
  } catch (e) {
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};
// update theaters
export const updateMovie = async (req, res) => {
  try {
    const updatedMovieData = await Movie.updateOne(
      { _id: req.params.movieId },
      { $set: req.body }
    );
    res.send(updatedMovieData);
  } catch (e) {
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};
// delete theater
export const deleteMovie = async (req, res) => {
  try {
    await Movie.findOneAndDelete(req.params.movieId);
    res.send({
      success: true,
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};
