import React from "react";
import PropTypes from "prop-types";
import styles from "./Items.module.sass";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import CajaBusqueda from "../../components/CajaBusqueda/CajaBusqueda";
import { useHistory } from "react-router-dom";

const Items = () => {
  const history = useHistory();
  const onSubmitHandler = (value) => history.push(`items?query=${value}`);

  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const queryValue = query.get("query");

  const categories = ["uno", "dos", "tres"];

  return (
    <>
      <CajaBusqueda
        query={queryValue}
        onSubmit={onSubmitHandler}
      ></CajaBusqueda>
      <div className={styles.Items}>
        <div className="container">
          <Breadcrumb categories={categories}></Breadcrumb>
          <section className="section has-background-white">
            <div className="container">
              <h1 className="title">Section</h1>
              <h2 className="subtitle">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Debitis quos nisi, ullam, numquam soluta natus odit esse alias
                ea expedita sapiente repellendus veritatis, reiciendis quibusdam
                rem blanditiis? Earum, tempora commodi!
              </h2>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

Items.propTypes = {};

Items.defaultProps = {};

export default Items;
