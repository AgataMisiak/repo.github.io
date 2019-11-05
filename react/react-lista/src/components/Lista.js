import React, {Component} from 'react';


class Lista extends Component{
    constructor(props){
        super(props);
        // this.onFormSubmit = this.onFormSubmit.bind(this);
    }



    render(){
        return(
            <h3>Stan licznika {this.props.onFormSubmit}</h3>
        )
    }
}

export default Lista;