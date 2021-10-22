import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { weatherReducer } from './weather'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({ weather: weatherReducer })

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)))