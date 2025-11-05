import { useEffect, useRef } from "react";
import { App as AntdApp, List, Button, Typography, Pagination } from "antd";
import {
  CheckOutlined,
  UndoOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

export default function TodosList({
  items,
  onEdit,
  onToggleCompleted,
  onDelete,
  onArchive,
  page,
  perPage,
  total,
  onChangePage,
}) {
  const { notification } = AntdApp.useApp();

  const prevTodos = useRef(items);
  const prevPage = useRef(page);

  useEffect(() => {
    if (page !== prevPage.current) {
      prevPage.current = page;
      return;
    }
    if (prevTodos.current.length > 0) {
      if (items.length > prevTodos.current.length) {
        notification.success({
          message: "Success",
          description: "Task added successfully",
        });
      } else if (
        items.length === prevTodos.current.length &&
        JSON.stringify(items) !== JSON.stringify(prevTodos.current)
      ) {
        notification.success({
          message: "Success",
          description: "Task updated successfully",
        });
      }
    }
    prevTodos.current = items;
  }, [items, notification, page]);

  if (!items?.length) return <p>Todos list empty</p>;

  return (
    <>
      <List
        bordered
        dataSource={items}
        renderItem={(todo) => (
          <List.Item
            actions={[
              onEdit && (
                <Button
                  key="edit"
                  icon={<EditOutlined />}
                  onClick={() => onEdit(todo)}
                >
                  Edit
                </Button>
              ),
              onToggleCompleted && (
                <Button
                  key="complete"
                  type={todo.completed ? "default" : "primary"}
                  icon={todo.completed ? <UndoOutlined /> : <CheckOutlined />}
                  onClick={() => onToggleCompleted(todo._id, !todo.completed)}
                >
                  {todo.completed ? "Mark uncompleted" : "Mark completed"}
                </Button>
              ),

              <Button
                key="archive"
                onClick={() => onArchive(todo._id, !todo.archived)}
              >
                {todo.archived ? "Restore from archive" : "Add to archive"}
              </Button>,
              <Button
                key="delete"
                icon={<DeleteOutlined />}
                danger
                onClick={() => onDelete(todo._id)}
              >
                Delete
              </Button>,
            ].filter(Boolean)}
          >
            <Text
              delete={todo.completed}
              strong={!todo.completed}
              style={{
                color: todo.completed ? "#8c8c8c" : "#000",
                transition: "color 0.3s ease",
              }}
            >
              {todo.title}
            </Text>
          </List.Item>
        )}
      />
      <Pagination
        current={page}
        pageSize={perPage}
        total={total}
        onChange={onChangePage}
        style={{ marginTop: 20, textAlign: "center" }}
      />
    </>
  );
}
