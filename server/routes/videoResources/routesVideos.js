import { Router } from "express";
import express from "express";
import * as functionality from "../videoResources/videoModules.js";
const routerVideo = express.Router();

routerVideo.get("/", async function (req, res) {
  const responseVideos = await functionality.getAllVideos();
  return res.json({ success: true, payload: { responseVideos } });
});

export default routerVideo;
