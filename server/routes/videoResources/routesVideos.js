import bodyParser from 'body-parser';
import express from "express";
import * as functionality from "./videoModule.js";
const routerVideo = express.Router();

const routerResources = express.Router();
const urlencodedParser =bodyParser.urlencoded({extended:false})

routerVideo.get("/", async function (req, res) {
  const responseVideo = await functionality.getAllVideos();
  return res.json({ success: true, payload: { responseVideo } });
});

routerVideo.get("/:id", async function (req, res) {
  const {id}=req.params;
  const numToId=Number(id);
  const responseVideo = await functionality.getAllWeeklyVideos(numToId);
  return res.json({ success: true, payload: { responseVideo } });
});


// post videos
routerVideo.post("/", urlencodedParser,async function (req, res) {
  const head = req.body;
  console.log(head);
  const responseVideos = await functionality.postVideos(head);
  return res.json({ success: true, payload: { responseVideos } });
});

// delete video by id

routerVideo.delete("/:id", async function (req, res) {
  let id = Number(req.params.id);
  const data = await functionality.deleteVideosByID(id);
  return res.json({redirect: "http://localhost:3000/contentpage"})
})

// delete all videos

routerVideo.delete("/", async function (req, res) {
  const data = await functionality.deleteAllVideos();
  return res.json({success:true,payload:{data}})

});

export default routerVideo;