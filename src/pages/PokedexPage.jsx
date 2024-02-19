import React, { useRef, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setPokemonName } from '../store/slices/pokemonName.slice';
import useFetch from '../hooks/useFetch';
import PokeCard from '../components/pokedexPage/PokeCard';
import SelectType from '../components/pokedexPage/SelectType';
import './styles/pokedexPage.css'
import Pagination from '../components/Pagination';

const PokedexPage = () => {

    const [selectValue, setSelectValue] = useState('allPokemons')
    const [currentPage, setCurrentPage] = useState(1);
    const pokePerPage = 10;

    const trainerName = useSelector((store) => store.trainerName);
    const pokemonName = useSelector(store => store.pokemonName)
    const dispatch = useDispatch();

    const [pokemons, getpokemons, getPerType] = useFetch();

    useEffect(() => {
        if (selectValue === 'allPokemons') {
            const url = 'https://pokeapi.co/api/v2/pokemon/?limit=50';
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
    console.log(pokemons)

    // const pokepart = pokemons && pokemons.url.slice(0, 10)

    const indexOfLastItem = currentPage * pokePerPage;
    const indexOfFirstItem = indexOfLastItem - pokePerPage;
    const currentItems = cbFilter()?.slice(indexOfFirstItem, indexOfLastItem)

    const totalPages = Math.ceil(cbFilter()?.length / pokePerPage);

    

    const paginate = pageNumber => setCurrentPage(pageNumber)
    return (
        <div className='pokedex'>
            <section className='pokedex-header'>
                <h3 className='pokedex-title'>
                    <span>Bienvenido {trainerName} </span>
                    <span> Aquí podrás encontrar tu pokemon favorito</span>
                </h3>
                <div className='pokedex-form'>
                    <form className='container-form' onSubmit={handleSubmit}>
                        <input type="text" ref={textInput} />
                        <button>Buscar</button>
                    </form>
                    <SelectType
                        setSelectValue={setSelectValue}
                    />
                </div>
            </section>
            <Pagination
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                totalPages={totalPages}
            />
            <section className='poke-container'>
                {
                    currentItems?.map(poke => (
                        <PokeCard
                            key={poke.url}
                            url={poke.url}
                        />
                    ))
                }
            </section>
            <Pagination
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                totalPages={totalPages}
            />


        </div>
    )
}

export default PokedexPage