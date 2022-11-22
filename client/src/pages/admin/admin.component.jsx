import React from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Admin page</h1>
      <button
        onClick={() => {
          localStorage.clear("authStatus");
          navigate("/", { replace: true });
        }}
      >
        log out
      </button>
    </div>
  );
};

export default Admin;
