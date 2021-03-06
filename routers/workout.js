const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const {
  user: User,
  workout: Workout,
  exercise: Exercise,
  userToWorkout: UserToWorkout,
  workoutToExercise: WorkoutToExercise,
} = require("../models");

const router = new Router();

//Get all workouts
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

//Get all workouts from user
router.get("/:userId", async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const workouts = await UserToWorkout.findAll({
      where: { userId },
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

//Edit a workout by adding exercises
router.post("/:workoutId", async (req, res, next) => {
  const { workoutId } = req.params;
  const { exerciseArray } = await req.body;

  if (!workoutId || !exerciseArray) {
    res.status(400).send("missing credentials");
    return;
  }
  try {
    const newExercise = exerciseArray.map(async (e) => {
      const doesExist = await WorkoutToExercise.findOne({
        where: { exerciseId: e },
      });

      if (!doesExist) {
        const newWorkoutToExercise = await WorkoutToExercise.create({
          workoutId: workoutId,
          exerciseId: e,
        });
        return newWorkoutToExercise;
      }
      return;
    });
  } catch (e) {
    res.status(400).json(e.name);
    next(e);
  }
});

//Edit a workout by deleting exercises
router.delete("/:workoutId/:exerciseId", async (req, res, next) => {
  const { workoutId, exerciseId } = req.params;

  console.log("THIS IS PARAMS", workoutId, exerciseId);
  if (!workoutId || !exerciseId) {
    res.status(400).send("missing credentials");
    return;
  }
  try {
    const specificWorkout = await WorkoutToExercise.destroy({
      where: [{ workoutId: workoutId }, { exerciseId: exerciseId }],
    });
    res.status(200).json(specificWorkout);
  } catch (e) {
    res.status(400).json(e.name);
    next(e);
  }
});

//Create a new workout
router.post("/", authMiddleware, async (req, res, next) => {
  const { workoutName, intensity, exerciseArray } = await req.body;
  const userId = req.user.dataValues.id;
  if (!workoutName && !exerciseArray) {
    res.status(400).send("missing credentials");
    return;
  }
  try {
    const newWorkout = await Workout.create({ name: workoutName, intensity });
    res.json(newWorkout);

    const newUserToWorkout = await UserToWorkout.create({
      workoutId: newWorkout.id,
      userId,
    });

    const newWorkoutToExercise = exerciseArray.map(async (e) => {
      const newWorkoutToExercise = await WorkoutToExercise.create({
        userId,
        workoutId: newWorkout.id,
        exerciseId: e,
      });
      return newWorkoutToExercise;
    });
  } catch (e) {
    res.status(400).send("missing something");
    next(e);
  }
});

//Delete workout
router.delete("/:workoutId", authMiddleware, async (req, res, next) => {
  const workoutId = req.params.workoutId;
  try {
    const deletedWorkout = await UserToWorkout.destroy({
      where: { workoutId },
    });
    res.send("succes");
  } catch (e) {
    next(e);
  }
});

module.exports = router;
