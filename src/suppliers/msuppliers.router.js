const router = require("express").Router({ mergeParams: true });
const controller = require("./msuppliers.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").get(controller.list).all(methodNotAllowed);

router.route("/").post(controller.create).all(methodNotAllowed);

router
  .route("/:supplierId")
  .get(controller.list)
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed);

module.exports = router;
