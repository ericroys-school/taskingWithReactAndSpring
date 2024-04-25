import React from "react";
import { FaRegCircle } from "react-icons/fa";
import { CiCircleRemove } from "react-icons/ci";
import styled from "styled-components";

const TaskContainer = styled.div`
  margin-top: 8px;
  border-radius: 8px;
  padding: 4px;
  position: relative;
  box-shadow: 0 4px 8px grey;
  text-align: center;
`;
export const getStyleForWarnDate = (startingDate, currentDate) =>
  startingDate > new Date(currentDate - 8640000 * 5)
    ? "none;"
    : "2px solid red;";

const TaskContainerWarn = styled(TaskContainer)`
  border-bottom: ${(props) =>
    getStyleForWarnDate(new Date(props.$created), Date.now())};
`;

const ButtonsContainer = styled.div`
  text-align: center;
`;

const TaskListItem = ({ task, taskRemove, taskMarkComplete }) => {
  const complete = task.completed;
  const Container = task.completed ? TaskContainer : TaskContainerWarn;

  return (
    <>
      <Container $created={task.createdAt}>
        <h4>{task.text}</h4>
        <p>Created: &nbsp; {task.createdAt}</p>
        <ButtonsContainer>
          <button
            className="btn"
            onClick={() => !complete && taskMarkComplete(task.id)}
          >
            {task.completed ? (
              <FaRegCircle size={30} color="green" />
            ) : (
              <FaRegCircle size={30} color="red" />
            )}
          </button>
          <button className="btn" onClick={() => taskRemove(task.id)}>
            <CiCircleRemove size={30} />
          </button>
        </ButtonsContainer>
      </Container>
    </>
  );
};
export default TaskListItem;
