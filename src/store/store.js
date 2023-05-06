// import { compose, createStore, applyMiddleware } from 'redux';
//now we are changing the code implementation to the toolkit
import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';
const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
);

// const composeEnhancer =
//   (process.env.NODE_ENV !== 'production' &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['user'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = configureStore({
//now 'reducer' points to the actual roorReducer and configures the store
// instead of creating a store without any additonal code 
  reducer: rootReducer,
  //adding middlewares in react-toolkit is easy
  //react-toolkit has a default middleware which is redux-thunk and if we add 
  //any middleware then the default mildleware void 
  // middleware: middleWares


    middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
      //this will check the serialization and ignore it and doesnt show any error
      serializableCheck:false,
    })
    //this concate the middleware we declare above and shows the logger and the value
    //on the console
    .concat(middleWares),

});
// export const store = createStore(
//   persistedReducer,
//   undefined,
//   composedEnhancers
// );

// export const persistor = persistStore(store);
