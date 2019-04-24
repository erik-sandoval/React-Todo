import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import toDo from './components/TodoComponents/Todo';




class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasksOnState: toDo,
      tasks: {
        task: "",
        id: Date.now(),
        completed: false
      }
    }
  }

  handleChanges = event => {
    console.log(event.target.value);

    this.setState({
      tasks: {
        ...this.state.tasks,
        [event.target.name]: event.target.value
      }
    })
  }

  addTask = event => {
    event.preventDefault();
    this.setState({
      tasksOnState: [...this.state.tasksOnState, this.state.tasks],
      tasks: {
        task: "",
        id: Date.now(),
        completed: false
      }
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        {this.state.tasksOnState.map(task => (
          <TodoList stateTask={task} />
        ))}
        <TodoForm
          addTask={this.addTask}
          formState={this.state}
          handleProp={this.handleChanges}
        />
      </div>

    );
  }
}

export default App;
