import React from "react";
import { Outlet } from "react-router-dom";

const Music = () => {
  return (
    <div>
      Music <Outlet />
    </div>
  );
};

export default Music;
