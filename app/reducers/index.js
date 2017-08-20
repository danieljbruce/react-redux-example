import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';

const filter = (state = '', action) => {
    console.log(action);
    switch (action.type) {
        case types.FILTER:
            return action.filter;
        default:
            return state;
    }
};

const nextProduct = (state = '', action) => {
    console.log(action);
    switch (action.type) {
        case 'CHANGE_NEXT_PRODUCT':
            return action.nextProduct;
        default:
            console.log('bear');
            return state;
    }
};

const rootReducer = combineReducers({
    filter,
    nextProduct,
    routing
});

export default rootReducer;
