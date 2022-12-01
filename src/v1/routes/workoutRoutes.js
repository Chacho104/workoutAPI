const express = require('express');
const router = express.Router();
const workoutController = require('../../controllers/workoutControllers');

router.get('/', workoutController.getAllWorkouts);

router.get('/:workoutId', workoutController.deleteOneWorkout);

router.post('/', workoutController.createNewWorkout);

router.patch('/:workoutId', workoutController.updateOneWorkout);

router.delete('/:workoutId', workoutController.deleteOneWorkout);

module.exports = router;
