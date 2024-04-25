export const TASK_ADD = "TASK_ADD";
export const taskAdd = (task) => ({
  type: TASK_ADD,
  payload: { task },
});

export const TASK_REMOVE = "TASK_REMOVE";
export const taskRemove = (id) => ({
  type: TASK_REMOVE,
  payload: { id },
});

export const TASK_MARK_COMPLETE = "TASK_COMPLETE";
export const taskMarkComplete = (id) => ({
  type: TASK_MARK_COMPLETE,
  payload: { id },
});

export const TASK_LOAD_INPROGRESS = "TASK_LOAD_INPROGRESS";
export const taskLoadInProgress = () => ({
  type: TASK_LOAD_INPROGRESS,
});

export const TASK_LOAD_SUCCESS = "TASK_LOAD_SUCCESS";
export const taskLoadSuccess = (tasks) => ({
  type: TASK_LOAD_SUCCESS,
  payload: { tasks },
});

export const TASK_LOAD_FAIL = "TASK_LOAD_FAIL";
export const taskLoadFail = () => ({
  type: TASK_LOAD_FAIL,
});
