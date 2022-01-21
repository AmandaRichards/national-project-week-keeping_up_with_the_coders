import query from "../../DB/index.js";

export async function getAllVideos() {
  const data = await query("SELECT * FROM videos;");
  return data.rows;
}

export async function getAllWeeklyVideos(id) {
  console.log(id)
  const data = await query("SELECT * FROM videos WHERE week =$1;",[id]);
  return data.rows;
}

export async function postVideos(body) {
  const week = body.week;
  const resource = body.Type_of_resource;
  const data = await query(
    "INSERT INTO videos(Week,Type_of_resource) VALUES($1,$2)",
    [week, resource]
  );

  return data.rows
}

export async function deleteVideosByID(id) {
  // console.log(id)
  const data = await query(
    "DELETE FROM videos where id=$1 RETURNING *", [id]
    )
}

export async function deleteAllVideos() {
  const data = await query("DELETE FROM videos;");
}