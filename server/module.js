import query from "./DB/index.js";

export async function getAllLinks() {
  const data = await query("SELECT * FROM links;");
  return data.rows;
}

export async function getAllResources() {
  const data = await query("SELECT * FROM resources;");
  return data.rows;
}

export async function getAllVideos() {
  const data = await query("SELECT * FROM videos;");
  return data.rows;
}
