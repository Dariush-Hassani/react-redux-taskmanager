import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { PriorityEnum } from "../Config";
import { openModalForEdit } from "../Redux/Actions/CreateEditModalActions";
import { deleteTask, doneTask } from "../Redux/Actions/TaskActions";
import { closeTaskInfoModal } from "../Redux/Actions/TaskInfoModalActions";
import {
  CenterTypography,
  CircleBox,
  CustomDialogTitle,
  DoneTaskIcon,
  GreenButton,
  OrangeButton,
  RedButton,
} from "./_StyledComponents";

const TaskInfoModal = () => {
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState();

  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.TaskInfoModal);
  const tasks = useSelector((state) => state.tasks.tasks);

  const priority = PriorityEnum.find((x) => x.id === task?.priority);

  const openDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    if (open) dispatch(closeTaskInfoModal());
    setOpen(false);
  };

  const done = () => {
    dispatch(doneTask(task.id));
  };

  const edit = () => {
    closeDialog();
    dispatch(openModalForEdit(task.id));
  };

  const delet = () => {
    dispatch(deleteTask(task.id));
    closeDialog();
  };

  useEffect(() => {
    if (modalState.isOpen) {
      openDialog();
      setTask(tasks.find((x) => x.id === modalState.taskId));
    } else {
      closeDialog();
    }
  }, [modalState]);
  return (
    <div>
      <Dialog open={open} onClose={closeDialog}>
        <CustomDialogTitle>
          <Box>
            <CenterTypography variant="h6">
              Task Number {task?.id} ({task?.title})
            </CenterTypography>
          </Box>
          <Box>
            <CircleBox sx={{ backgroundColor: priority?.color }}></CircleBox>
            <Typography variant="span" sx={{ marginLeft: 1 }}>
              {priority?.title}
            </Typography>
          </Box>
        </CustomDialogTitle>
        <DialogContent>
          <Typography sx={{ padding: "0 10px" }}>{task?.desc}</Typography>
        </DialogContent>
        <DialogActions>
          {task?.done ? (
            <DoneTaskIcon sx={{ marginRight: "10px" }} />
          ) : (
            <GreenButton onClick={done}>Done</GreenButton>
          )}
          <OrangeButton onClick={edit}>Edit</OrangeButton>
          <RedButton onClick={delet}>Delete</RedButton>
          <Button variant="outlined" color="error" onClick={closeDialog}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TaskInfoModal;
