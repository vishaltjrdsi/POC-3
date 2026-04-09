import { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useSelector } from "react-redux";
import { ModuleRegistry, ClientSideRowModelModule } from "ag-grid-community";

// Register AG Grid modules
ModuleRegistry.registerModules([ClientSideRowModelModule]);

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const userRole = user?.role;

  const defaultColDef = useMemo(
    () => ({
      resizable: true,
      suppressSizeToFit: true,
    }),
    []
  );

  const rowData = useMemo(
    () => [
      { id: 1, name: "Vishal Torgal", email: "vishal.torgal@jrdsi.com" },
      { id: 2, name: "John Doe", email: "johndoe@gmail.com" },
      { id: 3, name: "Jane Smith", email: "janesmith@gmail.com" },
    ],
    []
  );

  const columnDefs = useMemo(
    () => [
      { field: "id", headerName: "ID", flex: 1, minWidth: 70 },
      { field: "name", headerName: "Name", flex: 1 },
      { field: "email", headerName: "Email", flex: 1 },
      {
        headerName: "Actions",
        field: "actions",
        flex: 1,
        minWidth: 150,
        cellRenderer: (params) => (
          <div>
            <button
              disabled={userRole !== "admin"}
              onClick={() => {
                if (userRole === "admin") {
                  alert(`Hello Admin! Editing user ID: ${params.data.id}`);
                }
              }}
              style={{
                opacity: userRole !== "admin" ? 0.5 : 1,
                cursor: userRole !== "admin" ? "not-allowed" : "pointer",
              }}
            >
              Edit
            </button>
          </div>
        ),
        width: 200,
      },
    ],
    [userRole]
  );

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
      />
    </div>
  );
};

export default Dashboard;