import query from "../../DB/index.js";

export async function getAllLinks() {
  const data = await query("SELECT * FROM links;");
  return data.rows;
}

export async function getAllWeeklyLinks(id) {
  const data = await query("SELECT * FROM links WHERE week = $1 ;",[id]);
  return data.rows;
}

export async function postLinks(body) {
  const week = body.week;
  const resource = body.Type_of_resource
  const title = body.Name_of_resource;
  const data = await query(
    "INSERT INTO links(Week, Name_of_resource, Type_of_resource) VALUES($1,$2, $3)",
    [week, title, resource]
  );

  return data.rows
}

export async function deleteLinksByID(id) {
  console.log(id)
  const data = await query(
    "DELETE FROM links where id=$1 RETURNING *", [id]
    )
}

export async function deleteAllLinks() {
  const data = await query("DELETE FROM links;");
}


