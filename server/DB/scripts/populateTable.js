import query from "../index.js";
import { dataResources, dataVideo, dataLink } from "../../dummy-data/data.js";

async function populateDataResources() {
  for (let i = 0; i < dataResources.length; i++) {
    const week = dataResources[i].week;
    const external = dataResources[i].external;
    const name = dataResources[i].name;
    const res = await query(
      "INSERT INTO resources(Week, Name_of_resource, Type_of_resource) VALUES ($1, $2, $3) RETURNING *",
      [week, name, external]
    );
    console.log(res);
  }
}

populateDataResources();
console.log(populateDataResources);

async function populateDataVideos() {
  for (let i = 0; i < dataVideo.length; i++) {
    const week = dataVideo[i].week;
    const external = dataVideo[i].external;
    const name = dataVideo[i].name
    const res = await query(
      "INSERT INTO videos(Week, Name_of_resource, Type_of_resource) VALUES ($1, $2, $3) RETURNING *",
      [week, name, external]
    );
  }
}

populateDataVideos();
console.log(populateDataVideos);

async function populateDataLinks() {
  for (let i = 0; i < dataLink.length; i++) {
    const week = dataLink[i].week;
    const external = dataLink[i].external;
    const name = dataLink[i].name;
    const res = await query(
      "INSERT INTO links(Week, Name_of_resource, Type_of_resource) VALUES ($1, $2, $3) RETURNING *",
      [week, name, external]
    );
  }
}

populateDataLinks();
console.log(populateDataLinks);
