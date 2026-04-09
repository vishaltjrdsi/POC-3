import RoleGuard from "../components/RoleGuard";

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>

      <button>View</button>

      <RoleGuard allowedRoles={["admin"]}>
        <button>Edit</button>
      </RoleGuard>
    </>
  );
};

export default Dashboard;