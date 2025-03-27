import Theater from "../Schema/theater.model.js";
const isTheaterOwnerMiddleware = async function (req, res, next) {
  try {
    const theaterDetails = await Theater.findById(req.body.theater);
    if (theaterDetails.owner.toString() !== req.user.id) {
      throw new Error(`You aren't the owner of the ${theaterDetails.name}`);
    }
    next();
  } catch (e) {
    res.status(403).send({
      success: false,
      messsage: e.message,
    });
  }
};
export default isTheaterOwnerMiddleware;
