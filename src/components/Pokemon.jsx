import { v4 as uuidv4 } from "uuid";

export default async function GetAPokemon({ id, shiny }) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const { name, sprites } = await response.json();
  const image = sprites[shiny ? "front_shiny" : "front_default"];
  const uID = uuidv4();

  const color = shiny ? "shiny" : "not-shiny";
  return { name, image, id, color, uID };
}
