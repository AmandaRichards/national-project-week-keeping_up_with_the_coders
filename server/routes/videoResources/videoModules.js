import query from "../../DB/index.js";

export async function getAllVideos() {
  const data = await query("SELECT * FROM videos;");
  return data.rows;
}
