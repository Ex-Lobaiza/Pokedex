import React, {useState} from 'react';
import axios from 'axios';
import './App.css';
import Mobile from '../src/Media/Mobile.png'
import Card from './Components/Card';


const App = ()  => {
  const[pokemon, setPokemon] = useState('');
  const [pokemonData, setPokemonData] = useState([])
  const [pokemonType, setPokemonType] = useState('')

    const getPokemon = async () => {
      const toArray = [];
      try{
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const res = await axios.get(url)
        toArray.push(res.data);
        setPokemonType(res.data.types[0].type.name);
        setPokemonData(toArray);
        console.log(res)
      } catch(e){
        console.log(e)
      }
    };

    const handleChange = (e) => {
      setPokemon(e.target.value.toLowerCase());
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      getPokemon();
    }

  return (
    <div className="App">
      <img src={Mobile} className='Header' alt='Pokedex'/>
      <form onSubmit={handleSubmit}>
        <div>
        <label className='searchContainer'>
          <input className='mainSearch' type='text'
          onChange={handleChange} 
          placeholder='Que pokémon estás buscando?'/>
          <button className='buttonSearch'></button>
        </label>
        </div>
      </form>
      {pokemonData.map((data) => {
        return(
          <div className='card'>
             <div className='grid-container'>
          {pokemonData.map((pokemon, i) => {
            return <Card key={i} pokemon={pokemon} />
          })}
          </div>
          </div>
        )
      })}
      <footer className= 'main-footer'>
              <p>Pokedex - Hecho con ❤️ por Exe Lobaiza</p>
            </footer>
    </div>
  );
};

export default App;

{/* <img src={data.sprites["front_default"]} alt='Esto es un Pokemon' />
            <div className='divTable'>
              <div className='divTableBody'/>
              <div className='divTableRow'>
                <div className='divTableCell'>Type</div>
                <div className='divTableCell Type'>{pokemonType}</div>
                </div> 
                <div className='divTableRow'>
                <div className='divTableCell'>Height</div>
                <div className='divTableCell'>{''}{Math.round(data.height * 3.9)}</div>
                </div>
                <div className='divTableRow'>
                <div className='divTableCell'>Weight</div>
                <div className='divTableCell'>{''}{Math.round(data.weight / 4.3)} kg</div>
                </div>
            </div> */}