import React from 'react';

const Button = (props) => {  
    return (
            <button onClick={(e) => {
                props.updateTotal(props.value);
            }}>
                {props.value}
            </button>
    );
};

export default Button;