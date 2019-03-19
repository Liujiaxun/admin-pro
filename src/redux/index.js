import { createStore,compose,applyMiddleware } from 'redux';
import Reducers from './reducers';
const store = createStore(Reducers,compose(
    window.__REDUX_DEVTOOLS_EXTENSION__? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
))

export default store;