import { Typography, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { PriorityEnum } from "../Config";
import { openModalForEdit } from "../Redux/Actions/CreateEditModalActions";
import { openTaskInfoModal } from "../Redux/Actions/TaskInfoModalActions";
import { doneTask } from "../Redux/Actions/TaskActions";
import {
  CircleBox,
  DescriptionTypography,
  TaskListBox,
  OrangeButton,
  FlexEndBox,
  GreenButton,
  DoneTaskIcon,
} from "./_StyledComponents";

const TaskItem = ({ task, haveActions }) => {
  //Priority Info
  const priority = PriorityEnum.find((x) => x.id === task.priority);

  const dispatch = useDispatch();

  const edit = () => {
    dispatch(openModalForEdit(task.id));
  };

  const done = () => {
    dispatch(doneTask(task.id));
  };

  const openInfoModal = (e) => {
    if (!haveActions || e.target.tagName === "BUTTON") return;
    dispatch(openTaskInfoModal(task.id));
  };

  return (
    <TaskListBox
      sx={{ marginTop: 1, border: "1px solid black" }}
      onClick={openInfoModal}
    >
      <Box>
        <Typography variant="h6">{task.title}</Typography>
        <DescriptionTypography sx={{ fontSize: 13, color: "gray" }}>
          {task.desc.trim().length > 50
            ? task.desc.substr(0, 50) + " ..."
            : task.desc}
        </DescriptionTypography>
      </Box>
      <Box>
        <FlexEndBox>
          <Typography variant="span">{priority?.title}</Typography>
          <CircleBox sx={{ backgroundColor: priority?.color }}></CircleBox>
        </FlexEndBox>
        {haveActions ? (
          <Stack direction="row" spacing={1} sx={{ marginTop: 1 }}>
            {task.done ? (
              <DoneTaskIcon />
            ) : (
              <GreenButton onClick={done} sx={{ height: "30px" }}>
                Done
              </GreenButton>
            )}

            <OrangeButton onClick={edit} sx={{ height: "30px" }}>
              Edit
            </OrangeButton>
          </Stack>
        ) : (
          <></>
        )}
      </Box>
    </TaskListBox>
  );
};

export default TaskItem;
