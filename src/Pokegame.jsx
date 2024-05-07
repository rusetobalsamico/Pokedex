import Pokedex from "./Pokedex";

function Pokegame() {
  const defaultProps = {
    pokemon: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikechu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
    ],
  };

  const hand1 = [];
  const hand2 = [...defaultProps.pokemon];
  //console.log('HAND 2 =>', hand2);
  while (hand1.length < hand2.length) {
    let randomId = Math.floor(Math.random() * hand2.length);
    /* console.log('RANDOM ID =>', randomId); */
    let randomPokemon = hand2.splice(randomId, 1)[0];
    hand1.push(randomPokemon);
  }

  const exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
  const exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

  /*   console.log('HAND 1 =>', hand1);
  console.log('HAND 2 =>', hand2); */

  return (
    <>
      <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
      <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
    </>
  );
}

export default Pokegame;
