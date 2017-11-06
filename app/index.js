import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { configureStore, history } from './store/configureStore';
import Root from './containers/Root';
// import * as actions from './actions';
import { fetchEtherscanBalances } from './actions/FetchEtherscanBalances';
// import thunk from 'redux-thunk';

// import fetchData from './actions/FetchData';
// const f = sampleDispatch;

const store = configureStore();
window.store = store;
window.fetchEtherscanBalances = fetchEtherscanBalances;
// Try the following:
// window.store.dispatch(window.fetchEtherscanBalances)

// window.actions = actions;
// Try the following line:

render(
    <AppContainer>
        <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        const newConfigureStore = require('./store/configureStore');
        const newStore = newConfigureStore.configureStore();
        const newHistory = newConfigureStore.history;
        const NewRoot = require('./containers/Root').default;
        render(
            <AppContainer>
                <NewRoot store={newStore} history={newHistory} />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}


