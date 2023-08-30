export default async function GetAPokemon({ id, shiny }) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const { name, sprites } = await response.json();
  const image = sprites[shiny ? "front_shiny" : "front_default"];

  return { name, image, id, shiny };
}
