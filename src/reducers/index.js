import types from '../constants/';

export const initialState = {
  todos: [],
  deletedTodo: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SUBMIT_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
          },
        ],
      };
    case types.DELETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.filter(todo => (
            todo.id !== action.id
          )),
        ],
        deletedTodo: state.todos.filter(todo => todo.id === action.id)[0],
      };

    case types.UNDELETE_TODO:
      return {
        ...state,
        todos: [
          state.deletedTodo,
          ...state.todos,
        ],
        deletedTodo: {},
      };
    default:
      return state;
  }
};

export default reducer;
