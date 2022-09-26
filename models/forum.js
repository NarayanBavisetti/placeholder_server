const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const forumSchema = mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  comments: [
    {
      content: {
        type: String,
      },
      userName: {
        type: String,
      },
      userId: {
        type: Schema.Types.ObjectId,
      },
    },
  ],
});

const Forum = mongoose.model("forum", forumSchema);
module.exports = Forum;
