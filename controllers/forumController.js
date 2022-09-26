const Forum = require("../models/forum");

const addQuestion = async (req, res) => {
  const { question, userName, userId, content } = req.body;

  if (!question || !userName || !userId) {
    return res.status(401).json({ message: "please fill all the fields" });
  }
  try {
    const questionexists = await Forum.findOne({ question });
    if (questionexists) {
      return res.status(422).json({ message: "Question already exists" });
    }

    const forum = await new Forum({
      question,
      userName,
      userId,
      content,
    });

    const isMatch = await forum.save();
    if (isMatch) {
      return res.status(201).json({
        message: "Uploaded the question successfully",
      });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error in the server part" });
  }
};

const getAllQuestions = async (req, res) => {
  const courses = await Forum.find();
  res.status(200).json(courses);
};

const addAnswer = async (req, res) => {
  const { content, userName, userId, id } = req.body;
  if (!content || !userName || !userId) {
    return res.status(401).json({ message: "please fill all the fields" });
  }
  try {
    const forum = {
      userName,
      userId,
      content,
    };

    Forum.findOneAndUpdate(
      { _id: id },
      { $push: { comments: forum } },
      function (error) {
        if (error) {
          return res.status(501).json({ message: "Error in mongodb" });
        } else {
          return res.status(200).json({ message: "Successfull" });
        }
      }
    );
  } catch (error) {
    return res.status(500).json({ message: "Error in the server part" });
  }
};

const getAnswers = async (req, res) => {
  const id = req.params.id;
  const answers = await Forum.findById(id);
  res.status(200).json(answers);
};

module.exports = {
  addQuestion,
  getAllQuestions,
  addAnswer,
  getAnswers,
};
