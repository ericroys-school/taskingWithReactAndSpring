import {
  TASK_ADD,
  TASK_LOAD_FAIL,
  TASK_LOAD_INPROGRESS,
  TASK_LOAD_SUCCESS,
  TASK_MARK_COMPLETE,
  TASK_REMOVE,
} from "../actions/actions";

const initialState = { taskIsLoading: false, data: [] };

export const taskReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TASK_ADD: {
      const { task } = payload;

      return {
        ...state,
        data: state.data.concat(task),
      };
    }

    case TASK_REMOVE: {
      const { id } = payload;
      return {
        ...state,
        data: state.data.filter((task) => task.id !== id),
      };
    }

    case TASK_MARK_COMPLETE: {
      const { id } = payload;
      return {
        ...state,
        data: state.data.map((task) => {
          if (task.id === id) {
            return { ...task, isCompleted: true };
          }
          return task;
        }),
      };
    }

    case TASK_LOAD_SUCCESS: {
      const { tasks } = payload.tasks;
      return {
        ...state,
        tasksIsLoading: false,
        data: tasks,
      };
    }

    case TASK_LOAD_FAIL: {
      return {
        ...state,
        tasksIsLoading: false,
      };
    }
    case TASK_LOAD_INPROGRESS: {
      return { ...state, tasksIsLoading: true };
    }
    default:
      return state;
  }
};
