const Modal = ({ isOpen, closeModal, children, position }) => {
  const modalStyle = {
    display: isOpen ? "block" : "none",
    position: "fixed",
    // top: position.y,
    // left: position.x,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: "20px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
    zIndex: 1000,
  };

  return (
    <div style={modalStyle}>
      {children}

      <br />
      <button onClick={closeModal}>Close</button>
    </div>
  );
};

export default Modal;
