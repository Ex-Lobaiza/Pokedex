import React from 'react';
import './style.css'
import typeColors from '../Chips/pokemonTypes';

function card({ pokemon}) {
    return (
    <div className='card'>
        <div className='cardImg'> 
            <img src={pokemon.sprites.front_default} alt=""></img>
        </div> 
        <div className='cardName'>
            {pokemon.name}
        </div>
        <div className='cardTypes'>
            {pokemon.types.map( type => {
                return (
                <div className='cardType' style={{backgroundColor: typeColors[type.type.name]}}>
                {type.type.name}
                </div>
                )
            })}
        </div>
        <div className='cardInfo'>
            <div className='cardData cardDataWeight'>
                <p className='title'>Peso</p>
                <p>{pokemon.weight}</p>
            </div>
            <div className='cardData cardDataHeight'>
                <p className='title'>Altura</p>
                <p>{pokemon.height}</p>
            </div>
            <div className="CardData CarDataAbility">
                    <p className="title">Ability</p>
                    <p>{pokemon.abilities[0].ability.name}</p>
                </div>
        </div>


     </div>
    )
}
export default card;