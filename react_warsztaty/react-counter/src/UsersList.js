import React, {Component} from 'react';

class UsersList extends Component {

    onClearArray = (user) => {
        // this.setState({ list: [] });
        // console.log('a');
        console.log(user);
      };
    render() {

        let listOfUsers = this.props.usersList;
        
        let users = listOfUsers.map((user) => {
            return(
                <li key={user.key}>
                    <div>{user.firstName} {user.lastName}</div>
                    <button onClick={this.onClearArray(user.firstName)}>X</button>
                </li>
            )
        });
        // function removeUser (cos) {console.log(cos)};


        return(
            <ul className="the-list">
                {users}
            </ul>
        );
    }
}

export default UsersList;