import React from "react";
import styles from "./NotFound.module.sass";

const NotFound = () => (
  <section className={`hero is-medium is-bold ${styles.NotFound}`}>
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title">Page Not Found</h1>
      </div>
    </div>
  </section>
);

NotFound.propTypes = {};

NotFound.defaultProps = {};

export default NotFound;
