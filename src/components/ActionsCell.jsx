// ActionsCell.jsx
import React from "react";

const ActionsCell = ({ userRole }) => {
  return (
    <div>
      <button>View</button>{" "}
      {userRole === "admin" && <button>Edit</button>}
    </div>
  );
};

export default ActionsCell;