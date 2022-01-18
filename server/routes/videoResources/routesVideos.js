import express from "express";
import * as functionality from "./videoModule.js";
const routerVideo = express.Router();

routerVideo.get("/", async function (req, res) {
  const responseVideo = await functionality.getAllVideo();
  return res.json({ success: true, payload: { responseVideo } });
});

export default routerVideo;
