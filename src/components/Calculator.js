import React from 'react';
import Header from './Header';
import Button from './Button';

export default class Calculator extends React.Component{

    state = {
        total: ''
    };

    updateTotal = (value) => {
        this.setState((prevState) => ({
            total: `${prevState.total}${value}`
        }));
    };

    render(){
        return(
            <div>
                <Header />
                <p>Total {this.state.total}</p>
                <div>
                    <Button updateTotal={this.updateTotal} value="1" />
                    <Button updateTotal={this.updateTotal} value="2" />
                    <Button updateTotal={this.updateTotal} value="3" />
                </div>
                <div>
                    <Button updateTotal={this.updateTotal} value="4" />
                    <Button updateTotal={this.updateTotal} value="5" />
                    <Button updateTotal={this.updateTotal} value="6" />
                </div>
                <div>
                    <Button updateTotal={this.updateTotal} value="7" />
                    <Button updateTotal={this.updateTotal} value="8" />
                    <Button updateTotal={this.updateTotal} value="9" />
                </div>                                
            </div>
        );
    };
}