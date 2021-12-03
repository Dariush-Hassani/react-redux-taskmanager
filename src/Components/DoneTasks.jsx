import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BlueButton, CustomDialogTitle } from "./_StyledComponents";
import TaskItem from "./TaskItem";

const DoneTasks = () => {
  const [open, setOpen] = useState(false);
  const [doneTasks, setDoneTasks] = useState([]);

  const openDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  const tasks = useSelector((state) => state.tasks.tasks);

  useEffect(() => {
    setDoneTasks([...tasks.filter((x) => x.done)]);
  }, [tasks]);

  return (
    <>
      {tasks.length > 0 ? (
        <Box sx={{ marginTop: 5 }}>
          <BlueButton onClick={openDialog}>View Done Tasks</BlueButton>

          <Dialog open={open} onClose={closeDialog}>
            <CustomDialogTitle>Done Tasks</CustomDialogTitle>
            <DialogContent>
              {doneTasks.length > 0 ? (
                <>
                  {doneTasks.map((task, index) => {
                    return (
                      <TaskItem task={task} key={index} haveActions={false} />
                    );
                  })}
                </>
              ) : (
                <Typography>You have not any done task</Typography>
              )}
            </DialogContent>
            <DialogActions>
              <Button variant="outlined" color="error" onClick={closeDialog}>
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};

export default DoneTasks;
