import React, {Component} from "react"; 
    class List extends Component {    
        render() {        
            return(     
                <div className="list"> {this.props.initValue}     
                </div> )    
            } 
    } 
export default List;