import { useState } from "react";
import axios from 'axios';
import './App.css';

function App() {
  const [pokemons, setPokemon] = useState([])
  // const fetchPokemons = () => {
  //   fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
  //     .then(response => {
  //       return response.json();
  //     }).then((data) => {
  //       setPokemon(data.results);
  //     }).catch(err => {
  //       console.log("⛔🚫", err);
  //     });
  // }
  const fetchAxiosPokemons = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((res) => {
        console.log(res.data);
        setPokemon(res.data.results);
      })
      .catch((err) => {
        console.log("❌❌", err);
      })
  }

  return (
    <div className="App">
      <h1> If you want the list of Pokemon click the Button </h1>
      <button onClick={() => { fetchAxiosPokemons() }}>Fetch Pokemon</button>
      <div>
         {/* {JSON.stringify(pokemons)}  */}
      </div>
      {pokemons.map((onepokemon, idx) => {
        return (
          <ul key={idx}>

            <li>{onepokemon.name}</li>
          </ul>
        )
      })}
    </div>
  );
}

export default App;
