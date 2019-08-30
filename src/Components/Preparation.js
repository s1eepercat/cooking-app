import React, { Component } from 'react';
import Start from './Start';
import Plus from './Plus';
import Input from './Input';
import Input_sign from './Input-sign';

class Preparation extends Component {
    constructor() {
        super();
        this.state = {
            lines: 1
        }
    }

    addLines = (event) => {
        this.setState({ lines: this.state.lines + 1 });
        console.log(`+ 1 cooking line, now ${this.state.lines} total.`);
    }

    render() {

        return (
            <div>
                <h1 className='tc'>Preparation</h1>
                <div style={{ overflowY: 'scroll', border: '5px solid black', height: '550px' }}>


                    <Plus addLines={this.addLines} />
                    <Start cookingStart={this.props.cookingStart} />
                </div>
            </div >
        );
    }
}

export default Preparation;