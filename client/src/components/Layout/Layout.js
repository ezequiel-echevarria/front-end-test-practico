import React from "react";
import PropTypes from "prop-types";
import styles from "./Layout.module.sass";
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
