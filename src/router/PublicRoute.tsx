import React from "react";
import { Outlet } from "react-router-dom";
import ApplicationLayout from "Layouts/ApplicationLayout";

const PublicRoute = () => {
  return (
    <ApplicationLayout>
      <Outlet />
    </ApplicationLayout>
  );
};

export default PublicRoute;
