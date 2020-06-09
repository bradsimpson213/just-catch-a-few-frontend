const initState = {
    pokemon: [],
};

const LOAD = "pokedex/pokemon/LOAD";

export const load = (pokemon) => ({ type: LOAD, pokemon });

export const loadPokemon = () => async (dispatch) => {
    const pokeId = Math.floor((Math.random()*899)+1);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`);
    if (response.ok) {
        const pokemon = await response.json();
        console.log(pokemon)
        dispatch(load(pokemon));
    };
};

export default function pokeReducer(state = initState, action) {
  Object.freeze(state);
  if(action.type === LOAD){
    return {
      ...state,
      pokemon: action.pokemon,
    } } 
    else return state;
}