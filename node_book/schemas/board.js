const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment")
const connection = mongoose.createConnection("mongodb://localhost:27017/spa_mall");
 
autoIncrement.initialize(connection);

const boardSchema = new mongoose.Schema({
    userName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    writeDate: {
      type: String,
      required: true,
    },
    mainComment: {
      type: String,
      required: true,
    },
    boardId: {
      type: Number,
      required: true,
      unique: true,
    }
  });
boardSchema.plugin(autoIncrement.plugin,{ 
      model : 'Boards', 
      field : 'boardId', 
      startAt : 1,  
      increment : 1 
    });
const Board = connection.model('Boards',boardSchema);


  
module.exports = mongoose.model("Boards", boardSchema);