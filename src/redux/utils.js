// export const adjustAdultsCountBasedOnIncrementRoomContraint = (state,payload)=>{
//   var  newState={...state,numOfRooms:state.numOfRooms-payload};
// }


export const adjustAdultsBasedOnContraint=(state,payload) =>{
  var  newState={...state,numOfRooms:state.numOfRooms-payload};
    if(newState.maxPersonValue*newState.numOfRooms < (newState.numOfAdults+newState.numOfChildren)){
       newState.numOfAdults=(newState.maxPersonValue*newState.numOfRooms);
       newState.numOfChildren=0;
       newState.disableButton ? newState.disableButton=false : newState.disableButton=null
    }
      return newState;
}

export const adjustRoombasedOnIncrementAdultChildContraint=(state,payload) =>{
  var  newState={...state,numOfAdults:state.numOfAdults+payload};
    if((newState.numOfAdults+newState.numOfChildren)===20 && newState.numOfRooms===5){
       newState.disableButton=true;
       return newState;
    }
    if(newState.maxPersonValue*newState.numOfRooms < (newState.numOfAdults+newState.numOfChildren)){
      newState.numOfRooms=newState.numOfRooms+payload;
    }
      return newState;
}

export const adjustRoombasedOnDecrementAdultChildContraint=(state,payload) =>{
  var  newState={...state,numOfAdults:state.numOfAdults-payload};
         newState.disableButton=false;
    // if((newState.numOfAdults+newState.numOfChildren)===20 && newState.numOfRooms===5){
    //    newState.disableButton=true;
    //    return newState;
    // }
    // if(newState.maxPersonValue*newState.numOfRooms < (newState.numOfAdults+newState.numOfChildren) ){
    //   newState.numOfRooms=newState.numOfRooms-payload;
    // }

    if((newState.numOfAdults+newState.numOfChildren)%newState.maxPersonValue===0){
      newState.numOfRooms=newState.numOfRooms-payload;
    }
      return newState;
}


export const adjustRoombasedOnIncrementChildAdultContraint=(state,payload) =>{
  var  newState={...state,numOfChildren:state.numOfChildren+payload};
    if((newState.numOfAdults+newState.numOfChildren)===20 && newState.numOfRooms===5){
       newState.disableButton=true;
       return newState;
    }
    if(newState.maxPersonValue*newState.numOfRooms < (newState.numOfAdults+newState.numOfChildren)){
      newState.numOfRooms=newState.numOfRooms+payload;
    }
      return newState;
}


export const adjustRoombasedOnDecrementChildAdultContraint=(state,payload) =>{
  var  newState={...state,numOfChildren:state.numOfChildren-payload};
         newState.disableButton=false;
    // if((newState.numOfAdults+newState.numOfChildren)===20 && newState.numOfRooms===5){
    //    newState.disableButton=true;
    //    return newState;
    // }
    // if(newState.maxPersonValue*newState.numOfRooms < (newState.numOfAdults+newState.numOfChildren) ){
    //   newState.numOfRooms=newState.numOfRooms-payload;
    // }

    if((newState.numOfAdults+newState.numOfChildren)%newState.maxPersonValue===0){
      newState.numOfRooms=newState.numOfRooms-payload;
    }
      return newState;
}