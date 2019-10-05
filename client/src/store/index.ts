import { Store, createStore as reduxCreateStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { createLogger }from 'redux-logger';
import { IGitInspectState } from '../state/index';
import gitInspectReducer from '../reducers';


export function createStore(initialState: IGitInspectState): Store<IGitInspectState> {

    const loggerMiddleware = createLogger();

    const middlewares = [
        reduxThunk,
        loggerMiddleware
    ];

    const rootState: IGitInspectState = initialState;
    const rootReducer = gitInspectReducer;

    return reduxCreateStore(rootReducer, rootState, compose(
        applyMiddleware(...middlewares)
    ));
}