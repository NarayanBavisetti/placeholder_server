const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const courseSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  originalPrice: {
    type: Number,
    required: true,
  },
  description:{
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  discountedPrice: {
    type: Number,
  },
  date: {
    type: Number,
    require:true
  },
  lectures: [
    {
      title: String,
      topic: String,
      video: String,
      description: String,
    },
  ],
  educatorId:{
     type: Schema.Types.ObjectId,
     required:true
  },
  educatorName:{
    type:String,
    required:true,
  }
});

const Course = mongoose.model("courses", courseSchema);
module.exports = Course;
