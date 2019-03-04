import React from 'react';
import ToDo from './Todo';

const TodoList = (props) => {
    return (
        <div>
            {props.todos.map(todo => {
                return (
                    <ToDo 
                        key = {todo.id}
                        value = {todo.task}
                    />
                )
            })}
        </div>
    )
}

export default TodoList;