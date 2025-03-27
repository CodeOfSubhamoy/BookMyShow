const isAdminMiddleWare = function (req, res, next) {
  try {
    if (req.user.isAdmin) {
      next();
    } else {
      throw new Error("You dont have permission!!");
    }
  } catch (e) {
    res.status(403).send({
      success: false,
      message: e.message,
    });
  }
};

export default isAdminMiddleWare;
