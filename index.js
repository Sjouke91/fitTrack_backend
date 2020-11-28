require("dotenv").config();
const express = require("express");
const loggerMiddleWare = require("morgan");
const corsMiddleWare = require("cors");
const { PORT } = require("./config/constants");
const authRouter = require("./routers/auth");
const exerciseRouter = require("./routers/exercises");
const workoutRouter = require("./routers/workout");
const muscleGroupRouter = require("./routers/muscleGroups");

const app = express();

//Middlewares
app.use(loggerMiddleWare("dev"));
const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);
app.use(corsMiddleWare());
if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY));
  });
}

//Routers
app.use("/", authRouter);
app.use("/exercises", exerciseRouter);
app.use("/workouts", workoutRouter);
app.use("/muscleGroups", muscleGroupRouter);

// Listen for connections on specified port (default is port 4000)
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
