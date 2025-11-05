import {createSlice} from "@reduxjs/toolkit";

import {fetchTodos, addTodo, updateTodo, deleteTodo} from "./todosOperations.js";

const initialState = {
    items: [],
    page: 1,
    perPage: 10,
    totalItems: 0,
    loading: false,
    error: null,
};

const todosSlice = createSlice({
    name: "todos",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTodos.fulfilled, (state, {payload}) => {
                const {items, totalItems, page} = payload;
                state.loading = false;
                state.items = items;
                state.totalItems = totalItems;
                state.page = page;
            })
            .addCase(fetchTodos.rejected, (state, {payload}) => {
                state.loading = false;
                state.error = payload;
            })
            .addCase(addTodo.pending, (state) => {
                state.error = null;
            })
            .addCase(addTodo.fulfilled, (state, {payload}) => {
                state.items.push(payload);
            })
            .addCase(addTodo.rejected, (state, {payload}) => {
                state.error = payload;
            })
            .addCase(updateTodo.fulfilled, (state, {payload}) => {
                const index = state.items.findIndex((t) => t._id === payload._id);
                if (index !== -1) state.items[index] = payload;
            })
            .addCase(updateTodo.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(deleteTodo.fulfilled, (state, {payload}) => {
                state.items = state.items.filter((t) => t._id !== payload);
            })
            .addCase(deleteTodo.rejected, (state, {payload}) => {
                state.error = payload;
            });
    },
});

export default todosSlice.reducer;
