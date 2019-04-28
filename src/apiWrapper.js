import * as config from './config';

let list = [];

const getKey = () => {
  const key = `${config.STORAGE_PREFIX}__tasks`;
  console.log('key:', key);
  return key;
}

export const readTasks = () => {
  list = JSON.parse(localStorage.getItem(getKey())) || [
    {
      "done": true,
      "id": 1,
      "date": "2019-04-28T05:17:15.101Z",
      "title": "Some predefined task (done)",
      "priority": 3
    },
    {
      "done": false,
      "id": 2,
      "date": "2019-04-28T05:17:15.101Z",
      "title": "Some predefined task (not done)",
      "priority": 3
    }
  ];
  // return Promise.resolve([...list])
  return new Promise(resolve => setTimeout(resolve, config.API_DELAY, [...list]));
};

export const createTask = task => {
  let newTask = {
    done: false,
    id: Date.now(),
    date: new Date(),
    title: 'New item',
    ...task,
  };
  list = [...list, newTask];
  localStorage.setItem(getKey(), JSON.stringify(list));
  return new Promise(resolve => setTimeout(resolve, config.API_DELAY, newTask));
};

export const deleteTask = taskId => {
  list = list.filter(el => el.id !== taskId);
  localStorage.setItem(getKey(), JSON.stringify(list));
  return new Promise(resolve => setTimeout(resolve, config.API_DELAY));
};

export const updateTask = (taskId, updates) => {
  list = list.map(el =>
    el.id !== taskId
      ? el
      : {
        ...el,
        ...updates,
      },
  );
  localStorage.setItem(getKey(), JSON.stringify(list));
  const updatedElement = list.find(el => el.id === taskId);
  return new Promise(resolve => setTimeout(resolve, config.API_DELAY, updatedElement));
};
