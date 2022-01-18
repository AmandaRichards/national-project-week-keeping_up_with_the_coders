import query from "../index.js";

const dataResources =
  "CREATE TABLE IF NOT EXISTS resources(id SERIAL PRIMARY KEY, Week INT, Type_of_resource TEXT) RETURNING *;";

const dataVideos =
  "CREATE TABLE IF NOT EXISTS videos(id SERIAL PRIMARY KEY, Week INT, Type_of_resource TEXT) RETURNING *;";

const dataLinks =
  "CREATE TABLE IF NOT EXISTS links(id SERIAL PRIMARY KEY, Week INT, Type_of_resource TEXT) RETURNING *;";

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
