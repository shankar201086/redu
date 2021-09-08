import {createStore,applyMiddleware} from 'redux';
import {composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer1 from './reducer.js/reducer1';

const middleware = [thunk]
const store = createStore(
    reducer1,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;