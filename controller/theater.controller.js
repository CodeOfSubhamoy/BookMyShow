import Theater from "../Schema/theater.model.js";

//add theater
export const addTheater = async (req, res) => {
  try {
    const newTheater = new Theater(req.body);
    newTheater.owner = req.user.id;
    const theaterDetails = await newTheater.save();

    res.status(200).send({
      success: true,
      ...theaterDetails,
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};
export const getTheaterById = async (req, res) => {
  console.log("I got hit", req.params.theaterId);
  try {
    const theaterDetails = await Theater.findById({
      _id: req.params.theaterId,
    });
    console.log("res ", theaterDetails);
    if (theaterDetails) {
      res.send(theaterDetails);
    } else {
      res.status(500).send({
        success: false,
        message: "No Theater exist with this Id",
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
export const getAllTheater = async (req, res) => {
  try {
    const ownerId = req.query.ownerId;
    const filter = {};
    if (ownerId) {
      filter.owner = ownerId;
    }
    const theaterDetails = await Theater.find(filter);
    res.send(theaterDetails);
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
export const updateTheater = async (req, res) => {
  try {
    const updatedTheaterData = await Theater.updateOne(
      { _id: req.params.theaterId },
      { $set: req.body }
    );
    res.send(updatedTheaterData);
  } catch (e) {
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};
// delete theater
export const deleteTheater = async (req, res) => {
  try {
    await Theater.findOneAndDelete(req.params.theaterId);
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
