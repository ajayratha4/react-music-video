import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import ApplicationLayout from "Layouts/ApplicationLayout";
import { getUser } from "utils/localStorage";

const PrivateRoute = () => {
  const userid = getUser();

  return userid ? (
    <ApplicationLayout>
      <Outlet />
    </ApplicationLayout>
  ) : (
    <Navigate replace to="/login" />
  );
};

export default PrivateRoute;
