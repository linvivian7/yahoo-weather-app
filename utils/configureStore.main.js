import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const configureStore = ({reducer, initialState, middleware = [thunk]}) => (
    createStore(
        reducer,
        initialState,
        applyMiddleware(...middleware),
    )
);

export default configureStore;
