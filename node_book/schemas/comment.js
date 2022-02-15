const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment")
const connection = mongoose.createConnection("mongodb://localhost:27017/spa_mall");
autoIncrement.initialize(connection);

const commentSchema = new mongoose.Schema({
    boardId: {
        type: Number,
        required: true,
    },
    writeDate: {
        type: Date,
        required: true,
    },
    Comment: {
        type: String,
        required: true,
    },
    commentId: {
        type: Number,
        required: true,
        unique: true,
    },
  });
commentSchema.plugin(autoIncrement.plugin,{ 
    model : 'Comments', 
    field : 'commentId', 
    startAt : 1,  
    increment : 1 });
const Comment = connection.model('Comments',commentSchema);

  
module.exports = mongoose.model("Comments", commentSchema);