import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define an initial state
const initialState = {
  todos: [],
  status: "idle",
  error: null,
};
const token = JSON.parse(localStorage.getItem("user")).token;
const userEmail = JSON.parse(localStorage.getItem("user")).user.email;

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/todos/item/", {
      method: "GET",
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const allTodos = localStorage.setItem("allTodos", JSON.stringify(data));
    const filteredItems = data.filter((item) => item.user === userEmail);
    localStorage.removeItem("todos");
    localStorage.setItem("todos", JSON.stringify(filteredItems));
    return data;
  } catch (error) {
    throw new Error("Error fetching todos: " + error.message);
  }
});

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
