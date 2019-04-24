import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import toDo from './components/TodoComponents/Todo';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // links from array on Todo
      tasksOnState: toDo,
      tasks: {
        task: "",
        id: Date.now(),
        completed: false
      }
    }
  }

  handleChanges = event => {
    // set state data
    this.setState({
      tasks: {
        // only select target
        ...this.state.tasks,
        // name="task" on TodoForm.js, equals the key value.
        [event.target.name]: event.target.value
      }
    })
  }

  addTask = event => {
    // prevent refresh on button click
    event.preventDefault();
    // set state data
    this.setState({
      // makes new tasks list, using old list and pushing new task
      tasksOnState: [...this.state.tasksOnState, this.state.tasks],
      // reset state data to blank by overwriting values with these
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

        {/* iterates through object array and lists them to the list */}
        {this.state.tasksOnState.map(task => (
          <TodoList stateTask={task} />
        ))}

        <TodoForm
          // on TodoForm.js there are values, and these are assigned to it.
          addTask={this.addTask}
          formState={this.state}
          handleProp={this.handleChanges}
        />
      </div>

    );
  }
}

export default App;
