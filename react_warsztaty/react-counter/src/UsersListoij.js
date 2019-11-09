import React, {Component} from 'react';

class UsersList extends Component {

    render() {

        let listOfUsers = this.props.usersList;
        let users = listOfUsers.map((user) => {
            return(
                <li key={user.key}>
                    <div>{user.firstName} {user.lastName}</div>
                    <button>X</button>
                </li>
            )
        });


        return(
            <ul className="the-list">
                {users}
            </ul>
        );
    }
}

export default UsersList;