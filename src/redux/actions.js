import * as api from '../apiWrapper';

export const ADD_ITEM = 'ADD_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const LOAD_ITEMS = 'LOAD_ITEMS';
export const UPDATE_FILTER = 'UPDATE_FILTER';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';

export const addTask = task => dispatch =>
  api.createTask(task).then(payload =>
    dispatch({
      type: ADD_ITEM,
      payload,
    }),
  );

export const updateTask = (taskId, updates) => dispatch =>
  api.updateTask(taskId, updates).then(payload =>
    dispatch({
      type: UPDATE_ITEM,
      payload,
    }),
  );

export const addTasks = payload => ({
  type: LOAD_ITEMS,
  payload,
});

export const loadItems = () => dispatch => api.readTasks().then(items => dispatch(addTasks(items)));

export const setFilter = (payload) => ({
  type: UPDATE_FILTER,
  payload,
});

export const showCompleted = payload => ({
  type: SHOW_COMPLETED,
  payload,
});