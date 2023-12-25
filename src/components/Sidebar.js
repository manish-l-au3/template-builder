import React from "react";

const components = ["Button", "Label", "Input"]; // Added 'Button' type

const Sidebar = () => {
  const handleDragStart = (e, componentType) => {
    e.dataTransfer.setData("text/plain", componentType);
  };

  return (
    <div className="sidebar">
      <h2 className="side_bar_block_title">BLOCKS</h2>
      {/* <ul> */}
      {components.map((componentType) => (
        <div
          style={{
            backgroundColor: "white",
            marginTop: 20,
            height: 49,
            borderRadius: 4,
            marginLeft: 24,
            marginRight: 24,
            display: "flex",
          }}
          key={componentType}
          draggable
          onDragStart={(e) => handleDragStart(e, componentType)}
        >
          <img
            src={require("./grip-vertical.png")}
            style={{ height: 18, width: 11, marginLeft: 11, marginTop: 15 }}
          />
          <p className="blockText"> {componentType} </p>
        </div>
      ))}
      {/* </ul> */}
    </div>
  );
};

export default Sidebar;
