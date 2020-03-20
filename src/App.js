import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import Counter from './Counter';
import Counter2 from './Counter2';



class App extends Component {

  render() {
    //npm start
    // return <HelloWorld tech={this.state.tech} />;
    return (
        <div>
        <Counter/>
        <Counter2/>
        </div>

        )
  }
}

export default App;
