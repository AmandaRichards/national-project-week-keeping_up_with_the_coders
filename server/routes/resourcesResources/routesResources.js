import { Router } from "express";
import express from "express";
import * as functionality from "../resourcesResources/resourcesModule.js";
const routerResources = express.Router();

routerResources.get("/", async function (req, res) {
  const responseResources = await functionality.getAllResources();
  return res.json({ success: true, payload: { responseResources } });
});

export default routerResources;
