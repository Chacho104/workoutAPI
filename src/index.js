const express = require('express');
const bodyParser = require('body-parser');
const v1WorkOutRouter = require('./v1/routes/workoutRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// For testing purposes
app.use(bodyParser.json());
app.use("/api/v1/workouts", v1WorkOutRouter);

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});