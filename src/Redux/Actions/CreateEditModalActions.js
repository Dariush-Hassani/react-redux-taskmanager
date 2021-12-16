const openModalForCreate = () => {
  return {
    type: "createEditModal/openCreate",
  };
  
};
const openModalForEdit = (id) => {
  return {
    type: "createEditModal/openEdit",
    payload: id,
  };
};
const closeCreateEditModal = () => {
  return {
    type: "createEditModal/close",
  };
};

export { openModalForCreate, openModalForEdit, closeCreateEditModal };
