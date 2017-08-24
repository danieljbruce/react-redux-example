/**
 * Created by danielbruce on 2017-08-08.
 */
import { connect } from 'react-redux';
import React from 'react';
import { addNextProduct } from '../actions/AddNextProduct';
import PropTypes from 'prop-types';
// import { addNextProduct } from '../actions/AddNextProduct';

const AddProductButton = ({onAddNextProduct}) => {
    console.log(onAddNextProduct);
    return (
        <button onClick={() => onAddNextProduct()}> Add item </button>
        // <button> Add item </button>
    );
};

AddProductButton.propTypes = {
    onAddNextProduct: PropTypes.func
};

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddNextProduct: () => dispatch(addNextProduct())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddProductButton);
