import React from 'react'
import {render as reactRender} from 'react-dom'

import App from './App'
import initialState from './state'

let state = localStorage.getItem('state'); // Read state from localStorage

// Check if anything was in localStorage, if so JSON.parse it. If not, just default to initialState
if(!state) {
  state = initialState;
} else {
  state = JSON.parse(state);
}

state = handler(state, {}); // Initialize the state
function dispatch(action) {
  state = handler(state, action);
  render(state);
  localStorage.setItem('state', JSON.stringify(state));
}

function handler(state = initialState, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return (
        Object.assign({}, state, {
          todos: [{
            id: state.todos.length + 1,
            completed: false,
            text: action.text
          }, ...state.todos]})
      );
    case 'COMPLETE_TODO':
      return Object.assign({}, state, { todos: state.todos.map(todo =>
        todo.id === action.id ? Object.assign({}, todo, { completed: !todo.completed }) : todo
      )});
    case 'UPDATE_TODO':
      return Object.assign({}, state, { todos: state.todos.map(todo =>
        todo.id === action.id ? Object.assign({}, todo, { text: action.text }) : todo
      )});
    case 'DELETE_TODO':
      return Object.assign({}, state, { todos: state.todos.filter(todo =>
        todo.id !== action.id
      )});
    case 'COMPLETE_ALL':
      const areAllMarked = state.todos.every(todo => todo.completed);
      return Object.assign({}, state, {todos: state.todos.map(todo => Object.assign({}, todo, {
        completed: !areAllMarked
      }))});
    case 'CHANGE_FILTER':
      return Object.assign({}, state, {filter: action.filter});
    case 'START_EDITING_TODO':
      return Object.assign({}, state, {editing: {id: action.id, text: action.text}});
    case 'EDITING_TODO':
      return Object.assign({}, state, {editing: Object.assign({}, state.editing, {text: action.text})});
    case 'STOP_EDITING_TODO':
      return Object.assign({}, state, {editing: {}});
    default:
      return state;
  }
}

function render(state) {
  reactRender(<App dispatch={dispatch} {...state} />, document.querySelector('#app'))
}

render(state)
