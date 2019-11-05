import React, {Component} from 'react';


class ButtonsPanel extends Component {
    constructor(props){
        super(props);
    }

    handleChange(event) {
        this.setState({value: event.target.value.toUpperCase()});
      }


    render(){
        return (
            <div className="btns">
                <button onClick={this.handleChange}>Dodaj imię</button>
            </div>
        );
    }
}

export default ButtonsPanel;