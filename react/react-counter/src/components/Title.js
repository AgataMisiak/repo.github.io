import React, {Component} from 'react';
import './ButtonsPanel.css';

class Title extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <h3>Stan licznika {this.props.valueCounter}</h3>
        )
    }
}

export default Title;