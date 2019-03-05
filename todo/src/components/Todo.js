import React from 'react';
import { connect } from 'react-redux';
import { toggle } from './actions';
import { removeTodo } from './actions';

const Todo = (props) => {

  return(
    <div>
      <li style={props.completed ? {textDecoration: 'line-through'} : null} onClick={() => {props.toggle(props.id)}}>{props.todo}
        <button onClick={() => {props.removeTodo(props.id)}}>x</button>
      </li>
    </div>
  );
}

const mapStateToProps = state =>{
  return{
    todos: state.todos
  }
}

export default connect(mapStateToProps, { toggle: toggle, removeTodo: removeTodo })(Todo);