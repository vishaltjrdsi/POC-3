import React from "react";

const AppGrid = ({ columns, rowData, userRole, onEdit }) => {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "20px",
      }}
    >
      <thead>
        <tr>
          {columns.map((col) => (
            <th
              key={col.field}
              style={{
                border: "1px solid #ccc",
                padding: "8px",
                textAlign: "left",
              }}
            >
              {col.headerName}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rowData.map((row) => (
          <tr key={row.id}>
            {columns.map((col) => (
              <td
                key={col.field}
                style={{ border: "1px solid #ccc", padding: "8px" }}
              >
                {col.field === "actions" && userRole === "admin" ? (
                  <button
                    onClick={() => onEdit(row)}
                    style={{ padding: "4px 8px", cursor: "pointer" }}
                  >
                    Edit
                  </button>
                ) : col.field !== "actions" ? (
                  row[col.field]
                ) : null}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AppGrid;