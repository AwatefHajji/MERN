import { useState } from "react";
import './App.css';

function App() {
  const [pokemons, setPokemon] = useState([])
  const fetchPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(response => {
        return response.json();
      }).then((data) => {
        setPokemon(data.results);
      }).catch(err => {
        console.log("⛔🚫", err);
      });
  }
  return (
    <div className="App">
      <h1> If you want the list of Pokemon click the Button </h1>
      <button onClick={() => { fetchPokemons() }}>Fetch Pokemon</button>
      <div>
        {/* {JSON.stringify(pokemons)} */}
      </div>
      {pokemons.map((onepokemon, idx) => {
        return (
          <ul key={idx}>

            <li>{onepokemon.name}</li>
            {/* <td>{oneHero.biography.fullName ? oneHero.biography.fullName : "N/A"}</td>
                <td>{oneHero.biography.publisher}</td> */}
          </ul>
        )
      })}
    </div>
  );
}

export default App;
