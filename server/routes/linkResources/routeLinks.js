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

// post links 
routerLink.post("/", async function (req, res) {
  const body = req.body;
  console.log(body);
  const responseLinks = await functionality.postLinks(body);
  return res.json({ success: true, payload: { responseLinks } });
});


// delete link by id
routerLink.delete("/:id", async function (req, res) {
  let id = Number(req.params.id);
  const data = await functionality.deleteLinksByID(id);
  return res.json({ success: true, payload: { data } })
})

// delete all links

routerLink.delete("/", async function (req, res) {
  const data = await functionality.deleteAllLinks();
  return res.json({success:true,payload:{data}})

});


