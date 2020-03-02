import {
    adjustAdultsBasedOnContraint, adjustRoombasedOnIncrementAdultChildContraint,
    adjustRoombasedOnDecrementAdultChildContraint, adjustRoombasedOnIncrementChildAdultContraint,
    adjustRoombasedOnDecrementChildAdultContraint
} from "./utils.js";

const INITIAL_STATE = {
    numOfRooms: 1,
    numOfAdults: 1,
    numOfChildren: 0,
    maxPersonValue: 4,
    minRoomValue: 1,
    tempVar: 0,
    disableButton: false,
}

const Reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_ROOM':
            return {
                ...state,
                numOfRooms: state.numOfRooms + action.payload,
                numOfAdults: state.numOfAdults + 1,
                disableButton: state.disableButton ? false : null
            }
        case 'REMOVE_ROOM':
            return {
                ...state,
                // numOfRooms: state.numOfRooms - action.payload,
                ...adjustAdultsBasedOnContraint(state, action.payload)
            }

        case 'INCREASE_ADULT':
            return {
                ...state,
                ...adjustRoombasedOnIncrementAdultChildContraint(state, action.payload)
            }
        case 'DECREASE_ADULT':
            return {
                ...state,
                ...adjustRoombasedOnDecrementAdultChildContraint(state, action.payload)
            }
        case 'INCREASE_CHILD':
            return {
                ...state,
                ...adjustRoombasedOnIncrementChildAdultContraint(state, action.payload)
            }
            case 'DECREASE_CHILD':
            return {
                ...state,
                ...adjustRoombasedOnDecrementChildAdultContraint(state, action.payload)
            }
        default:
            return state;
    }
}

export default Reducer;