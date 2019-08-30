import React, { Component } from 'react';
import Start from './Start';
import Plus from './Plus';
import Input from './Input';
import Input_sign from './Input-sign';
import Lines from './Lines';

class Preparation extends Component {
    constructor() {
        super();
        this.state = {
            lines: 1
        }
    }

    addLines = (event) => {
        this.setState({ lines: this.state.lines + 1 });
        console.log(`+ 1 cooking line, now ${this.state.lines + 1} total.`);
    }

    render() {

        return (
            <div className = 'preparation-container'>
                <h1 className='tc'>Preparation</h1>

                <div>
                    <Lines lines={this.state.lines}/>
                </div>
                
                <Plus addLines={this.addLines} />
                <Start cookingStart={this.props.cookingStart} />
            </div >
        );
    }
}

export default Preparation;