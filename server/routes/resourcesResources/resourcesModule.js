import query from "../../DB/index.js";

export async function getAllResources() {
  const data = await query("SELECT * FROM resources;");
  return data.rows;
}
