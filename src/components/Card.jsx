/* eslint-disable react/prop-types */
import backImage from "../assets/back.jpg";
import Tilt from "react-parallax-tilt";
import "../assets/css/card.css";
export default function Card({ key, pokemon, shufflePokemon }) {
  return (
    <>
      <li className="card-item center" key={key}>
        <Tilt>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-back">
                <img src={backImage} className="back-card-image" alt="card" />
              </div>
              <div
                onClick={() => {
                  shufflePokemon(pokemon.uID);
                }}
                className="flip-card-front card"
              >
                <div className="card-image center">
                  <img src={pokemon.image} alt={pokemon.name} />
                </div>
                <div className="card-details center">
                  <ul>
                    <li className="p-name ">{pokemon.name}</li>
                    <li className="center">
                      <span>Pokédex : </span>
                      {pokemon.id}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Tilt>{" "}
      </li>
    </>
  );
}
