const initialState = {
  tasks: [],
};

export default function TaskReducer(state = initialState, action) {
  if (action.type === "task/add") {
    return {
      ...state,
      tasks: [action.payload, ...state.tasks],
    };
  } else if (action.type === "task/edit") {
    let newTasks = [...state.tasks];
    let index = newTasks.findIndex((x) => x.id === action.payload.id);
    newTasks[index] = action.payload;
    return {
      ...state,
      tasks: [...newTasks],
    };
  } else if (action.type === "task/done") {
    let newTasks = [...state.tasks];
    let index = newTasks.findIndex((x) => x.id === action.payload);
    newTasks[index].done = true;
    return {
      ...state,
      tasks: [...newTasks],
    };
  } else if (action.type === "task/delete") {
    let newTasks = [...state.tasks.filter((x) => x.id != action.payload)];
    return {
      ...state,
      tasks: [...newTasks],
    };
  }
  return state;
}
