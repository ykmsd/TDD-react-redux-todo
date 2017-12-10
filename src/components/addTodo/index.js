import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const AddTodo = ({ submitTodo, undeleteTodo }) => {
  let input;
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          submitTodo(input.value);
          input.value = '';
        }}
      >
        <input
          className="todo-input uk-input uk-form-width-medium"
          ref={(element) => {
            input = element;
          }}
        />

        <button
          type="submit"
          className="todo-submit uk-button uk-button-primary"
        >
          Add Todo
        </button>

        <button
          className="todo-undelete uk-button uk-button-default"
          onClick={() => undeleteTodo()}
        >
          Undelete
        </button>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  submitTodo: PropTypes.func.isRequired,
  undeleteTodo: PropTypes.func.isRequired,
};

export default AddTodo;
