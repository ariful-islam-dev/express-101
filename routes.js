const { homeController, aboutController, helpController } = require("./controllers");

const router = require("express").Router();

router.get("/", homeController);
router.get("/about", aboutController);
router.get("/help", helpController);

module.exports = router;
