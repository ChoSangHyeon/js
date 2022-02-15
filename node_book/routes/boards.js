const express = require("express");
const Boards = require("../schemas/board");
const Comments = require("../schemas/comment");
const router = express.Router();


router.get('/', (req, res) => {
  res.send("this is root page")
});

router.get('/boards', async (req, res) => {
  const board = await Boards.find().sort({writeDate:-1});

  res.json({ board, });
});

router.post('/boards', async (req, res) => {
  const { userName, title, mainComment } = req.body;
  const nowday = new Date();
  console.log(nowday);
  await Boards.create({userName, title, mainComment,writeDate : nowday });

  res.json({ result: "success" });

});

router.get('/boards/:userName', async (req, res) => {
  const {userName} = req.params.userName;
  const [boards] = await Boards.find({ userName }).sort({writeDate:-1});

  res.json({boards,});
});


router.delete("/boards/:boardId", async (req, res) => {
  const { boardId } = req.params;

  const existsCarts = await Boards.find({ boardId: Number(boardId) });
  if (existsCarts.length > 0) {
    await Boards.deleteOne({ boardId: Number(boardId) });
    await Comments.deleteMany({ boardId: Number(boardId) })
  }

  res.json({ result: "success" });
});

router.put("/boards/:boardId", async (req, res) => {
  const { boardId } = req.params;
  const { userName, title, mainComment } = req.body;
  const nowday = new Date();

  const existsCarts = await Boards.find({boardId: Number(boardId) });
  if (!existsCarts.length) {
    await Boards.create({userName, title, mainComment,writeDate : nowday,boardId });
  } else {
    
    await Boards.updateMany({boardId: Number(boardId)},{ $set: {userName,title, mainComment,writeDate : nowday, } } );
  }

  res.json({ success: true });
})

router.get('/boards/:boardId', async (req, res) => {
  const {boardId} = req.params;
  const [comments] = await Comments.find({boardId}).sort({writeDate:-1});

  res.json({comments,});
});

router.post('/boards/:boardId', async (req, res) => {
  const {boardId} = req.params;
  const { Comment } = req.body;
  const nowday = new Date();
  if (!Comment){
    res.json({result:"댓글내용을 입력해주세요"})
  }

  await Comments.create({boardId, Comment,writeDate : nowday });

  res.json({ result: "success" });

});

router.put("/boards/comment/:commentId", async (req, res) => {
  const { commentId } = req.params.commentId;
  const { Comment } = req.body;
  const nowday = new Date();
  if (!Comment){
    res.json({result:"댓글내용을 입력해주세요"})
  }

  const existsCarts = await Comments.find({commentId: Number(commentId) });
  if (!existsCarts.length) {
    await Comments.create({boardId, Comment,writeDate : nowday });
  } else {
    await Comments.updateOne({commentId: Number(commentId)},{ $set: { Comment,writeDate : nowday, } } );
  }

  res.json({ success: true });
});

router.delete("/boards/comment/:commentId", async (req, res) => {
  const { commentId } = req.params.commentId;

  const existsCarts = await Comments.find({ commentId: Number(commentId) });
  if (existsCarts.length > 0) {
    await Comments.deleteOne({ bcommentId: Number(commentId) })
  }

  res.json({ result: "success" });
});

module.exports = router;

