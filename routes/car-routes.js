// NPM imports
const router = require("express").Router();

// Local imports
const models = require("../db/models");

// List all cars available
router.get("/list", (req, res, next) => {
  models.Car.find({})
    .populate({ path: "driver", select: { name: 1, _id: 0 } })
    .select({ number_plate: 1 })
    .then((cars) => {
      res.send({ data: cars, message: "success", code: 200 });
    })
    .catch(next);
});

module.exports = router;
