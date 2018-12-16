import React, {Component} from 'react';
import Bingo from './components/bloc_div.js';
import './App.css';



class App extends Component {
    state = {
        number: arr,
    };

    changeNumber = () => {
        rand();
        this.setState({number: arr});
    };

    render() {
        return (
            <div className="App">
                <div className="block">
                    <h1 className="h1">Bingo 5 of 36</h1>
                    <div >
                        {this.state.number.map ((num, key) => {
                            return <Bingo key={key} num={this.state.number[key]} />
                        })}
                    </div>
                    <button className="btn" onClick={this.changeNumber}>New Numbers</button>
                </div>
            </div>
        );
    }
}

export default App;
