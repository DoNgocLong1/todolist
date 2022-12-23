import React from "react";
import Display from "./components/Display";
import TodoList from './components/TodoList'
import {
  Container,
  ToolsBar,
  DisplayWrapper,
  CountTask,
  Label,
} from "./Dashboard.styled";
const Dashboard = () => {
  const Div2: React.FC = () => <div> tab 2</div>;
  const Div3: React.FC = () => <div> tab 3</div>;
  return (
    <Container>
      <ToolsBar>
        <Display tab1={<TodoList/>} tab2={<Div2 />} tab3={<Div3/>}>
        </Display>
      </ToolsBar>
        

    </Container>
  );
};

export default Dashboard;
