import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom';
import './styles/pokeCard.css'

const PokeCard = ({ url }) => {

    const [pokemon, getpokemon] = useFetch();

    const navigate = useNavigate();

    useEffect(() => {
        getpokemon(url)
    }, [])

    const handleClick = () => {
        navigate(`/pokedex/${pokemon.id}`)
    }

    // console.log(pokemon)
    return (
        
        <article onClick={handleClick} className={pokemon?.types[0].type.name} >
            <div className={pokemon?.types[0].type.name} ></div>
            <div className='poke-info'>
                <div className={pokemon?.types[0].type.name} ></div>
                <figure>
                    <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="pokemon photo" />
                </figure>
                <h3 className='poke-title'>{pokemon?.name}</h3>
                <ul className='poke-types'>
                    {
                        pokemon?.types.map(type => (
                            <li key={type.type.url} className='slot'>{type.type.name}</li>
                        ))
                    }
                </ul>
                <p className='poke-parr'>type</p>
                <hr />
                <ul className='poke-stats'>
                    {
                        pokemon?.stats.map(stat => (
                            !stat.stat.name.includes('special') &&
                            <li key={stat.stat.url}>{stat.stat.name} <span>{stat.base_stat}</span> </li>
                        ))
                    }
                </ul>
            </div>
        </article>
        
    )
}

export default PokeCard