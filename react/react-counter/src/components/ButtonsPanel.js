import React, {Component} from 'react';
import './ButtonsPanel.css';


class ButtonsPanel extends Component {
    constructor(props){
        super(props);
    }

    handleClick = () => {
        this.props.actionCallback()
    }


    render(){
        return (
            <div className="btns">
                <button onClick={this.handleClick}>Zwiększ licznik</button>
            </div>
        );
    }
}

export default ButtonsPanel;