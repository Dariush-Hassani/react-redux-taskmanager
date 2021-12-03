const initialState = {
  isOpen: false,
  isEdit: false,
  editTaskId: 0,
};

export default function CreateEditModalReducer(state = initialState, action) {
  if (action.type === "createEditModal/openCreate") {
    return {
      ...state,
      isOpen: true,
      isEdit: false,
      editTaskId: 0,
    };
  } else if (action.type === "createEditModal/openEdit") {
    return {
      ...state,
      isOpen: true,
      isEdit: true,
      editTaskId: action.payload,
    };
  } else if (action.type === "createEditModal/close") {
    return {
      ...state,
      isOpen: false,
      isEdit: false,
      editTaskId: 0,
    };
  }
  return state;
}
