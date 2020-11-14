const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const {
  user: User,
  workout: Workout,
  exercise: Exercise,
  userToWorkout: UserToWorkout,
} = require("../models");

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const workouts = await Workout.findAll();
    if (!workouts) {
      res.status(404).send("Workouts not found");
      return;
    }
    res.send(workouts);
  } catch (e) {
    next(e);
  }
});

router.get("/:userId", async (req, res, next) => {
  const id = req.params.userId;
  console.log(id);
  try {
    const workouts = await UserToWorkout.findAll({
      where: { userId: id },
      include: [Workout],
    });
    if (!workouts) {
      res.status(404).send("workout not found");
      return;
    }
    res.send(workouts);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  const { name, intensity } = await req.body;
  if (!name || !intensity) {
    res.status(400).send("missing credentials");
    return;
  }
  try {
    const newWorkout = await Workout.create({ name, intensity });
    res.json(newWorkout);
  } catch (e) {
    res.status(400).json(e.name);
    next(e);
  }
});

module.exports = router;
