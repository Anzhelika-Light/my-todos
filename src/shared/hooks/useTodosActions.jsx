import { useState } from "react";
import { useDispatch } from "react-redux";
import { App as AntdApp } from "antd";

import {
  updateTodo,
  addTodo,
  deleteTodo,
} from "../../redux/todos/todosOperations";

const useTodosActions = () => {
  const dispatch = useDispatch();

  const [editingTodo, setEditingTodo] = useState(null);
  const { notification } = AntdApp.useApp();

  const handleAddOrEdit = (values, resetForm) => {
    if (editingTodo) {
      dispatch(
        updateTodo({
          id: editingTodo._id,
          updates: { ...values },
        })
      );
      setEditingTodo(null);
    } else {
      dispatch(addTodo(values));
    }
    resetForm();
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
    notification.success({
      message: "Success",
      description: "Task deleted successfully",
    });
  };

  const handleToggleArchive = (id, archived) => {
    dispatch(updateTodo({ id, updates: { archived } }));
    notification.success({
      message: "Success",
      description: `Task ${
        archived ? "archived" : "retore from archive"
      } successfully`,
    });
  };

  const handleToggleCompleted = (id, completed) => {
    dispatch(updateTodo({ id, updates: { completed } }));
    notification.success({
      message: "Success",
      description: `Task ${
        completed ? "mark completed" : "mark uncompleted"
      } successfully`,
    });
  };

  return {
    handleAddOrEdit,
    handleDelete,
    handleToggleArchive,
    handleToggleCompleted,
    editingTodo,
    setEditingTodo,
  };
};

export default useTodosActions;
