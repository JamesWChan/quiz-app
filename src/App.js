import React from 'react';
import './App.css';
import Question from "./components/Question";
import Answer from "./components/Answer"
import data from "./data";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            correctAnswer: "Bandar Seri Begawan"
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        const answer = event.target.value;
        if(answer === this.state.correctAnswer){
            console.log("Correct!");
            console.log(data);
        }
        else {
            console.log("Incorrect!");
        }
    }

    render () {
        return (
            <div className="App">
                <header className="App-header">
                    <Question question="What is the capital of Brunei?" />
                    <Answer valueProp="Bandar Seri Begawan" answer="Bandar Seri Begawan" onClick={this.handleClick} />
                    <Answer valueProp="Rome" answer="Rome" onClick={this.handleClick} />
                    <Answer valueProp="Paris" answer="Paris" onClick={this.handleClick} />
                    <Answer valueProp="Canberra" answer="Canberra" onClick={this.handleClick} />
                </header>
            </div>
        );
    }
}

export default App;
