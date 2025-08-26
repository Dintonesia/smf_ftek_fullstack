import Sidebar from "@/components/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

interface DashboardLayoutProps {
  children: React.ReactNode;
}
export function DashboardLayout({}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto p-8">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
