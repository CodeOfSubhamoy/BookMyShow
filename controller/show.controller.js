import Show from "../Schema/show.modal.js";

export const addShow = async (req, res) => {
  try {
    const newShow = new Show(req.body);
    const showDetails = await newShow.save();

    res.status(200).send({
      success: true,
      ...showDetails,
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};
export const getShowById = async (req, res) => {
  try {
    const movieDetails = await Show.findById({
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
export const updateShow = async (req, res) => {
  try {
    const updatedShowData = await Show.updateOne(
      { _id: req.params.showId },
      { $set: req.body }
    );
    res.send(updatedShowData);
  } catch (e) {
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};
// delete theater
export const deleteShow = async (req, res) => {
  try {
    await Show.findOneAndDelete(req.params.showId);
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
export const getShowByFilter = async (req, res) => {};
