const addTask = (task) => {
  return {
    type: "task/add",
    payload: task,
  };
};

const editTask = (task) => {
  return {
    type: "task/edit",
    payload: task,
  };
};

const doneTask = (id) => {
  return {
    type: "task/done",
    payload: id,
  };
};

const deleteTask = (id) => {
  return {
    type: "task/delete",
    payload: id,
  };
};

export { addTask, editTask, doneTask, deleteTask };
