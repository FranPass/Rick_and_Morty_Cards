import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './actions'

const initialState = {
    myFavorites: [],
    allCharacters: []
    };

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state, 
                myFavorites: action.payload,
                allCharacters: action.payload
            }

        case REMOVE_FAV:
            return {
                ...state, 
                myFavorites: action.payload
            }

        case FILTER:
            return {
                ...state,
                myFavorites: 
                action.payload === 'all'
                ? state.allCharacters
                : state.allCharacters.filter((char)=>char.gender === action.payload)
            }

        case ORDER:
            const allCharactersCopy = [...state.allCharacters];
            return {
                ...state,
                myFavorites: 
                action.payload === "A"
                ? allCharactersCopy.sort((a, b) => a.id - b.id)
                : action.payload === "D" 
                    ? allCharactersCopy.sort((a, b) => b.id - a.id) 
                    : allCharactersCopy
            }

        default:
            return {...state}
    }
}

export default reducer