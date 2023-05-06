
//with react-toolkit we dont need to define our action-type and reducers
//instead we use the createSlice from the react-toolkit and it defins 
//the action for us

// import { USER_ACTION_TYPES } from './user.types';
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentUser: null,
};

export const userSlice= createSlice({
  //name is the namespace for the setCurrentUser
  name: 'user',
  //initial state points to the INITIAL_STATE
  initialState: INITIAL_STATE,
  //with redux, action uses Switch statement, with react-toolkit 
  //follows the following
  reducers: {
//annynmous function
// setCurrentUser: ()=> {} is write as setCurrentUser(){} it's just
// a short cut this creats a namepace for the function
//setCurrentUser is where it's called inside App.js
  setCurrentUser( state, action)
  {
    state.currentUser= action.payload
  }
  }
})
//this returns the action produced under the above reducers function and 
// .actions is the property of createSlice
export const {setCurrentUser}= userSlice.actions;
//this 'userReducer' is called inside rootReducer and .reducer is a property of 
//react-toolkit createSlice
export  const userReducer= userSlice.reducer;

// export const userReducer = (state = INITIAL_STATE, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case USER_ACTION_TYPES.SET_CURRENT_USER:
//       return { ...state, currentUser: payload };
//     default:
//       return state;
//   }
// };
