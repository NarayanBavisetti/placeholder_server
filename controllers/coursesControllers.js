const Course = require("../models/courses");

const createCourse = async (req, res) => {
  const {
    title,
    date,
    originalPrice,
    discountedPrice,
    category,
    description,
    lectures,
    educatorName,
    educatorId,
  } = req.body;
  if (!title || !date || !originalPrice || !category) {
    return res.status(401).json({ message: "please fill all the fields" });
  }
  try {
    const courseexists = await Course.findOne({ title });
    if (courseexists) {
      return res.status(422).json({ message: "Course title already exists" });
    }

    const course = await new Course({
      title,
      date,
      originalPrice,
      discountedPrice,
      category,
      description,
      lectures,
      educatorId,
      educatorName,
    });

    const isMatch = await course.save();
    if (isMatch) {
      return res.status(201).json({
        message: "Created the course successfully",
      });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error in the server part" });
  }
};

const getAllCourses = async (req, res) => {
  const courses = await Course.find();
  res.status(200).json(courses);
};

const getACourse = async (req, res) => {
  const id = req.params.id;
  const course = await Course.findById(id);
  res.status(200).json(course);
};

const getCourses = async (req, res) => {
  const courses = await Course.find();
  res.status(200).json(courses);
};

module.exports = {
  createCourse,
  getCourses,
  getAllCourses,
  getACourse,
};
