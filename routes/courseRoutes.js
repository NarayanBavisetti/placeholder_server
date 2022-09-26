const express = require("express");
const router = express.Router();
const {createCourse, getCourses} = require("../controllers/coursesControllers")
const protect  = require("../middleware/authMiddleware")

router.post("/educator/course",createCourse);
router.get("/educator/mycourses/:id",getCourses);

module.exports = router;