import reduxThunk from 'redux-thunk';
import { createLogger }from 'redux-logger';
import gitInspectReducer from '../reducers';
import { IGitInspectState } from '../state/index';
import { Store, createStore as reduxCreateStore, combineReducers, applyMiddleware, compose } from 'redux';

export function createStore(initialState: IGitInspectState): Store<IGitInspectState> {
    return reduxCreateStore(gitInspectReducer, initialState, compose(
        applyMiddleware(...[ reduxThunk, createLogger() ])
    ));
}
