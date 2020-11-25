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

router.post("/", authMiddleware, async (req, res, next) => {
  const { workoutName, intensity, exerciseArray } = await req.body;
  const userId = req.user.dataValues.id;

  console.log("THIS IS INCOMMING", workoutName, exerciseArray);

  if (!workoutName || !exerciseArray) {
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
    res.status(400).json(e.name);
    next(e);
  }
});

module.exports = router;
