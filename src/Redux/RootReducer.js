import { combineReducers } from "redux";
import CreateEditModalReducer from "./Reducers/CreateEditModalReducer";
import TaskReducer from "./Reducers/TaskReducer";
import TaskinfoModalReducer from "./Reducers/TaskinfoModalReducer";

const RootReducer = combineReducers({
  tasks: TaskReducer,
  createEditModal: CreateEditModalReducer,
  TaskInfoModal: TaskinfoModalReducer,
});

export default RootReducer;
