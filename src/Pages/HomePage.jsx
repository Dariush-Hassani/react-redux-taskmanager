import { Container } from "@mui/material";
import React from "react";
import CreateEditModal from "../Components/CreateAndEditModal";
import CreateTask from "../Components/CreateTask";
import DoneTasks from "../Components/DoneTasks";
import { CenterTypography } from "../Components/_StyledComponents";
import TaskInfoModal from "../Components/TaskInfoModal";
import TasksList from "../Components/TasksList";

const HomePage = () => {
  return (
    <Container maxWidth="md" sx={{ paddingBottom: 7 }}>
      <CenterTypography sx={{ marginTop: 7 }} variant="h4">
        Hello World
      </CenterTypography>
      <CreateTask />
      <CreateEditModal />
      <DoneTasks />
      <TasksList />
      <TaskInfoModal />
    </Container>
  );
};

export default HomePage;
