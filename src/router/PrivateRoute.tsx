import React from "react";
import { Outlet } from "react-router-dom";
import ApplicationLayout from "Layouts/ApplicationLayout";

const PrivateRoute = () => {
  return (
    <ApplicationLayout>
      <Outlet />
    </ApplicationLayout>
  );
};

export default PrivateRoute;
