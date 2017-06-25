/**
 * Created by ayman on 6/21/17.
 */
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

const colorArr = [
    "Poop",
    "POOP",
    "P00P",
    "P()()P",
    "9009",
    "cyan",
    "brown",
    "yellow"
]

class Test extends Component {
    constructor() {
        super();

        this.state = {
            color: "hotpink"
        };
    }

    toggleColor() {
        if(this.state.color == "hotpink") {
            this.setState({
                    color: "yellow"
                }
            );
        }
        else{
            this.setState({
                    color: "hotpink"
                }
            );
        }

    }

    changeColor(event){
        this.setState({
                color: event.target.value
            }
        );
    }

    componentDidMount(){
        let colorPos = 0;
        setInterval(() => {
            if(colorArr.length - 1 > colorPos) {
                this.setState({
                        color: colorArr[colorPos]
                    }
                );
                colorPos++;
            } else {
                this.setState({
                    color: colorArr[colorPos]
                });
                colorPos = 0;
            }

        }, 700);
    }

    render() {
        var temp = (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p  onClick={this.toggleColor.bind(this)} className="App-intro">
                    Hello {this.state.color}
                </p>
                <input value={this.state.color} onChange={this.changeColor.bind(this)}/>
            </div>)
        console.log(this.state);
        return temp;
    }
}
export default Test;

