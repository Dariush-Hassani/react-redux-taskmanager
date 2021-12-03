import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TasksList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <>
      {tasks.length > 0 ? (
        <Box>
          {tasks.map((task, index) => {
            return <TaskItem task={task} haveActions={true} key={index} />;
          })}
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};

export default TasksList;
