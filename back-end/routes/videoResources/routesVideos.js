import express from "express";
import * as functionality from "./videoModule.js";
const routerVideo = express.Router();

/* GET home page */
routerVideo.get("/", async function (req, res) {
  const responseVideo = await functionality.getAllVideos();
  return res.json({ success: true, payload: { responseVideo } });
});
export default routerVideo;

// post videos
routerVideo.post("/", async function (req, res) {
  const body = req.body;
  console.log(body);
  const responseVideos = await functionality.postVideos(body);
  return res.json({ success: true, payload: { responseVideos } });
});

// delete video by id

routerVideo.delete("/:id", async function (req, res) {
  let id = Number(req.params.id);
  const data = await functionality.deleteVideosByID(id);
  return res.json({ success: true, payload: { data } });
})

// delete all videos

routerVideo.delete("/", async function (req, res) {
  const data = await functionality.deleteAllVideos();
  return res.json({success:true,payload:{data}})

});
