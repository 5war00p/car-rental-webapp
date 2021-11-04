// NPM imports
const router = require("express").Router();

// Local imports
const models = require("../db/models");

// Get all nearer locations to the given location
router.get("/nearer", (req, res, next) => {
  let { lat, lng } = req.query;

  if (!lat || !lng)
    res.send({ message: "Missing some required fields!", code: 406 });

  lat = parseFloat(lat);
  lng = parseFloat(lng);

  models.Location.aggregate([
    {
      $geoNear: {
        near: { type: "Point", coordinates: [lat, lng] },
        distanceField: "distance",
        maxDistance: 10000, // less or equal to  10 km
        spherical: true,
      },
    },
    { $sort: { distance: 1, createdate: -1 } }, // sorting using least distance and most recent as firstone
    { $limit: 3 }, // top 3 will be given
  ])
    .then((drivers) => {
      res.send({ data: drivers, message: "success", code: 200 });
    })
    .catch(next);
});

module.exports = router;
