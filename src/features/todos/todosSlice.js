import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todoExample",
  initialState: {
    entities: [], // array of todos
  },
  reducers: {
    todoAdded(state, action) {
      // update meeee
      state.entities.push(action.payload)
    },
  },
});

export const { todoAdded } = todosSlice.actions;

export default todosSlice.reducer;
