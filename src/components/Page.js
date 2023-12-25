import React from "react";

const Page = ({ components, onDrop, openModal }) => {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const componentType = e.dataTransfer.getData("text/plain");
    const position = { x: e.clientX, y: e.clientY };
    onDrop(componentType, position);
    openModal(position);
  };

  return (
    <div className="page" onDragOver={handleDragOver} onDrop={handleDrop}>
      {components.map((component, index) => {
        return component.type === "Label" ? (
          <div
            style={{
              left: component.position.x,
              top: component.position.y,
              // height: 100,
            }}
            className="labelWrapper"
          >
            see this label wrapper
          </div>
        ) : component.type === "Button" ? (
          <button className="buttonWrapper">Button</button>
        ) : (
          <input
            type="text"
            placeholder="Enter text"
            className="inputTypeWrapper"
          />
        );
      })}
    </div>
  );
};

export default Page;
