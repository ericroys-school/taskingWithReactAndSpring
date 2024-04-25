import React, { useEffect } from "react";
import TaskListItem from "./task.list.item";
import AddTask from "./task.add";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  displayAlert,
  loadTasks,
  removeTask,
  taskCompleted,
} from "../../thunks/thunks";
import {
  getCompletedTasks,
  getIncompleteTasks,
  getTasksLoading,
} from "../../selectors/selectors";

const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
  margin-top: 20px;
  padding-top: 8px;
`;

const HeadingWrapper = styled.h2`
  max-width: 700px;
  margin-top: 30px;
  padding: 12px;
`;

const TaskList = ({
  incompleteTasks,
  completedTasks,
  isLoading,
  loadTasks,
  taskRemove,
  taskMarkComplete,
  sendAlert,
}) => {
  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  const loadingMsg = <div>Loading...</div>;
  const content = (
    <ListWrapper>
      <AddTask />
      <HeadingWrapper>Uncompleted Tasks</HeadingWrapper>
      {incompleteTasks.map((item) => {
        return (
          <TaskListItem
            key={item.id}
            task={item}
            taskRemove={taskRemove}
            taskMarkComplete={taskMarkComplete}
            sendAlert={sendAlert}
          />
        );
      })}
      <HeadingWrapper>Completed Tasks</HeadingWrapper>
      {completedTasks.map((item) => {
        return (
          <TaskListItem
            key={item.id}
            task={item}
            taskRemove={taskRemove}
            sendAlert={sendAlert}
          />
        );
      })}
    </ListWrapper>
  );

  return isLoading ? loadingMsg : content;
};

//represents entire redux state
const mapStateToProps = (state) => ({
  isLoading: getTasksLoading(state),
  completedTasks: getCompletedTasks(state),
  incompleteTasks: getIncompleteTasks(state),
});
const mapDispatchToProps = (dispatch) => ({
  taskRemove: (id) => dispatch(removeTask(id)),
  taskMarkComplete: (id) => dispatch(taskCompleted(id)),
  loadTasks: () => dispatch(loadTasks()),
  sendAlert: (text) => dispatch(displayAlert(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
