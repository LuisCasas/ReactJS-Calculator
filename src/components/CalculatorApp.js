import React from 'react';
import Header from './Header';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';

export default class Calculator extends React.Component{

    state = {
        totalText: '',
        valueNumber: 0,
        calculation: undefined,
        subtotal: ''
    };

    updateTotal = (value) => {

        this.setState((prevState) => {

            let valueNumber = `${prevState.valueNumber}${value}`;

            if(value !== '.'){
                valueNumber = parseFloat(`${prevState.valueNumber}${value}`);
            }
            
            return ({
                totalText: `${prevState.totalText}${value}`,
                valueNumber: valueNumber,
                subtotal: prevState.subtotal,
                total: ''
            });
        });
    };

    clearCalculation = () => {
        this.setState(() => ({
            totalText: '',
            calculation: undefined,
            subtotal: '',
            valueNumber: 0,
            total: ''
        })); 
    };

    addValues = (a, b) => a + b;
    subtractValues = (a, b) => a - b;
    multiplyValues = (a, b) => a * b;
    divideValues = (a, b) => a / b;

    calculation = (action) => {
      
        switch(action){
            case '+':
                return this.addValues(this.state.subtotal, this.state.valueNumber); 
            case '-':
                return this.subtractValues(this.state.subtotal, this.state.valueNumber); 
            case 'x':
                return this.multiplyValues(this.state.subtotal, this.state.valueNumber); 
            case '/':
                return this.divideValues(this.state.subtotal, this.state.valueNumber);
            default:
                return this.state.valueNumber;
        };
    };   

    calculationAction = (action) => {

        if(action === '='){
            this.setState((prevState) => ({
                totalText: '',
                calculation: undefined,
                subtotal: '',
                valueNumber: 0,
                total: this.calculation(prevState.calculation)
            })); 
        } else {
            this.setState((prevState) => ({
                totalText: `${prevState.totalText} ${action} `,
                calculation: action,
                subtotal: this.calculation(prevState.calculation),
                valueNumber: 0
            }));        
        }
    };

    render(){
        return(
            <div className="container">
                <Header />
                <input className="total__input" type="text" value={this.state.totalText} disabled />
                {this.state.subtotal && <input className="total__input" type="text" value={this.state.subtotal} disabled /> }
                {this.state.total && <input className="total__input" type="text" value={`Total: ${this.state.total}`} /> }
                <div>
                    <NumberButton updateTotal={this.updateTotal} value={1} />
                    <NumberButton updateTotal={this.updateTotal} value={2} />
                    <NumberButton updateTotal={this.updateTotal} value={3} />
                    <ActionButton calculationAction={this.calculationAction} value="x" />
                </div>
                <div>
                    <NumberButton updateTotal={this.updateTotal} value={4} />
                    <NumberButton updateTotal={this.updateTotal} value={5} />
                    <NumberButton updateTotal={this.updateTotal} value={6} />
                    <ActionButton calculationAction={this.calculationAction} value="+" />
                </div>
                <div>
                    <NumberButton updateTotal={this.updateTotal} value={7} />
                    <NumberButton updateTotal={this.updateTotal} value={8} />
                    <NumberButton updateTotal={this.updateTotal} value={9} />
                    <ActionButton calculationAction={this.calculationAction} value="-" />
                </div>     

                <div>
                    <NumberButton updateTotal={this.updateTotal} value={0} />
                    <NumberButton updateTotal={this.updateTotal} value="." />
                    <ActionButton calculationAction={this.calculationAction} value="=" />
                    <ActionButton calculationAction={this.calculationAction} value="/" />
                </div>      
                <div>
                    <button className="big-button" onClick={this.clearCalculation}>Clear all</button>
                </div>                      
            </div>
        );
    };
}