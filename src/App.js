import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import "./components/TodoComponents/Todo.scss"


const list = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // links from array on Todo
      tasksOnState: list,
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

  toggleItem = id => {
    this.setState({
      groceries: this.state.tasksOnState.map(item => {
        if (item.id === id) {
          item.completed = !item.completed;
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item;
        }
      })
    })
  }

  clearCompleted = () => {
    this.setState({
      tasksOnState: this.state.tasksOnState.filter(item => item.completed !== true)
    })
  };

  render() {
    return (
      <div className="container">
        <div className="list">
          <h2>Welcome to your Todo App!</h2>


          <TodoList list={this.state.tasksOnState} toggleItem={this.toggleItem} />

          <TodoForm
            // on TodoForm.js there are values, and these are assigned to it.
            addTask={this.addTask}
            formState={this.state}
            handleProp={this.handleChanges}
            clearCompleted={this.clearCompleted}
          />
        </div>
      </div>
    );
  }
}

export default App;
