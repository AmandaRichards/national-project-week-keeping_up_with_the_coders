import query from "../../DB/index.js";

export async function getAllResources() {
  const data = await query("SELECT * FROM resources;");
  return data.rows;
}


export async function postResources(body) {
  const week = body.week;
  const resource = body.type_of_resource;
  const data = await query(
    "INSERT INTO resources(Week,Type_of_resource) VALUES($1,$2)",
    [week, resource]
  );
}

export async function deleteResourcesByID(id) {
  console.log(id)
  const data = await query(
    "DELETE FROM resources where id=$1 RETURNING *", [id]
    )
}

export async function deleteAllResources() {
  const data = await query("DELETE FROM resources;");
}
