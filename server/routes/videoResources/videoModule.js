import query from "../../DB/index.js";

<<<<<<< HEAD
export async function getAllVideo() {
  const data = await query("SELECT * FROM videos;");
  return data.rows;
=======
export async function getAllVideos() {
  const data = await query("SELECT * FROM videos;");
  return data.rows;
}

export async function postVideos(body) {
  const week = body.week;
  const resource = body.type_of_resource;
  const data = await query(
    "INSERT INTO videos(Week,Type_of_resource) VALUES($1,$2)",
    [week, resource]
  );
}

export async function deleteVideosByID(id) {
  console.log(id)
  const data = await query(
    "DELETE FROM videos where id=$1 RETURNING *", [id]
    )
}

export async function deleteAllVideos() {
  const data = await query("DELETE FROM videos;");
>>>>>>> 90f7cf46c857775728dc9d477892cdb366e44879
}