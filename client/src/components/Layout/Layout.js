import React from "react";
import CajaBusqueda from "../CajaBusqueda/CajaBusqueda";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const Layout = ({ children }) => (
  <>
    <CajaBusqueda></CajaBusqueda>
    <div className="container">
      <Breadcrumb></Breadcrumb>
      {children}
    </div>
  </>
);

Layout.propTypes = {};

Layout.defaultProps = {};

export default Layout;
