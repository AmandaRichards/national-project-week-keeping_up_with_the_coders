import query from "../index.js";

const dataResources =
  "CREATE TABLE IF NOT EXISTS resources(id SERIAL PRIMARY KEY, Week INT, Name_of_resource TEXT, Type_of_resource TEXT );";

const dataVideos =
  "CREATE TABLE IF NOT EXISTS videos(id SERIAL PRIMARY KEY, Week INT,  Name_of_resource TEXT, Type_of_resource TEXT);";

const dataLinks =
  "CREATE TABLE IF NOT EXISTS links(id SERIAL PRIMARY KEY, Week INT, Name_of_resource TEXT, Type_of_resource TEXT);";

async function createResources() {
  const res = await query(dataResources);
}
createResources();

async function createVideos() {
  const res = await query(dataVideos);
}
createVideos();

async function createLinks() {
  const res = await query(dataLinks);
}
createLinks();
//he