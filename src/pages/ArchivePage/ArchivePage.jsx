import {useDispatch, useSelector} from "react-redux";
import {Typography, Spin, Divider} from "antd";

import Container from "../../shared/components/Container/Container.jsx";

import TodosList from "../../modules/Todos/TodosList/TodosList.jsx";

import {
    selectArchivedTodos, selectTodosLoading, selectTodosError,
} from "../../redux/todos/todosSelectors.js";

import useTodosActions from "../../shared/hooks/useTodosActions.jsx";

const {Title} = Typography;

export default function ArchivePage() {
    const archivedTodos = useSelector(selectArchivedTodos);
    const loading = useSelector(selectTodosLoading);
    const error = useSelector(selectTodosError);

    const {
        handleDelete,
        handleToggleArchive,
      } = useTodosActions();


    if (loading && !archivedTodos.length) return (<div style={{display: "flex", justifyContent: "center", padding: 40}}>
            <Spin fullscreen tip="Loading archived tasks..."/>
        </div>);

    if (error) return (<div style={{textAlign: "center", color: "red", padding: 40}}>
            {error}
        </div>);

    return (<Container>
            <Title level={2} style={{marginBottom: 16}}>
                🗄️ Archived Tasks
            </Title>

            <Divider/>

            <TodosList
                items={archivedTodos}
                onDelete={handleDelete}
                onArchive={handleToggleArchive}/>
        </Container>);
}
