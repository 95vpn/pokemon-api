import React, { useRef, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setPokemonName } from '../store/slices/pokemonName.slice';
import useFetch from '../hooks/useFetch';
import PokeCard from '../components/pokedexPage/PokeCard';
import SelectType from '../components/pokedexPage/SelectType';
import './styles/pokedexPage.css'

const PokedexPage = () => {

    const [selectValue, setSelectValue] = useState('allPokemons')

    const trainerName = useSelector((store) => store.trainerName);
    const pokemonName = useSelector(store => store.pokemonName)
    const dispatch = useDispatch();

    const [pokemons, getpokemons, getPerType] = useFetch();

    useEffect(() => {
        if (selectValue==='allPokemons') {
            const url = 'https://pokeapi.co/api/v2/pokemon/?limit=30';
            getpokemons(url)
        } else {
            getPerType(selectValue);
        }
    }, [selectValue])
    console.log(getPerType)

    // console.log(pokemons)

    const textInput = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(setPokemonName(textInput.current.value.trim().toLowerCase()))
        textInput.current.value = ''
    }

    console.log(pokemonName)
    const cbFilter = () => {
        if (pokemonName) {
            return pokemons?.results.filter(element => element.name.includes(pokemonName))
        } else {
            return pokemons?.results
        }
    }

    
    return (
        <div className='pokedex'>
            <section className='poke-header'>
                <h3>
                    <span>Bienvenido {trainerName},  </span>
                    <span> Aquí podrás encontrar tu pokemon favorito</span>
                </h3>
                <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" ref={textInput} />
                    <button>Buscar</button>
                </form>
                <SelectType
                    setSelectValue={setSelectValue}
                />
                </div>
            </section>
            <section className='poke-container'>
                {
                    cbFilter()?.map(poke => (
                        <PokeCard
                            key={poke.url}
                            url={poke.url}
                        />
                    ))
                }
            </section>

        </div>
    )
}

export default PokedexPage