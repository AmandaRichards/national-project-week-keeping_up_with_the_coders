import query from "../../DB/index.js";

export async function getAllWeekResources(id) {
 
  // console.log(id)
  const data = await query("SELECT * FROM resources WHERE week = $1;",[id]);
  return data.rows;
}

export async function getAllResources(id) {
 
 
  const data = await query("SELECT * FROM resources;");
  return data.rows;
}


export async function postResources(body) {
  const week = body.week;
  const resource = body.Type_of_resource;
  const title = body.Name_of_resource;
  // console.log(week)
  // console.log(resource)
  const data = await query(
    "INSERT INTO resources(Week, Name_of_resource, Type_of_resource) VALUES($1,$2, $3)",
    [week, title, resource]
  );
  return data.rows
}

export async function deleteResourcesByID(id) {
  console.log(id)
  const data = await query(
    "DELETE FROM resources where id=$1 RETURNING *", [id]
    )
}

export async function deleteAllResources() {
  const data = await query("DELETE FROM resources;");
  return data.rows
}
