const express = require("express");
const router = express.Router();
const {
  createCourse,
  getCourses,
  getAllCourses,
  getACourse,
} = require("../controllers/coursesControllers");
const protect = require("../middleware/authMiddleware");

router.post("/educator/course", createCourse);
router.get("/educator/mycourses/:id", getCourses);
router.get("/courses", getAllCourses);
router.get("/course/:id", getACourse);

module.exports = router;
