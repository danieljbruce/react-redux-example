import { routerReducer as routing } from 'react-router-redux';
// import { combineReducers } from 'redux';
import * as types from '../actions/types';

const filterReducer = (state = '', action) => {
    switch (action.type) {
        case types.FILTER:
            return action.filter;
        default:
            return state;
    }
};

const addressReducer = (state = '', action) => {
    // State here is a list of addresses
    switch (action.type) {
        case types.ADD_ETHEREUM_ADDRESS:
            return action.address;
        default:
            return state;
    }
};

// window.store.dispatch({"type":"FILL_BALANCE", "address":"0x3cfc056462a06d3d146a2c6e73e5a48ea3798f24","source":"etherscan" ,"balance": 0})
// Try this:
// window.store.dispatch({"type":"FILL_BALANCE", "address":"0x3cfc056462a06d3d146a2c6e73e5a48ea3798f24", "balance": 0})
// const ethBalanceReducer = (state = {}, action) => {
//     // State here has keys addresses, api
//     switch (action.type) {
//         case types.FILL_BALANCE:
//             console.log('Filling Balance');
//             const nextState = Object.assign({}, state);
//             nextState[action.address] = action.balance;
//             // Consider checking for duplicates
//             return nextState;
//         default:
//             return state;
//     }
// };


// window.store.dispatch({"type":"FILL_API_BALANCE","source":"etherscan", "address":"0x3cfc056462a06d3d146a2c6e73e5a48ea3798f24", "balance": 0})
const ethApiReducer = (state = {}, action) => {
    // state[source][data_type] = value
    // state['etherscan']['balance']['address'] = value
    switch (action.type) {
        case types.FILL_API_BALANCE:
            console.log('Filling Balance');
            const nextState = Object.assign({}, state);
            if (typeof(nextState[action.source]) === 'undefined') {
                nextState[action.source] = {};
                nextState[action.source].balance = {};
            }
            nextState[action.source].balance[action.address] = action.balance;
            // Consider checking for duplicates
            return nextState;
        default:
            return state;
    }
};


// const nextProduct = (state = '', action) => {
//     switch (action.type) {
//         case 'CHANGE_NEXT_PRODUCT':
//             return action.nextProduct;
//         default:
//             return state;
//     }
// };
//
// const products = (state = [], action) => {
//     switch (action.type) {
//         case 'ADD_NEXT_PRODUCT':
//             return state.push[action.nextProduct];
//         default:
//             console.log('bear');
//             return state;
//     }
// };

const initialProducts = [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

const crossSliceReducer = (state = {nextProduct: '', products: []}, action) => {
    switch (action.type) {
        case 'CHANGE_NEXT_PRODUCT':
            return {'nextProduct': action.nextProduct, 'products': state.products};
        case 'ADD_NEXT_PRODUCT':
            const product = {category: 'Sporting Goods', price: '$9.99', stocked: true, name: state.nextProduct};
            const newProductList = [];
            for (let i = 0; i < state.products.length; i++) {
                newProductList.push(state.products[i]);
            }
            newProductList.push(product);
            return {'nextProduct': state.nextProduct, 'products': newProductList};
        default:
            if (typeof(state.nextProduct) === 'undefined') {
                state.nextProduct = '';
            }
            if (typeof(state.products) === 'undefined') {
                state.products = initialProducts;
            }
            return state;
    }
};

const rootReducer = (state = {}, action) => {
    const filter = filterReducer(state.filter, action);
    const crossSlice = crossSliceReducer({nextProduct: state.nextProduct, products: state.products}, action);
    const ethereumAddress = addressReducer(state.ethereumAddress, action);
    const ethereumApiData = ethApiReducer(state.ethereumApiData, action);
    // const ethereumBalances = ethBalanceReducer(state.balances, action);
    return {filter: filter, nextProduct: crossSlice.nextProduct, products: crossSlice.products, routing: routing(state.routing), ethereumAddress: ethereumAddress, ethereumApiData: ethereumApiData};
};

export default rootReducer;
