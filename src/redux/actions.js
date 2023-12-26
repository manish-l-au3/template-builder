export const addComponent = (componentType, position) => ({
  type: "ADD_COMPONENT",
  payload: { type: componentType, position },
});

export const openModal = (position) => ({
  type: "OPEN_MODAL",
  payload: position,
});

export const closeModal = () => ({
  type: "CLOSE_MODAL",
});
