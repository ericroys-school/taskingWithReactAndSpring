import { createSelector } from "reselect";

export const getTasks = (state) => state.tasks.data;
export const getTasksLoading = (state) => state.tasks.tasksIsLoading;

export const getIncompleteTasks = createSelector(getTasks, (tasks) =>
  tasks.filter((t) => !t.completed)
);

export const getCompletedTasks = createSelector(getTasks, (tasks) =>
  tasks.filter((t) => t.completed)
);
