import { createStore, applyMiddleware, compose } from 'redux'
import {combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk'
import AppReducer from './app/reducer'

const allReducers = combineReducers({
  app: AppReducer,
})

export function configureStore(preloadedState) {
    const composeEnhancers =
      process.env.NODE_ENV === 'development' ?
      (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose;
    return createStore(allReducers, composeEnhancers(
      applyMiddleware(thunkMiddleware),
    ));
}
