import React from 'react';

const NumberButton = (props) => {  
    return (
            <button className="button" onClick={(e) => {
                props.updateTotal(props.value);
            }}>
                {props.value}
            </button>
    );
};

export default NumberButton;