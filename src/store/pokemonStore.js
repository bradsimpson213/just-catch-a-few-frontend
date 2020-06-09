
import { baseUrl } from '../config'

const initialState = [];

const LOAD = "pokedex/pokemon/LOAD";

export const load = (pokemon) => ({ type: LOAD, pokemon });

export const loadPokemon = () => async (dispatch) => {
  
    const response = await fetch(`${baseUrl}/pokemon`);
    if (response.ok) {
        const pokemon = await response.json();
        console.log(pokemon)
        dispatch(load(pokemon));
    };
};

export default function pokeReducer(state = initialState, action) {
   
    Object.freeze(state);
    if(action.type === LOAD){
        const newState = [...state]
        newState.push({ pokemon: action.pokemon });
        console.log(newState);
        return newState;
    } else return state;
};