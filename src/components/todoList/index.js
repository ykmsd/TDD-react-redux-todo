import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ todos, deleteTodo }) => {
  const todoItems = todos.map(todo => (
    <li key={todo.id}>
      <button
        type="button"
        className="todo-delete uk-button uk-button-small uk-button-danger uk-margin-right"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>

      <span className="todo-text">{todo.text}</span>
    </li>
  ));

  return (
    <ul className="uk-list uk-list-striped uk-list-large">
      {todoItems}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })).isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoList;
