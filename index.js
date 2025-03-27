import express from "express";
import connectDB from "./database/mongoDb.js";
import UserRoutes from "./Routes/user.routes.js";
import TheaterRoutes from "./Routes/theater.route.js";
import MovieRoutes from "./Routes/movie.routes.js";
import ShowRoutes from "./Routes/show.routes.js";
import env from "dotenv";

const app = express();

app.use(express.json());
env.config();
app.use("/api/user", UserRoutes);
app.use("/api/theater", TheaterRoutes);
app.use("/api/movies", MovieRoutes);
app.use("/api/show", ShowRoutes);

app.all("*", (req, res) => {
  res.status(404).send("Page Not Found!!!");
});
app.listen(5010, () => {
  console.log("Server started!!");
  connectDB();
});
