import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { filterTable } from '../actions';
import ProductTable from '../components/ProductTable';
import { filterableTable } from '../styles/filterableTable.scss';
import AddProductButton from '../components/AddProductButton';
import { changeNextProduct } from '../actions/ChangeNextProduct';
import { addNextProduct } from '../actions/AddNextProduct';

const FilterableTable = ({ filter, onFilter, nextProduct, onChangeNextProduct, products}) => {
    let input;
    let input2;
    console.log(products);
    return (
        <div className={filterableTable}>
            <input
                value={nextProduct}
                ref={node => {input = node;}}
                onChange={() => onChangeNextProduct(input.value)} />
            <AddProductButton/>
            <input
                value={filter}
                ref={node => {input2 = node;}}
                onChange={() => onFilter(input2.value)} />
            <ProductTable filter={filter} products={products}/>
        </div>
    );
};

FilterableTable.propTypes = {
    filter: PropTypes.string,
    onFilter: PropTypes.func,
    nextProduct: PropTypes.string,
    onChangeNextProduct: PropTypes.func,
    onAddNextProduct: PropTypes.func,
    products: PropTypes.array,
};

const mapStateToProps = (state) => {
    return {
        filter: state.filter,
        nextProduct: state.nextProduct,
        products: state.products
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFilter: filterText => dispatch(filterTable(filterText)),
        onChangeNextProduct: nextProductText => dispatch(changeNextProduct(nextProductText)),
        onAddNextProduct: () => dispatch(addNextProduct())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterableTable);
