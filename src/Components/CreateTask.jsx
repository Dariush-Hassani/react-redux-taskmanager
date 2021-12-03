import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CenterFlexBox, CircleFixedButton, OrangeButton } from "./_StyledComponents";
import AddIcon from "@mui/icons-material/Add";
import { openModalForCreate } from "../Redux/Actions/CreateEditModalActions";

const CreateTask = () => {
  const dispatch = useDispatch();
  const taskLength = useSelector((state) => state.tasks.tasks.length);

  const addTask = () => {
    dispatch(openModalForCreate());
  }

  return (
    <>
      {taskLength === 0 ? (
        <CenterFlexBox sx={{ marginTop: 25 }}>
          <OrangeButton variant="contained" onClick={addTask}>
            Create your first task
          </OrangeButton>
        </CenterFlexBox>
      ) : (
        <CircleFixedButton onClick={addTask}>
          <AddIcon />
        </CircleFixedButton>
      )}
    </>
  );
};

export default CreateTask;
