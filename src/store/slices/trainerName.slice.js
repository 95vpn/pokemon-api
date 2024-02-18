import { createSlice } from "@reduxjs/toolkit";

const trainerNameSlice = createSlice({
    name: 'trainerName',
    initialState:'',
    reducers: {
        setTrainerName:(currentValue, action) => action.payload //currentValue, el valor que tenía previamente action; recibir por argumento lo que me pasa el llamado de la función. se envía un nuevo valor al initialState. setTrainerName cambiamos el valor a ese estado
    }
});

export const {setTrainerName} = trainerNameSlice.actions;

export default trainerNameSlice.reducer;