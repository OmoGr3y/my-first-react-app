import React, { Component } from "react";
import "./Numbers.css";

class Numbers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: "",
      results: []
    };
  }

  handleNumberChange = e => {
    const {
      target: { value }
    } = e;
    const numbers = Array.from(value);

    const result = numbers.reduce((a, b) => Number(a) + Number(b), 0);
    this.setState({
      numbers: value,
      results: [...this.state.results, result]
    });
  };
  render() {
    return (
      <div className="Numbers">
        <input
          type="number"
          value={this.state.numbers}
          onChange={this.handleNumberChange}
        />

        <ul>
          {this.state.results.map((result, i) => (
            <Result key={i} result={result} />
          ))}
        </ul>
      </div>
    );
  }
}

const Result = props => <li>{props.result}</li>;

export default Numbers;
