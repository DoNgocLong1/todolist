import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { DataType } from "data/list";
const todolist : DataType[] = JSON.parse(localStorage.getItem('todolist') || '')
interface IInitialState {
  todolist: DataType[] ;
  listLength: number
}

const initialState: IInitialState = {
  todolist: todolist,
  listLength: todolist.length,
};

const todolistSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<DataType>) => {
      console.log(action.payload);
      state.listLength++
      action.payload.key = state.listLength + 2
      state.todolist = [...state.todolist, action.payload]
    },
  },
});

export const { addItem } = todolistSlice.actions;

export default todolistSlice.reducer;

export const selectTodolist = (state: RootState) => state.todolist;