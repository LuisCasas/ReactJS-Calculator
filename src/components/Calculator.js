import React from 'react';
import Header from './Header';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';

export default class Calculator extends React.Component{

    state = {
        totalText: '',
        subtotal: 0,
        valueNumber: 0
    };

    updateTotal = (value) => {
        this.setState((prevState) => ({
            totalText: `${prevState.totalText}${value}`,
            valueNumber: `${prevState.valueNumber}${value}`
        }));
    };

    clearCalculation = () => {
        this.setState(() => ({
            totalText: '',
            subtotal: 0,
            valueNumber: 0
        })); 
    };

    calcAction = (action) => {
        switch(action){
            case '+':
            return this.addValues(this.state.subtotal, this.state.valueNumber); 
        }
    };   

    addValues = (a, b) => a + b *1;

    calculationAction = (action) => {
        this.setState((prevState) => ({
            totalText: `${prevState.totalText}${action}`,
            subtotal: this.calcAction(action),
            valueNumber: 0
        }));        
    };

    render(){
        return(
            <div>
                <Header />
                <p>Total {this.state.totalText}</p>
                <p>Subtotal = {this.state.subtotal}</p>  
                <div>
                    <NumberButton updateTotal={this.updateTotal} value={1} />
                    <NumberButton updateTotal={this.updateTotal} value={2} />
                    <NumberButton updateTotal={this.updateTotal} value={3} />
                    <ActionButton calculationAction={this.calculationAction} value="+" />
                </div>
                <div>
                    <NumberButton updateTotal={this.updateTotal} value="4" />
                    <NumberButton updateTotal={this.updateTotal} value="5" />
                    <NumberButton updateTotal={this.updateTotal} value="6" />
                    <NumberButton updateTotal={this.updateTotal} value="-" />
                </div>
                <div>
                    <NumberButton updateTotal={this.updateTotal} value="7" />
                    <NumberButton updateTotal={this.updateTotal} value="8" />
                    <NumberButton updateTotal={this.updateTotal} value="9" />
                    <NumberButton updateTotal={this.updateTotal} value="*" />
                </div>     

                <div>
                    <NumberButton updateTotal={this.updateTotal} value="0" />
                    <NumberButton updateTotal={this.updateTotal} value="." />
                    <NumberButton updateTotal={this.updateTotal} value="=" />
                </div>      
                <div>
                    <button onClick={this.clearCalculation}>Clear all</button>
                </div>                              
            </div>
        );
    };
}