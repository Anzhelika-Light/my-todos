import {createAsyncThunk} from "@reduxjs/toolkit";

import todosAPI from "../../shared/api/todos-api.js";

export const fetchTodos = createAsyncThunk(
    "todos/fetchAll",
    async (params = {}, {rejectWithValue}) => {
        try {
            return await todosAPI.fetch(params);
        } catch (err) {
            console.log(err);
            return rejectWithValue(
                err.response?.data?.message || "Can't load todos"
            );
        }
    }
);

export const addTodo = createAsyncThunk(
    "todos/add",
    async (todo, {rejectWithValue}) => {
        try {
            return await todosAPI.add(todo);
        } catch (err) {
            return rejectWithValue(
                err.response?.data?.message || "Can't add todo"
            );
        }
    }
);

export const updateTodo = createAsyncThunk(
    "todos/update",
    async ({id, updates}, {rejectWithValue}) => {
        try {
            console.log(updates)
            return await todosAPI.update(id, updates);
        } catch (err) {
            return rejectWithValue(
                err.response?.data?.message || "Can't update todo"
            );
        }
    }
);

export const deleteTodo = createAsyncThunk(
    "todos/delete",
    async (id, {rejectWithValue}) => {
        try {
            return await todosAPI.remove(id);
        } catch (err) {
            return rejectWithValue(
                err.response?.data?.message || "Can't delete todo"
            );
        }
    }
);
