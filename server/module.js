import query from "./DB/index.js";



export async function getAllResources() {
  const data = await query("SELECT * FROM resources;");
  return data.rows;
}

export async function getAllVideos() {
  const data = await query("SELECT * FROM videos;");
  return data.rows;
}

// post data functions section
export async function postLinks(body){
  const week = body.week;
  const resource=body.type_of_resource;
  const data = await query("INSERT INTO links(Week,Type_of_resource) VALUES($1,$2)",[week,resource])
}
