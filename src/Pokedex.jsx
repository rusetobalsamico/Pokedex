import Pokecard from "./Pokecard";
import "./Pokedex.css";

function Pokedex({ pokemon, exp, isWinner }) {
  // const defaultProps = {
  //   pokemon: [
  //     { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
  //     { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
  //     { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
  //     { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
  //     { id: 25, name: "Pikechu", type: "electric", base_experience: 112 },
  //     { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
  //     { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
  //     { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
  //   ],
  // };

  let title;
  if (isWinner) {
    title = <h1 className="Pokedex-winner">WINNING HAND</h1>;
  } else {
    title = <h1 className="Pokedex-looser">LOOSER HAND</h1>;
  }

  return (
    <div className="Pokedex">
      {/* <h2>POKEDEX</h2> */}
      <h4>TOTAL EXPERIENCE {exp}</h4>
      {title}
      <div className="Pokedex-cards">
        {pokemon.map((poke) => {
          return (
            <Pokecard
              key={poke.id}
              id={poke.id}
              name={poke.name}
              type={poke.type}
              exp={poke.base_experience}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Pokedex;
