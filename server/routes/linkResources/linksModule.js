import query from "../../DB/index.js";

export async function getAllLinks() {
  const data = await query("SELECT * FROM links;");
  return data.rows;
}

export async function postLinks(body) {
  const week = body.week;
  const resource = body.type_of_resource;
  const data = await query(
    "INSERT INTO links(Week,Type_of_resource) VALUES($1,$2)",
    [week, resource]
  );
<<<<<<< HEAD
}
=======
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


>>>>>>> 90f7cf46c857775728dc9d477892cdb366e44879
