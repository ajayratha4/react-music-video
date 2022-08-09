import React from "react";
import { Route, Routes } from "react-router-dom";
import { RoutesItem } from "./const";
import ApplicationLayout from "Layouts/ApplicationLayout";

type Props = {
  routItem: RoutesItem;
};

const PublicRoute = ({ routItem }: Props) => {
  const Component = routItem.component;
  return (
    <ApplicationLayout title={routItem.title}>
      <Routes>
        <Route path={routItem.path} element={<Component />} />
      </Routes>
    </ApplicationLayout>
  );
};

export default PublicRoute;
