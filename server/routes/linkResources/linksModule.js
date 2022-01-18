import query from "../../DB/index.js";

export async function getAllLinks() {
  const data = await query("SELECT * FROM links;");
  return data.rows;
}