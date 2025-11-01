import {useEffect} from "react";
import {useDispatch} from "react-redux";

import Navigation from "./pages/Navigation";

import {fetchTodos} from "./redux/todos/todosOperations.js";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    return (
        <>
            <Navigation/>
        </>
    )
}

export default App
