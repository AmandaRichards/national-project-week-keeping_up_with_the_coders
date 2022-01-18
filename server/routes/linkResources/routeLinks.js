import { Router } from "express";
import express from "express";
import * as functionality from "../linkResources/linksModule.js";
const routerLink = express.Router();

/* GET home page. */
routerLink.get("/", async function (req, res) {
  const responseLinks = await functionality.getAllLinks();
 return res.json({success:true,payload:{responseLinks}})
});
export default routerLink;