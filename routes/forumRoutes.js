const express = require("express");
const router = express.Router();
const {
  addQuestion,
  getAllQuestions,
  addAnswer,
  getAnswers,
} = require("../controllers/forumController");
const protect = require("../middleware/authMiddleware");

router.post("/forum", addQuestion);
router.get("/forum", getAllQuestions);
router.post("/forum/answer", addAnswer);
router.get("/forum/answer/:id", getAnswers);

module.exports = router;
