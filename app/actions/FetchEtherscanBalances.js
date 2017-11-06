
/**
 * Created by danielbruce on 2017-10-09.
 */
import fetch from 'isomorphic-fetch';
import {fillApiBalance} from '../actions/FillApiBalance';

// window.store.dispatch(window.fetchEtherscanBalances)

export function fetchEtherscanBalances(dispatch, getState) {
    // Thunk middleware knows how to handle functions.
    // First dispatch: the app state is updated to inform
    const address = getState().ethereumAddress;
    // 'https://api.etherscan.io/api?module=account&action=balance&address=0xb794f5ea0ba39494ce839613fffba74279579268&tag=latest&apikey=Y8GTIA38R6W8NQ5N8PR5AHRE98SRUMGHJB'
    const url = 'https://api.etherscan.io/api?module=account&action=balance&address=' + address + '&tag=latest&apikey=Y8GTIA38R6W8NQ5N8PR5AHRE98SRUMGHJB';
    return fetch(url).then(
        response => response.json(),
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing an loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        error => console.log('An error occured.', error)
    ).then(function(json) {
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.
        const balance = json.result;
        console.log('Balance: ', balance);
        dispatch(fillApiBalance('etherscan', address, balance));
    });
    // return address;
}
