const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const {
  user: User,
  workout: Workout,
  exercise: Exercise,
  workoutToExercise: WorkoutToExercise,
  userToExercise: UserToExercise,
  muscleGroup: MuscleGroup,
} = require("../models");

const router = new Router();

//get all exercises
router.get("/", async (req, res, next) => {
  const limit = Math.min(req.query.limit || 10, 50);
  const offset = req.query.offset || 0;
  try {
    const exercises = await Exercise.findAll({
      limit,
      offset,
      attributes: ["id", "name"],
      include: { model: MuscleGroup, attributes: ["name", "id"] },
    });
    if (!exercises) {
      res.status(404).send("Exercises not found");
      return;
    }
    res.send(exercises);
  } catch (e) {
    next(e);
  }
});

//get create new exercise
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

//get exercises of one workout
router.get("/:workoutId", async (req, res, next) => {
  const id = req.params.workoutId;
  try {
    const exercises = await WorkoutToExercise.findAll({
      where: { workoutId: id },
      attributes: ["exerciseId", "workoutId"],
      include: {
        model: Exercise,
        attributes: ["id", "name"],
        include: { model: MuscleGroup, attributes: ["name", "id"] },
      },
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

//Post submit a finished exercise
router.post("/:exerciseId", authMiddleware, async (req, res, next) => {
  const exerciseId = req.params.exerciseId;
  const userId = req.user.id;
  const date = new Date();
  const { workoutId, reps, sets, kg, RPE } = req.body;
  if (!exerciseId || !workoutId || !userId || !reps || !sets || !kg || !RPE) {
    res.status(400).send({ message: "Please fill in all input fields" });
  }
  try {
    const finishExercise = await UserToExercise.create({
      userId,
      exerciseId,
      workoutId,
      kg,
      sets,
      reps,
      RPE,
      date,
    });
    res.json(finishExercise);
  } catch (e) {
    next(e);
  }
});

//get exercise logs
router.get("/user/:exerciseId", authMiddleware, async (req, res, next) => {
  const exerciseId = req.params.exerciseId;
  const userId = req.user.id;

  try {
    const exercises = await UserToExercise.findAll({
      where: { exerciseId: exerciseId, userId: userId },
      attributes: ["reps", "sets", "kg", "RPE", "date"],
    });
    if (!exercises) {
      res.status(404).send("Exercise not found");
    }
    res.send(exercises);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
