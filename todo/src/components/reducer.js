import { ADDTODO, REMOVETODO, TOGGLE, CLEARCOMPLETED } from './actions';

const initialState = {
  todos: [
    {
      id: 0,
      value: 'Make a Todo List',
      completed: true
    },
    {
      id: 1,
      value: 'Add redux',
      completed: false
    }
  ]
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADDTODO:
      if(action.addedTodo !== ""){
        return {todos: [...state.todos, {id: state.todos.length, value: action.addedTodo, completed: false}]}
      }
      else{
        return {todos: [...state.todos]}
      }

    case TOGGLE:
    let task = state.todos.map(todo =>{
        if(todo.id === action.id){
          todo.completed = !todo.completed
          return todo 
        }
        else{
          return todo
        }
      })
      return { todos: task}

    case REMOVETODO:
      let removed = state.todos.filter(comment => {
        if(comment.id !== action.id){
          return comment
        }
        else{
          return null
        }
      });
      return { todos: removed }

    case CLEARCOMPLETED:
      let cleared = state.todos.filter(clear => {
        if(clear.completed === false){
          return clear
        }
        else{  
          return null
        }
      })
      return { todos: cleared }

    default:
      return state;
  }
};