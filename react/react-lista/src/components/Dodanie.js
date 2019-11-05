import React,{Component} from 'react';
import Button from './Button'
import Lista from './Lista'
import Form from './Form'
//!!! tylko komponnety klasowe posiadają stan - this state
export default class Dodanie extends Component {
    constructor (props){
        super(props);

        let iValue='';
        this.state = {
            value: iValue
        }
    }
    




    changeValue =()=>{
        this.setState((prevState)=>{
            console.log(prevState.value + 1);
            return{
                value: prevState.value + 1
                
            }
            
        });
    };



    render() {
        return (
            <div>
                <Form/>
                <Button actionCallback={this.changeValue}/>
                <Lista/>
            </div>
        )
    }
}