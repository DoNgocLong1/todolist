import React from "react";
import Display from "./components/Display";
import TodoList from './components/TodoList'
import { useSelector } from "react-redux";
import '../../data/list'
import {
  Container,
  ToolsBar,
} from "./Dashboard.styled";
import { selectTodolist } from "features/todolist/todolistSlice";

const Dashboard = () => {
  const state = useSelector(selectTodolist)
  const {todolist} = state
  const Div2: React.FC = () => <div> tab 2</div>;
  const Div3: React.FC = () => <div> tab 3</div>;
  return (
    <Container>
      <ToolsBar>
        <Display 
        tab1={<TodoList data = {todolist}/>} 
        tab2={<Div2 />} 
        tab3={<Div3/>}
        >
        </Display>
      </ToolsBar>
        

    </Container>
  );
};

export default Dashboard;
