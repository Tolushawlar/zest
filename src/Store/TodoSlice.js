import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define an initial state
const initialState = {
  todos: [],
  status: "idle", // 'idle', 'loading', 'succeeded', or 'failed'
  error: null,
};

// Create an async thunk to fetch todos
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  try {
    const response = await fetch("https://dummyjson.com/todos");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    localStorage.setItem("todos", JSON.stringify(data));
    return data;
  } catch (error) {
    throw new Error("Error fetching todos: " + error.message);
  }
});

// Create a slice of the Redux store
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // Define your regular synchronous reducers here if needed
  },
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

// Export the actions and reducer
export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
