import User from "../Schema/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const newUserData = await User.create(userData);
    res.status(200).send(newUserData);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const login = async (req, res) => {
  const userDetail = req.body;
  const user = await User.findOne({ email: userDetail.email }).select(
    "password email isAdmin"
  );
  if (user) {
    const validPass = await bcrypt.compare(userDetail.password, user.password);
    if (validPass) {
      // if user is valid we are generating the jwt token
      const jwtToken = jwt.sign(
        {
          email: user.email,
          id: user._id,
          isAdmin: user.isAdmin,
        },
        process.env.jwt_secret_salt,
        { expiresIn: "1d" }
      );
      res.setHeader("jwtToken", jwtToken);
      return res.status(200).send({
        status: true,
        message: "You are logged In !!!",
      });
    } else {
      return res.status(401).send({
        status: false,
        message: "Email or password is incorrect",
      });
    }
  } else {
    res.status(401).send({
      status: false,
      message: "Email or password is incorrect",
    });
  }
};

export const getUserDetails = async (req, res) => {
  const token = req.headers["jwttoken"];
  const userData = jwt.verify(token, process.env.jwt_secret_salt);
  if (userData) {
    const userInfo = await User.findOne({ email: userData.email });
    console.log("user ", userInfo);
    return res.status(200).send({
      status: true,
      ...userInfo,
    });
  } else {
    return res.status(401).send({
      status: false,
      message: "Please login again!!",
    });
  }
};
