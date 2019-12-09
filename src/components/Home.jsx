import React, { Component } from "react";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: "Carlos"
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name: "Cristina"
      });
    }, 10000);
  }
  render() {
    const buttonStyle = {
      backgroundColor: "gray",
      border: "1px solid black"
    };

    console.log("Name", this.state.name);
    return (
      <div>
        <p>
          in the recipe you will learn how to add styles to componenets. If you
          want to learn more you can visist our Youtube Channel at
          <a href="http://youtube.com/codejobs">Codejobs</a>
        </p>
        <p>Hi my name is {this.state.name}</p>
        <p>
          <button style={buttonStyle}> Click me!</button>
        </p>
      </div>
    );
  }
}

export default Home;
