import {Typography} from "antd";

import Container from "../../shared/components/Container/Container.jsx";

import Todos from "../../modules/Todos/Todos.jsx";

const {Title} = Typography;

const HomePage = () => {
    return (
        <Container>
            <Title level={2} style={{marginBottom: 24}}>
                📝 My Tasks
            </Title>

            <Todos/>
        </Container>
    );
};

export default HomePage;

