import React from "react";
import "./admin.styles.css"
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  return (
    <section className="admin section" id="about">
    <h3 className="section-title">Admin page</h3>
    <hr className="title-underline" />
    <h2 className="section-title">UNDER CONSTRUCTION</h2>
    <h2 className="section-subtitle">in progress</h2>
    <div className="admin-container container grid">
      <button
      className="button button-flex sign-out"
        onClick={() => {
          localStorage.clear("authStatus");
          navigate("/", { replace: true });
        }}
      >
        log out
      </button>
      </div>
    </section>
  );
};

export default Admin;
