import React, {Component} from 'react';
import Bingo from './components/bloc_div.js';
import './App.css';

let arr = [];
let compareRandom = (a, b) => {
    return a - b;
};


let rand = () => {
    while (true) {

        let a = Math.round(4.5 + Math.random() * 32);
        let b = Math.round(4.5 + Math.random() * 32);
        let c = Math.round(4.5 + Math.random() * 32);
        let d = Math.round(4.5 + Math.random() * 32);
        let e = Math.round(4.5 + Math.random() * 32);
        if (a !== b && b !== c && c !== d && d !== a && b !== d && a !== c && e !== c && e !== a && e !== d) {
            arr.push(a, b, c, d, e);
            console.log(arr);
            arr.sort(compareRandom);
            break;
        }


    }
};
rand();

class App extends Component {
    state = {
        number: arr,
    };

    changeNumber = () => {
        arr = [];
        rand();
        this.setState({number: arr});
    };

    render() {
        return (
            <div className="App">
                <div className="block">
                    <h1 className="h1">Bingo 5 of 36</h1>
                    <div>
                        {this.state.number.map((num, key) => {
                            return <Bingo key={key} num={this.state.number[key]}/>
                        })}
                    </div>
                    <button className="btn" onClick={this.changeNumber}>New Numbers</button>
                </div>
            </div>
        );
    }
}

export default App;
