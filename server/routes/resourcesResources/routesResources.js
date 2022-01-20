import { Router } from "express";
import express from "express";
import * as functionality from "../resourcesResources/resourcesModule.js";
import bodyParser from 'body-parser';
const routerResources = express.Router();

const urlencodedParser =bodyParser.urlencoded({extended:false})




routerResources.get("/", async function (req, res) {
  const responseResources = await functionality.getAllResources();
  return res.json({ success: true, payload: { responseResources } });
});



// post resources
routerResources.post("/", urlencodedParser, async function (req, res) {
  const head = req.body;
  console.log(head);
  const responseResources = await functionality.postResources(head);
  return res.json({ success: true, payload: { responseResources } });
});


// delete resource by id
routerResources.delete("/:id", async function (req, res) {
  let id = Number(req.params.id);
  const data = await functionality.deleteResourcesByID(id);
  return res.json({ success: true, payload: { data } })
})

// delete all resources

routerResources.delete("/", async function (req, res) {
  const data = await functionality.deleteAllResources();
  return res.json({success:true,payload:{data}})

});

export default routerResources;
