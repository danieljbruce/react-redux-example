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

const crossSliceReducer = (state = {nextProduct: '', products: []}, action) => {
    switch (action.type) {
        case 'CHANGE_NEXT_PRODUCT':
            return {'nextProduct': action.nextProduct, 'products': state.products};
        case 'ADD_NEXT_PRODUCT':
            return {'nextProduct': state.nextProduct, 'products': state.products.push[state.nextProduct]};
        default:
            if (typeof(state.nextProduct) === 'undefined') {
                state.nextProduct = '';
            }
            if (typeof(state.products) === 'undefined') {
                state.products = [];
            }
            return state;
    }
};

const rootReducer = (state = {}, action) => {
    const filter = filterReducer(state.filter, action);
    const crossSlice = crossSliceReducer({nextProduct: state.nextProduct, products: state.products}, action);
    return {filter: filter, nextProduct: crossSlice.nextProduct, products: crossSlice.products, routing: routing(state.routing)};
};

export default rootReducer;
