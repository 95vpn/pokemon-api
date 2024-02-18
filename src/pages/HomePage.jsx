import React, {useRef} from 'react'
import { setTrainerName } from '../store/slices/trainerName.slice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

const textInput = useRef();
const dispatch = useDispatch(); //Cuando vaya a utilizar el seter de un estado global, necesariamente tengo que despacharla
// const trainerName = useSelector((store)=>store.trainerName); //obtener el valor de mi estado, extraer la informacion que hay en la store
const navigate = useNavigate();

const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setTrainerName(textInput.current.value.trim())) //traer el set, lo que caturo en el input.. lo que yo le estoy enviando a la funcion
        //para enviar a la ruta pokedex
    navigate('pokedex')
}


  return (
    <div>
        <h1>¡Hola Entrenador!</h1>
        <h2>Para poder comenzar dame tu nombre</h2>
        <form onSubmit={handleSubmit} >
            <input type='text' ref={textInput} />
            <button>Comenzar</button> 
        </form>

    </div>
  )
}

export default HomePage