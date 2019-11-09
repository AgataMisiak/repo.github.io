import React, {Component} from 'react';
import UsersList from './UsersList';
import './Users.css';

class Users extends Component {

    constructor(props) {
        super(props);

        this.state = {
            usersList: [],
        }
    }


    addUser = (e) => {
        e.preventDefault(); 
        
        let newUser = {
            key: Date.now(),
            firstName: this._inputFirstName.value,
            lastName: this._inputLastName.value
        }
      
        // console.log(newUser);
        this.setState( (prevState) => {
            return {
                usersList: prevState.usersList.concat(newUser),
            }
        });

        this._inputFirstName.value = '';
        this._inputLastName.value = '';
    }
    deleteUser = (user) => {
        console.log(user)
    }

    render() {

        return(
            <div className="users-main">
                <h1>{this.props.title}</h1>
                <form onSubmit={this.addUser}>
                    <input ref={ (element) => {this._inputFirstName = element} } type="text" placeholder="First Name" />&nbsp;
                    <input ref={ (element) => {this._inputLastName = element} } type="text" placeholder="Last Name" />
                    <button type="submit">Add user</button>
                </form>
                <UsersList usersList={this.state.usersList} />    
            </div>
        )
    }

}

export default Users;