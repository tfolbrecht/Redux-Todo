import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './components/reducer';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './index.css';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
return (
    <div className="App">
      <h1>ToDo List</h1>
      <TodoList />
      <TodoForm />
    </div>
  );
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);