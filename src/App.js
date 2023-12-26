import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Page from "./components/Page";
import Modal from "./components/Modal";

import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  const [components, setComponents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [xModalPostition, setXModalPosition] = useState(0);

  const [yModalPostition, setYModalPosition] = useState(0);

  const openModal = (position, fromManual) => {
    // Use the provided position or default to (0, 0)

    if (fromManual) {
      setModalPosition({ x: xModalPostition, y: yModalPostition });
    } else {
      const newPosition = position;

      setXModalPosition(newPosition.x);
      setYModalPosition(newPosition.y);

      setModalPosition({ x: newPosition.x, y: newPosition.y });
      setIsModalOpen(true);
    }
  };

  useEffect(() => {
    openModal(false, true);
  }, [modalPosition]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDrop = (componentType, position) => {
    setComponents((prevComponents) => [
      ...prevComponents,
      { type: componentType, position },
    ]);

    // Pass the mouse position to openModal
    openModal(position);
  };

  return (
    <Provider store={store}>
      <div className="App">
        <h1>React Page Builder</h1>
        <Modal
          isOpen={isModalOpen}
          closeModal={closeModal}
          position={modalPosition}
        >
          <h2>Edit Label</h2>
          <p>X: {modalPosition.x}</p>
          <input
            type="text"
            placeholder="Enter value"
            className="inputTypeWrapper"
            value={modalPosition.x}
            onChange={(e) => {
              console.log("e.target.value x==>", e.target.value);
              // setXModalPosition()
              setModalPosition({ x: e.target.value, y: modalPosition.y });
            }}
          />
          <p>Y: {modalPosition.y}</p>
          <input
            type="text"
            placeholder="Enter value"
            className="inputTypeWrapper"
            value={modalPosition.y}
            onChange={(e) => {
              console.log("e.target.value y==>", e.target.value);
              // setXModalPosition()
              setModalPosition({ x: modalPosition.x, y: e.target.value });
            }}
          />
        </Modal>

        <div className="builder-container">
          <Page
            components={components}
            onDrop={handleDrop}
            openModal={openModal}
          />
          <Sidebar />
        </div>
      </div>
    </Provider>
  );
}

export default App;
