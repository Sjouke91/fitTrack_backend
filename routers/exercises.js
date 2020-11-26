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

//search exercises by muscleGroup
router.get("/search/", async (req, res, next) => {
  const muscleGroupId = req.query.muscleGroupId;
  const exerciseName = req.query.exerciseName;
  console.log(muscleGroupId, exerciseName);
  if (!muscleGroupId && !exerciseName) {
    res
      .status(400)
      .send({ message: "Please select a muscle group or try search by name" });
  }
  try {
    if (exerciseName && muscleGroupId) {
      const allExercises = await Exercise.findAll({
        attributes: ["name", "id"],
        include: { model: MuscleGroup, attributes: ["name", "id"] },
      });

      const exerciseByName = allExercises.filter((ae) => {
        const exercise = ae.get({ plain: true });
        return exercise.name.includes(exerciseName);
      });

      if (!exerciseByName) {
        res.status(404).send({ message: "No exercises found by name" });
      }

      const exercises = exerciseByName.filter((e) => {
        return e.muscleGroup.dataValues.id === parseInt(muscleGroupId);
      });

      if (exercises === []) {
        res
          .status(404)
          .send({ message: "No exercises found by name and muscle group" });
      }

      res.send(exercises);
      return;
    }
    if (exerciseName && !muscleGroupId) {
      const allExercises = await Exercise.findAll({
        attributes: ["name", "id"],
        include: { model: MuscleGroup, attributes: ["name", "id"] },
      });
      const exercises = allExercises.filter((ae) => {
        const exercise = ae.get({ plain: true });
        return exercise.name.includes(exerciseName);
      });
      if (!exercises) {
        res.status(404).send("No exercises found");
      }
      res.send(exercises);
      return;
    }
    if (muscleGroupId) {
      const exercises = await Exercise.findAll({
        where: { muscleGroupId: muscleGroupId },
        attributes: ["name", "id"],
        include: { model: MuscleGroup, attributes: ["name", "id"] },
      });
      if (!exercises) {
        res.status(404).send("No exercises found");
      }
      res.send(exercises);
      return;
    }
  } catch (e) {
    next(e);
  }
});

//get all exercises for calender
router.get("/", authMiddleware, async (req, res, next) => {
  const userId = req.user.id;
  try {
    const exercises = await UserToExercise.findAll({
      where: { userId },
      attributes: [
        "id",
        "kg",
        "sets",
        "reps",
        "RPE",
        "workoutStart",
        "createdAt",
      ],
      include: { model: Workout, attributes: ["name", "id"] },
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
