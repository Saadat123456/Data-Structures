import React from "react";
import { useState } from "react";
import Node from "./node";

interface NodeUIProps {
  node: Node,
  onNodeClick: (node: Node) => void,
  onNodeDelete: (node: Node) => void,
}

const NodeUI = ({ node, onNodeClick, onNodeDelete }: NodeUIProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(node.value);

  const handleNodeClick = () => {
    onNodeClick(node);
  };

  const handleNodeDelete = () => {
    onNodeDelete(node);
  };

  const handleNodeEdit = () => {
    setIsEditing(true);
  };

  const handleNodeSave = () => {
    setIsEditing(false);
    node.value = value;
  };

  const handleNodeCancel = () => {
    setIsEditing(false);
    setValue(node.value);
  };

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value));
  };

  return (
    <div
      className={"node" +
        node.isSelected ? " node--selected" : "" +
        isHovered ? " node--hovered" : ""
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="node__content">
        {isEditing ? (
          <>
            <input
              title="Edit node value"
              className="node__input"
              type="number"
              value={`${value}`}
              onChange={handleValueChange}
            />
            <button className="node__button" onClick={handleNodeSave}>
              Save
            </button>
            <button className="node__button" onClick={handleNodeCancel}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <span className="node__value">{`${node.value}`}</span>
            <button className="node__button" onClick={handleNodeEdit}>
              Edit
            </button>
          </>
        )}
      </div>
      <button className="node__delete" onClick={handleNodeDelete}>
        Delete
      </button>
      <button className="node__select" onClick={handleNodeClick}>
        Select
      </button>
    </div>
  );
}

export default NodeUI;
