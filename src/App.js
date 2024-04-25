import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskList from "./pages/tasks/task.list";
import styled from "styled-components";

const AppContainer = styled.div`
  margin: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  width: 100vw;
  height: 100vh;
`;

const App = () => {
  return (
    <AppContainer>
      <TaskList />
    </AppContainer>
  );
};

export default App;
