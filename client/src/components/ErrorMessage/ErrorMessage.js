import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const ErrorMessage = ({ title, text, show }) => {
  const history = useHistory();
  const [active, setActive] = useState(false);

  const onClickHandler = () => {
    setActive(false);
    history.push("/");
  };

  useEffect(() => {
    setActive(show);
  }, [show]);

  return (
    <div className={`modal ${active ? "is-active" : ""}`}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <article className="message is-danger">
          <div className="message-header">
            <p>{title}</p>
          </div>
          <div className="message-body">
            <p>{text}</p>
            <button className="button is-primary mt-3" onClick={onClickHandler}>
              Aceptar
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

ErrorMessage.propTypes = {};

ErrorMessage.defaultProps = {};

export default ErrorMessage;
