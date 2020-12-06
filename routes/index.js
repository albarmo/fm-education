const router = require("express").Router();
const userControllers = require("../controllers/userControllers");

router.get("/", (req, res) => {
  res.send("user router test okey");
});

router.post("/login", userControllers.login);
router.post("/register", userControllers.register);

module.exports = router;
