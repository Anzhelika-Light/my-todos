import axios from "axios";

const todosInstance = axios.create({
    baseURL: "https://my-todos-backend-fz5l.onrender.com/api/todos"
});

const todosAPI = {
    async fetch(params = {}) {
        const {page = 1, perPage = 10} = params;
        const {data} = await todosInstance.get("/", {
            params: {
                page,
                perPage,
            }
        });
        return data;
    },
    async add(payload) {
        const {data} = await todosInstance.post("/", payload);
        return data;
    },
    async update(id, payload) {
        const {data} = await todosInstance.put(`/${id}`, payload);
        return data;
    },
    async remove(id) {
        await todosInstance.delete(`/${id}`);
        return id;
    },
};

export default todosAPI;
