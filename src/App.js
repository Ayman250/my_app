import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

const colorArr = [
    "Ayman",
    "Yumn",
    "Gamal",
    "Suhair",
    "Moaaz",
    "Mohamed"
]
class Bar extends Component {
    render(){
        return (
          <div>
              <h2>
                  Family
              </h2>
          </div>
        );
    }
}
class App extends Component {
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
                <Bar />
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to the ELMUBARKS</h2>
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
export default App;

