const router = require("express").Router();
const colorRoutes = require("./colors");

// color routes
router.use("/colors", colorRoutes);

module.exports = router;
