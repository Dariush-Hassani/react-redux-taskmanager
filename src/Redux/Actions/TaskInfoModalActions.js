const openTaskInfoModal = (id) => {
  return {
    type: "taskInfoModal/open",
    payload: id,
  };
};
const closeTaskInfoModal = () => {
  return {
    type: "taskInfoModal/close",
  };
};

export { openTaskInfoModal, closeTaskInfoModal };
