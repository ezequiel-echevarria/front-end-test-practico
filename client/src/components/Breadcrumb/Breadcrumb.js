import React from "react";
import styles from "./Breadcrumb.module.sass";

const Breadcrumb = ({ categories }) => {
  return (
    <div className={styles.Breadcrumb}>
      <nav className="breadcrumb has-succeeds-separator">
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

Breadcrumb.defaultProps = {};

export default Breadcrumb;
