const initialState = {
  isOpen: false,
  taskId: 0,
};

export default function TaskinfoModalReducer(state = initialState, action) {
  if (action.type === "taskInfoModal/open") {
    return {
      ...state,
      isOpen: true,
      taskId: action.payload,
    };
  } else if (action.type === "taskInfoModal/close") {
    return {
      ...state,
      isOpen: false,
      taskId: 0,
    };
  }
  return state;
}
