import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './components/reducer';
import { loadState, saveState } from './components/localStorage'
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './index.css';

const persistedState = loadState();
const store = createStore(reducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


store.subscribe(() => {
  saveState(store.getState());
});

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


/*



*/