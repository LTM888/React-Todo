import React, {
  Component
} from "react";

import './components/TodoComponents/Todo.css';

import TodoList from "./components/TodoComponents/TodoList";

class App extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return ( <
      div className = "App" >
      <
      
      TodoList / >
      <
      /div>
    );
  }
}

export default App;