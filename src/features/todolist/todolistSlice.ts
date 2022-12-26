import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { DataType } from "data/list";
const todolistJSON: any = localStorage.getItem('todolist') || []
const todolist = JSON.parse(todolistJSON)
interface IInitialState {
  todolist: DataType[] ;
  listLength: number
}

const initialState: IInitialState = {
  todolist: [todolist],
  listLength: 0,
};

const todolistSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<DataType>) => {
      state.todolist = [...state.todolist, action.payload]
    },
  },
});

/* export const { loginSuccess } = authSlice.actions; */

export default todolistSlice.reducer;

export const selectTodolist = (state: RootState) => state.todolist;