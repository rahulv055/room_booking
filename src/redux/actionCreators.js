export const addRoom = (val) => {
    return {
        type:'ADD_ROOM',payload: val
    }
};

export const removeRoom = (val) => {
    return {
        type:'REMOVE_ROOM',payload: val
    }
};

export const increaseAdult = (val) => {
    return {
        type:'INCREASE_ADULT',payload: val
    }
};

export const decreaseAdult = (val) => {
    return {
        type:'DECREASE_ADULT',payload: val
    }
};




export const increaseChildren = (val) => {
    return {
        type:'INCREASE_CHILD',payload: val
    }
};

export const decreaseChildren = (val) => {
    return {
        type:'DECREASE_CHILD',payload: val
    }
};