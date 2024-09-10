import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom';
import './styles/pokeIdPage.css'

const PokeIdPage = () => {


  const [pokeData, getPokeData] = useFetch();
  const param = useParams();

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${param.id}`
    getPokeData(url)
  }, [])

  console.log(pokeData)
  { console.log(pokeData?.stats[0].base_stat) }

  return (
    <section className='container-pokeid'>
      <div className={pokeData?.types[0].type.name}></div>
      <div className='pokeid-info'>
        <div className={pokeData?.types[0].type.name}></div>
        <figure>
          <img src={pokeData?.sprites.other['official-artwork'].front_default} alt="pokemon photo" width={200} height={200} />
        </figure>
      </div>
      <span className='pokeid-span'>#{pokeData?.id}</span>

      <hr className='line' />
      <h3 className='pokeid-title'>{pokeData?.name}</h3>
      <hr />
      <ul className='lista1'>
        <li>weight: <span>{pokeData?.weight}</span></li>
        <li>heigth: <span>{pokeData?.height}</span></li>
      </ul>

      <div className='listas'>
        <div className='lista2'>
          <ul >Type
            <div className='lista2-1'>
              {
                pokeData?.types.map(type => (
                  <li key={type.type.url}>{type.type.name}</li>
                ))
              }
            </div>
          </ul>
        </div>
        <div className='lista3'>
          <ul >Abilities
            <div className='lista3-1'>
              {
                pokeData?.abilities.map(ability => (
                  <li key={ability.ability.url}>{ability.ability.name}</li>
                ))
              }
            </div>
          </ul>
        </div>
      </div>
      <div className='caja-padre'>
        <div className='contenedor'>
          <span>Stats</span>
          <div className='skills'>
            <ul className='list'>
              {
                pokeData?.stats.map(stat => (
                  !stat.stat.name.includes('special') &&
                  <li key={stat.stat.url}>
                    <span>{stat.stat.name}:</span>
                    <div className='stat'>
                      <span  style={{ width: `${(stat.base_stat / 150) * 100}%` }}></span>
                      <p>{stat.base_stat} / 150</p>
                    </div>
                  </li>
                ))
              }
              <div className='menu'>
                <div id='html-menu'></div>
              </div>
            </ul>

          </div>
        </div>
      </div>

      <div className='movements'>
        <span>Movements</span>
        <ul className='list-moves'>
          {
            pokeData?.moves.map(move => (
              <li key={move.move.url}>{move.move.name}</li>
            ))
          }
        </ul>
      </div>

    </section>
  )
}

export default PokeIdPage