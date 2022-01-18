import { Router } from "express";
import express from "express";
import * as functionality from "../module.js";
const router = express.Router();

/* GET home page. */

router.get("/", async function (req, res) {
  const responseVideos = await functionality.getAllVideos();
  return res.json({ success: true, payload: { responseVideos } });
});

router.get("/", async function (req, res) {
  const responseResources = await functionality.getAllResources();
  return res.json({ success: true, payload: { responseResources } });
});
//Post route
router.post("/links", async function (req, res) {
  const body = req.body;
  console.log(body);
  const responseLinks = await functionality.postLinks(body);
  return res.json({ success: true, payload: { responseLinks } });
});
export default router;
