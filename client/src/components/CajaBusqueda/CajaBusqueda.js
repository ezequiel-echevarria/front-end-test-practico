import React, { useEffect, useState } from "react";
import styles from "./CajaBusqueda.module.sass";
import logoMl from "../../assets/Logo_ML.png";
import icSearch from "../../assets/ic_Search.png";

const CajaBusqueda = ({ query, onSubmit }) => {
  const [inputValue, setInputValue] = useState(query);
  const handleInputValueChange = (ev) => setInputValue(ev.target.value);

  const handleOnFormSubmit = (ev) => {
    ev.preventDefault();
    onSubmit(inputValue);
  };

  useEffect(() => {}, []);

  return (
    <nav className={`navbar ${styles.CajaBusqueda}`}>
      <div className="container">
        <div className="navbar-brand is-flex-grow-0">
          <a className="navbar-item" href="https://www.mercadolibre.com.ar/">
            <img src={logoMl} alt="Mercado Libre" />
          </a>
        </div>
        <div className="navbar-item is-flex-grow-1">
          <form className={styles.fullwidth} onSubmit={handleOnFormSubmit}>
            <div className="field has-addons">
              <p className="control is-expanded">
                <input
                  className="input"
                  type="text"
                  placeholder="Nunca dejes de buscar"
                  value={inputValue}
                  onChange={handleInputValueChange}
                />
              </p>
              <p className="control">
                <button className={`button ${styles.btnSearch}`}>
                  <img src={icSearch} alt="Buscar" />
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

CajaBusqueda.propTypes = {};

CajaBusqueda.defaultProps = {};

export default CajaBusqueda;
