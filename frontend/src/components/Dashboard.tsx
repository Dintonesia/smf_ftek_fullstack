import { useAuth } from "@/hooks/useAuth";
import DashboardLayout from "@/layout/DashboardLayout";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const isAuth = useAuth();
  if (!isAuth) return <Navigate to="/login" />;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to Dashboard</h1>
      <p className="text-muted-foreground">
        Select an item from the sidebar to get started.
      </p>
    </div>
  );
};

export default Dashboard;
