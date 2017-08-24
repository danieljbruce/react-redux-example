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

const initialProducts = [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

const crossSliceReducer = (state = {nextProduct: '', products: []}, action) => {
    console.log(action);
    switch (action.type) {
        case 'CHANGE_NEXT_PRODUCT':
            return {'nextProduct': action.nextProduct, 'products': state.products};
        case 'ADD_NEXT_PRODUCT':
            console.log('Dog');
            const product = {category: 'Sporting Goods', price: '$9.99', stocked: true, name: state.nextProduct};
            return {'nextProduct': state.nextProduct, 'products': state.products.push[product]};
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
    return {filter: filter, nextProduct: crossSlice.nextProduct, products: crossSlice.products, routing: routing(state.routing)};
};

export default rootReducer;
