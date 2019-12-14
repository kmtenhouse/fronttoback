const router = require("express").Router();
const colorsController = require("../../controllers/colorsController");

// Matches with "/api/colors"
router.route("/")
  .get(colorsController.findAll)
  .post(colorsController.create);

// Matches with "/api/colors/:id"
router
  .route("/:id")
  .get(colorsController.findById)
  .put(colorsController.update)
  .delete(colorsController.remove);

module.exports = router;
