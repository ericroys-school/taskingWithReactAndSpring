import {
  taskLoadFail,
  taskLoadInProgress,
  taskLoadSuccess,
  taskAdd,
  taskRemove,
  taskMarkComplete,
} from "../actions/actions";

export const displayAlert = (text) => () => {
  alert({ text });
};

export const loadTasks = () => async (dispatch, getState) => {
  dispatch(taskLoadInProgress());
  try {
    const response = await fetch("/api/tasks");
    const taskResponse = await response.json();
    if (response.ok) {
      dispatch(taskLoadSuccess(taskResponse));
    } else {
      dispatch(taskLoadFail());
    }
  } catch (error) {
    dispatch(taskLoadFail());
    displayAlert(error);
  }
};

export const addTask = (t) => async (dispatch, getState) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: t }),
  };

  try {
    const response = await fetch(`/api/tasks`, options);
    const taskResponse = await response.json();
    if (response.ok) {
      dispatch(taskAdd(taskResponse));
    }
  } catch (e) {
    displayAlert(e);
  }
};

export const removeTask = (id) => async (dispatch, getState) => {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(`/api/tasks/${id}`, options);
    const taskResponse = await response.json();
    if (response.ok) {
      dispatch(taskRemove(taskResponse.id));
    }
  } catch (e) {
    displayAlert(e);
  }
};

export const taskCompleted = (id) => async (dispatch, getState) => {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(`/api/tasks/${id}/markcomplete`, options);
    const taskResponse = await response.json();
    if (response.ok) {
      dispatch(taskMarkComplete(taskResponse.id));
    }
  } catch (e) {
    displayAlert(e);
  }
};
