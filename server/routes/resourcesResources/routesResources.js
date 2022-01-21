import bodyParser from 'body-parser';
import { Router } from "express";
import express from "express";
import * as functionality from "../resourcesResources/resourcesModule.js";

const routerResources = express.Router();
const urlencodedParser =bodyParser.urlencoded({extended:false})




routerResources.get("/:id", async function (req, res) {
  const {id}=req.params;
  const num=Number(id)
  console.log(num)
  const responseResources = await functionality.getAllWeekResources(num);
  return res.json({ success: true, payload: { responseResources } });
});

//get all data
routerResources.get("/", async function (req, res) {

  const responseResources = await functionality.getAllResources();
  return res.json({ success: true, payload: { responseResources } });
});


// post resources
routerResources.post("/", urlencodedParser, async function (req, res) {
  const head = req.body;
  console.log(head);
  const responseResources = await functionality.postResources(head);
  return res.json({redirect: "http://localhost:3000/contentpage"});
});


// delete resource by id
routerResources.delete("/:id", async function (req, res) {
  let id = Number(req.params.id);
  const data = await functionality.deleteResourcesByID(id);
  return res.json({redirect: "http://localhost:3000/contentpage"})
})

// delete all resources

routerResources.delete("/", async function (req, res) {
  const data = await functionality.deleteAllResources();
  return res.json({success:true,payload:{data}})

});

export default routerResources;
