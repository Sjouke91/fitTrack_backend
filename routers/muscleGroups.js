const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const {
  user: User,
  workout: Workout,
  exercise: Exercise,
  userToWorkout: UserToWorkout,
  muscleGroup: MuscleGroup,
} = require("../models");

const router = new Router();

//get all muscle groups
router.get("/", async (req, res, next) => {
  try {
    const muscleGroups = await MuscleGroup.findAll({
      attributes: ["name", "id"],
    });
    if (!muscleGroups) {
      res.status(404).send("Muscle group not found");
      return;
    }
    res.send(muscleGroups);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
