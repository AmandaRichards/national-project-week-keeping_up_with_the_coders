 import query from "../index.js";

 
const dataResourcesDelete =
"DROP TABLE  IF EXISTS  resources"
  

const dataVideosDelete =
  "DROP TABLE  IF EXISTS  videos"

const dataLinksDelete =
 "DROP TABLE IF EXISTS  links"

async function deleteResources() {
  const res = await query(dataResourcesDelete);
}
deleteResources();

async function deleteVideos() {
  const res = await query(dataVideosDelete);
}
deleteVideos();

async function deleteLinks() {
  const res = await query(dataLinksDelete);
}
deleteLinks();