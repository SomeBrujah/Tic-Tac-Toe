import {createStore, combineReducers, compose} from 'redux';
import reducer from './rootReducer/reducer'

export const store = createStore(reducer, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));