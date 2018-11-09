import React from 'react';

const ActionButton = (props) => {

    return (
        <button onClick={(e) => {
            props.calculationAction(props.value);
        }}>
            {props.value}
        </button>
    );   
};

export default ActionButton;