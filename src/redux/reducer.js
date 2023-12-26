const initialState = {
  components: [],
  isModalOpen: false,
  modalPosition: { x: 0, y: 0 },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COMPONENT":
      return {
        ...state,
        components: [...state.components, action.payload],
      };
    case "OPEN_MODAL":
      return {
        ...state,
        isModalOpen: true,
        modalPosition: action.payload,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        isModalOpen: false,
      };
    default:
      return state;
  }
};

export default rootReducer;
