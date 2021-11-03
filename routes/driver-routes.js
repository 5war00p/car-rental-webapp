// NPM imports
const router = require("express").Router();

// Local imports
const models = require("../db/models");

// List all drivers available
router.get("/list", (req, res, next) => {
  models.Driver.find({})
    .populate([
      { path: "car", select: { number_plate: 1 } },
      { path: "location", select: { location: 1 } },
    ])
    .select({ createdAt: 0, updatedAt: 0, __v: 0 })
    .then((cars) => {
      res.send({ data: cars, message: "success", code: 200 });
    })
    .catch(next);
});

// Add a new driver
router.post("/new", (req, res, next) => {
  const { name, contact, location, car_number_plate } = req.body;

  if (!name || !contact || !car_number_plate)
    res.send({ message: "Missing some required fields!", code: 406 });

  let Driver;
  models.Driver.create({ name, contact })
    .then((driver) => {
      Driver = driver;

      let carPromise = models.Car.create({
        number_plate: car_number_plate,
        driver: driver._id,
      });

      let locPromise = models.Location.create({ location, driver: driver._id });

      return Promise.all([carPromise, locPromise]);
    })
    .then((promises) => {
      Driver.car = promises[0]._id;

      return Driver.save();
    })
    .then((driver) => {
      res.send({ message: "Driver added successfully!", code: 200 });
    })
    .catch(next);
});

module.exports = router;
