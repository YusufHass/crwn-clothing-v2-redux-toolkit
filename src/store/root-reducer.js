// import { combineReducers } from 'redux';
//since we dont use redux with the react-toolkit, we need to use react-toolkit library
//to use the combineReducers
import { combineReducers } from '@reduxjs/toolkit';


import { userReducer } from './user/user.reducer';
import { categoriesReducer } from './categories/category.reducer';
import { cartReducer } from './cart/cart.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
