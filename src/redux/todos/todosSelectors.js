export const selectTodos = (state) => state.todos.items;
export const selectActiveTodos = ({ todos }) => ({
  items: todos.items.filter((t) => !t.archived),
  page: todos.page,
  perPage: todos.perPage,
  totalItems: todos.totalItems,
});
export const selectArchivedTodos = (state) =>
  state.todos.items.filter((t) => t.archived);
export const selectTodosLoading = (state) => state.todos.loading;
export const selectTodosError = (state) => state.todos.error;
