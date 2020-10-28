import React from "react";
import styles from "./Home.module.sass";
import { useHistory } from "react-router-dom";

import CajaBusqueda from "../../components/CajaBusqueda/CajaBusqueda";

const Home = () => {
  const history = useHistory();
  const onSubmitHandler = (value) => history.push(`items?query=${value}`);

  return (
    <div className={styles.Home}>
      <CajaBusqueda onSubmit={onSubmitHandler}></CajaBusqueda>
    </div>
  );
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
