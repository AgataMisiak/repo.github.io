import React, { Component } from 'react';
import './Users.css';

class Users extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            value: '',
            value2: '',
            list: ['a', 'b', 'c'],
        }
    } 
    onChangeValue = event => {
        this.setState({ value: event.target.value});
      };

    onChangeValue2 = event => {
        this.setState({ value2: event.target.value});
      };
      
      onAddItem = () => {
        //   console.log(this.state.list);
        this.setState(state => {
          const list = state.list.concat(state.value).concat(state.value2);
          return {
            list,
            value: '',
            value2: '',
          };
        });
      };

      clearItem = () => {
        console.log(this.state.list);
      this.setState(state => {
        const list = [];
        return {
          list,
          value: '',
          value2: '',
        };
      });
    };

    render() {
        let headingTitle = `${this.props.title}`;
        return (
            <div className="users-main">
                <h1>{headingTitle}</h1>
                <form>
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.onChangeValue}
                    />
                    <input
                        type="text"
                        value={this.state.value2}
                        onChange={this.onChangeValue2}
                    />
                    <button
                        type="button"
                        onClick={this.onAddItem}
                        // disabled={!this.state.value}
                    >Add
                    </button>
                    <button
                        type="button"
                        onClick={this.clearItem}
                        // disabled={!this.state.value}
                    >Clear
                    </button>
                </form>
                <ul>
                    {this.state.list.map(item => (
                    <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Users;