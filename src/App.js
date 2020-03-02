import React from 'react';
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed,faUsers,faUser,faChild } from '@fortawesome/free-solid-svg-icons';

import { addRoom,removeRoom,increaseAdult,increaseChildren,decreaseAdult,decreaseChildren } from "./redux/actionCreators";
import './App.css';

function App(props) {
  return (
    <div className="App">
      <FontAwesomeIcon icon={faUsers} color="Blue" size="lg"/>
      <span style={{marginLeft:'10px',fontSize:'20px',color:'Blue'}}>Choose Number Of <b style={{color:'Blue'}}>People</b></span>
      <div className="container">
         <div className="room-container">
           <FontAwesomeIcon icon={faBed} color="Blue" size="lg" className="bed-icon"/>
           <span className="text-room">ROOMS</span>
           <div className="button-container">
           <button className="remove" onClick={()=>props.removeRoom(1)} disabled={props.numOfRooms===1 ? "disabled":null}>-</button>
           <span>{props.numOfRooms}</span>
           <button className="add" onClick={()=>props.addRoom(1)} disabled={props.numOfRooms===5 ? "disabled":null}>+</button>
           </div>
         </div>
         <div className="adult-container">
           <FontAwesomeIcon icon={faUser} color="Blue" size="lg" className="bed-icon"/>
           <span className="text-room">ADULTS</span>
           <div className="button-container">
           <button className="remove" onClick={()=>props.decreaseAdult(1)} disabled={props.numOfAdults===1 ? "disabled":null}>-</button>
           <span>{props.numOfAdults}</span>
           <button className="add" onClick={()=>props.increaseAdult(1)} disabled={props.disableButton && "disabled"}>+</button>
           </div>
         </div>
         <div className="children-container">
           <FontAwesomeIcon icon={faChild} color="Blue" size="lg" className="bed-icon"/>
           <span className="text-room">CHILDREN</span>
           <div className="button-container">
           <button className="remove" onClick={()=>props.decreaseChildren(1)} disabled={props.numOfChildren===0 ? "disabled":null}>-</button>
           <span>{props.numOfChildren}</span>
           <button className="add" onClick={()=>props.increaseChildren(1)} disabled={props.disableButton && "disabled"}>+</button>
           </div>
         </div>
      </div>
    </div>
  );
}

const mapStateToProps = state =>({
    numOfRooms:state.numOfRooms,
    numOfAdults:state.numOfAdults,
    numOfChildren:state.numOfChildren,
    maxPersonValue:state.maxAdultValue,
    minRoomValue:state.minRoomValue,
    tempVar:state.tempVar,
    disableButton:state.disableButton,
})

const mapDispatchToProps = dispatch =>({
  addRoom:(val)=>dispatch(addRoom(val)),
  removeRoom:(val)=>dispatch(removeRoom(val)),
  increaseAdult:(val)=>dispatch(increaseAdult(val)),
  decreaseAdult:(val)=>dispatch(decreaseAdult(val)),
  increaseChildren:(val)=>dispatch(increaseChildren(val)),
  decreaseChildren:(val)=>dispatch(decreaseChildren(val))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
