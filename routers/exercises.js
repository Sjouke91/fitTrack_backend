const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const {
  user: User,
  workout: Workout,
  exercise: Exercise,
  workoutToExercise: WorkoutToExercise,
} = require("../models");

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const exercises = await Exercise.findAll();
    if (!exercises) {
      res.status(404).send("Exercises not found");
      return;
    }
    res.send(exercises);
  } catch (e) {
    next(e);
  }
});

router.get("/:workoutId", async (req, res, next) => {
  const id = req.params.workoutId;
  try {
    const exercises = await WorkoutToExercise.findAll({
      where: { workoutId: id },
      include: [Exercise],
    });
    if (!exercises) {
      res.status(404).send("exercises not found");
      return;
    }
    res.send(exercises);
  } catch (e) {
    next(e);
  }
});

router.get("/:exerciseId", async (req, res, next) => {
  const id = req.params.exerciseId;
  try {
    const exercise = await Exercise.findByPk(id);
    if (!exercise) {
      res.status(404).send("Exercise not found");
    }
    res.send(exercise);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  const { name, type } = await req.body;
  if (!name || !type) {
    res.status(400).send("missing credentials");
    return;
  }
  try {
    const newExercise = await Exercise.create({ name, type });
    res.json(newExercise);
  } catch (e) {
    res.status(400).json(e.name);
    next(e);
  }
});

module.exports = router;
