import bodyParser from 'body-parser';
import { Router } from "express";
import express from "express";
import * as functionality from "../linkResources/linksModule.js";
const routerLink = express.Router();
const urlencodedParser =bodyParser.urlencoded({extended:false})

/* GET home page. */
routerLink.get("/", async function (req, res) {
  const responseLinks = await functionality.getAllLinks();
 return res.json({success:true,payload:{responseLinks}})
});

routerLink.get("/:id", async function (req, res) {
  const {id}=req.params;
  const numToId=Number(id);
  const responseLinks = await functionality.getAllWeeklyLinks(numToId);
 return res.json({success:true,payload:{responseLinks}})
});


// post links 
routerLink.post("/", urlencodedParser,async function (req, res) {
  const head = req.body;
  console.log(head);
  const responseLinks = await functionality.postLinks(head);
  return res.json({ success: true, payload: { responseLinks } });
});


// delete link by id
routerLink.delete("/:id", async function (req, res) {
  let id = Number(req.params.id);
  const data = await functionality.deleteLinksByID(id);
  return res.json({ success: true, payload: { data } })
});

// delete all links

routerLink.delete("/", async function (req, res) {
  const data = await functionality.deleteAllLinks();
  return res.json({success:true,payload:{data}})

});

export default routerLink;
