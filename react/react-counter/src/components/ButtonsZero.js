import React, {Component} from 'react';
import './ButtonsPanel.css';


class ButtonsZero extends Component {
    constructor(props){
        super(props);
    }


    zeroValue = () => {
        this.props.actionZerowanie()
    }


    render(){
        return (
            <div className="btns">
                <button onClick={this.zeroValue}>Wyzeruj licznik</button>
            </div>
        );
    }
}

export default ButtonsZero;