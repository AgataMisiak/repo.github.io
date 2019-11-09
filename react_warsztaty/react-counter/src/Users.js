import React, { Component } from 'react';
import './Users.css';

class Users extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            userList: [],
        }
    } 
changeValue = () => {        
    this.setState( (prevState) => { 
        console.log(userList);           
        return({                
            userList: prevState.userList.push('a'),            
        })        
    });    
}

    render() {
        let headingTitle = `${this.props.title}`;
        return (
            <div className="users-main">
                <h1>{headingTitle}</h1>
                <form>
                    <input></input>
                    <button onClick={this.changeValue}>Add user</button>
                </form>
            </div>
        )
    }
}

export default Users;