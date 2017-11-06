import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

export const history = createHistory();
const middleware = routerMiddleware(history);
const loggerMiddleware = createLogger();

export function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunk, middleware, loggerMiddleware),
            // applyMiddleware(thunk),
            DevTools.instrument()
        )
    );
}
