import { useDispatch, useSelector } from "react-redux";
import { App as AntdApp, Spin, Divider, Alert } from "antd";

import TodosList from "./TodosList/TodosList";
import AddTodoForm from "./AddTodoForm/AddTodoForm";

import {
  selectActiveTodos,
  selectTodosLoading,
  selectTodosError,
} from "../../redux/todos/todosSelectors";
import { fetchTodos } from "../../redux/todos/todosOperations";

import useTodosActions from "../../shared/hooks/useTodosActions";

export default function Todos() {
  const dispatch = useDispatch();
  const { items, page, perPage, totalItems } = useSelector(selectActiveTodos);
  const loading = useSelector(selectTodosLoading);
  const error = useSelector(selectTodosError);

  const {
    handleAddOrEdit,
    handleDelete,
    handleToggleArchive,
    handleToggleCompleted,
    editingTodo,
    setEditingTodo,
  } = useTodosActions();
 
  const handlePageChange = (newPage) => {
    dispatch(fetchTodos({ page: newPage, perPage }));
  };

  if (loading && !items.length)
    return <Spin fullscreen tip="Loading todos..." />;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: 24 }}>
      {error && <Alert message={error} type="error" showIcon />}

      <AddTodoForm
        onSubmit={handleAddOrEdit}
        editingTodo={editingTodo}
        onCancelEdit={() => setEditingTodo(null)}
      />

      <Divider />

      <TodosList
        items={items}
        onEdit={(todo) => setEditingTodo(todo)}
        onDelete={handleDelete}
        onArchive={handleToggleArchive}
        onToggleCompleted={handleToggleCompleted}
        page={page}
        pageSize={perPage}
        total={totalItems}
        onChangePage={handlePageChange}
      />

    </div>
  );
}
