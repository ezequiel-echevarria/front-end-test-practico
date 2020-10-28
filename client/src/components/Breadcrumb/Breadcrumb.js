import React from "react";
import PropTypes from "prop-types";
import styles from "./Breadcrumb.module.sass";

const Breadcrumb = ({ categories }) => {
  return (
    <div className={styles.Breadcrumb}>
      <nav class="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
        <ul>
          {categories.map((item, index) => {
            return (
              <li
                key={item.toString()}
                className={
                  categories.length - 1 === index
                    ? "is-active has-text-weight-bold"
                    : ""
                }
              >
                <p className={styles.BreadcrumbItem}>{item}</p>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
Breadcrumb.propTypes = {};

Breadcrumb.defaultProps = {
  category: [],
};

export default Breadcrumb;
