import React,{Component} from 'react';
import ButtonsPanel from './ButtonsPanel'
import ButtonsZero from './ButtonsZero'
import Title from './Title'
//!!! tylko komponnety klasowe posiadają stan - this state
export default class Counter extends Component {
    constructor (props){
        super(props);

        let iValue=(this.props.initValue ===undefined)? 0 : this.props.initValue;
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

    zeroValue =()=>{
        this.setState((prevState)=>{
            return{
            value: this.props.initValue
            }
        });
    };

    render() {
        return (
            <div className="counter-component">
                <Title valueCounter={this.state.value}/>
                <ButtonsPanel actionCallback={this.changeValue}/>
                <ButtonsZero actionZerowanie={this.zeroValue}/>
            </div>
        )
    }
}