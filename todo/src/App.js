import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>ToDo List</h1>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

export default App;