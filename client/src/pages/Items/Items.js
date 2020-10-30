import React, { useEffect, useState } from "react";
import styles from "./Items.module.sass";
import { useLocation } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import { useHistory } from "react-router-dom";
import Service from "../../services/ItemServices";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const Items = ({ onCategoriesChange }) => {
  const [items, setItems] = useState([]);

  const [errorMessage, setErrorMessage] = useState({
    title: "",
    text: "",
    show: false,
  });

  const history = useHistory();

  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const queryValue = query.get("query");

  const onClickHandler = (item) => history.push(`items/${item.id}`);

  useEffect(() => {
    if (queryValue && queryValue !== "")
      Service.GetByFilter(queryValue)
        .then((data) => {
          setItems(data.items);
          onCategoriesChange(data.categories);
        })
        .catch((err) => {
          setErrorMessage({
            title: "Error",
            text: "Se ha producido un error inesperado",
            show: true,
          });
        });
  }, [queryValue]);

  return (
    <div className="container">
      <section className={`section ${styles.itemSection} has-background-white`}>
        <div className="container">
          <ItemList items={items} onClick={onClickHandler}></ItemList>
        </div>
      </section>
      <ErrorMessage
        show={errorMessage.show}
        text={errorMessage.text}
        title={errorMessage.title}
      ></ErrorMessage>
    </div>
  );
};

Items.propTypes = {};

Items.defaultProps = {};

export default Items;
